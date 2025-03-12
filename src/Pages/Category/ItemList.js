import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/productlist.css";
import Discount from "../../component/Filter/Discount";
import PriceFilter from "../../component/Filter/PriceFilter";
import Addtocartbutton from "../../component/Layout/Addtocartbutton";
import imagesupload from '../../assets/images/Bath-Set.jpg';
import http from '../../Services/api';
import CommonFilter from "../../component/Filter/CommonFilter";
import Category from "../../component/Filter/Category";


// Set page size to 25
const PAGE_SIZE = 25;

function Service() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract page number from URL
  const getPageFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return Number(params.get("page")) || 1;
  };

  const [currentPage, setCurrentPage] = useState(getPageFromUrl);
  const [sortOption, setSortOption] = useState('1');
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sync URL with current page
  useEffect(() => {
    navigate(`?page=${currentPage}`, { replace: true });
  }, [currentPage, navigate]);

  // Fetch products from API
  const fetchProducts = () => {
    setLoading(true);
    setError(null);  // Clear any previous errors
    http.get("products?category_id=13")
      .then((res) => {
        if (res.data.success) {
          setProducts(res.data.products);
          setFilters(res.data.filters.data);
        } else {
          setError("Failed to load products");
        }
      })
      .catch((error) => {
        setError("An error occurred while fetching products");
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Sort by price (low to high, high to low)
  const sortByPrice = (a, b) => a.price - b.price;
  const sortedData = [...products].sort((a, b) =>
    sortOption === '2' ? sortByPrice(a, b) : sortOption === '3' ? sortByPrice(b, a) : 0
  );

  // Paginate the sorted data
  const productsData = sortedData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  // Get page numbers for pagination
  const getPageNumbers = () => {
    const range = [];
    const totalPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(totalPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + totalPagesToShow - 1);
    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <section className="collection-box">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 p-xl-0">
            <div className="border mb-0 m-2 mt-0">
              <Category />
              <Discount />
              <CommonFilter filters={filters} />
              <PriceFilter />
            </div>
          </div>

          <div className="col-xl-10 col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-12">
                <div className="border mb-3 mfliud">
                  <div className="row align-items-center py-2 m-0">
                    <div className="col col-xl-10 col-lg-4 col-md-5 col-sm-12">
                      <h6 className="mb-0">Showing {productsData.length} of {products.length} items</h6>
                    </div>
                    <div className="col-xl-2 col-lg-8 col-md-7 col-sm-12">
                      <select
                        className="custom-select simple"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}>
                        <option value="1">Default Sorting</option>
                        <option value="2">Sort by price: Low to High</option>
                        <option value="3">Sort by price: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
              {loading && <div>Loading products...</div>}
              {error && <div className="error">{error}</div>}
              {!loading && !error && productsData.map((product) => (
                <div className="col-md-3 col-sm-6" key={product.id}>
                  <div className="product-grid">
                    <div className="product-image">
                      <Link to="#" className="image">
                        <img
                          className="img-1"
                          src={product.media}
                          alt={product.name}
                          onError={(e) => (e.target.src = imagesupload)} />
                        <img className="img-2" src={product.media} alt={product.name} />
                      </Link>
                      <Addtocartbutton />
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <Link to="#">{product.name}</Link>
                      </h3>
                      <div className="price">
                        ₹{product.price} - <span className="cut-price">₹{product.mrp}</span>
                      </div>
                      <div className="ShopNow">
                        <Link to="#">
                          <i className="bi bi-cart2"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination with Range */}
            <div className="flex justify-center items-center gap-2 mt-4" style={{ textAlign: "center" }}>
              <button
                className="px-3 py-1 border bg-blue-500 text-black disabled:bg-gray-300"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{ borderRadius: "2px", margin: "0px 2px" }}
              >
                Prev
              </button>

              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border  ${currentPage === page ? 'bg-blue-700' : 'bg-blue-500 '}`}
                  style={{ borderRadius: "2px", margin: "0px 2px" }}
                >
                  {page}
                </button>
              ))}

              <button
                className="px-3 py-1 border  bg-blue-500 text-black disabled:bg-gray-300"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                style={{ borderRadius: "2px", margin: "0px 2px" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
