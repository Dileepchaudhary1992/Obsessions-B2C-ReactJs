
import '../../assets/css/newarivelstyle.css';
import React, {useEffect, useState} from 'react';
import http from "../../Services/api";

export default function Newarivel(Propus) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

   const fetchProducts = () => {
       http.get("/products?category_id=9&limit=4")
         .then((res) => {
           if (res.data.success) {
             setProducts(res.data.products);
           }
         })
         .catch((error) => console.error("Error fetching products:", error));  
        };

    return (
        <section className="bestsellerbox-carpet">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <h2> {Propus.Subheadding} </h2>
                    </div>
                    <div className="col-md-11">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-3" key={product.id}>
                            <div className="box">
                                <div className="box-product">
                                    <img src={product.media} alt={product.title} />
                                </div>
                                <div className="content-box">
                                    <h3>{product.name}</h3>
                                    <button className="btn btn-primary">
                                       ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

