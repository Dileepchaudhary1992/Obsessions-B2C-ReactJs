import React, { useState } from "react";
import Crpetbox from "../../assets/images/Bath-Set.jpg";

const SidebarModal = ({ position = "right" }) => {
const [show, setShow] = useState(false);
const toggleModal = () => setShow(!show);

  return (
    <div>
      <div className="Header-top-box">
        <button className="cart-icon" onClick={toggleModal}>
          <i className="bi bi-bag"></i>
          <span className="circle-cart"> 0 </span>
        </button>
      </div>

      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={toggleModal}
      >
        <div
          className="modal-dialog"
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            [position]: 0,
            width: "400px",
            margin: 0,
            height: "100vh",
            transform: show
              ? "translateX(0)"
              : position === "left"
              ? "translateX(-100%)"
              : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
            background: "white",
            boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={toggleModal}
              ></button>
              <h5 className="modal-title text-custom-15"> Your Cart(0) </h5>
              <button className="download">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 7H2V18H18V7H14" stroke="#282521"></path>
                  <path
                    d="M9.5 14L9.5 14.5L10.5 14.5L10.5 14L9.5 14ZM10.3536 0.646446C10.1583 0.451184 9.84171 0.451184 9.64645 0.646446L6.46447 3.82843C6.2692 4.02369 6.2692 4.34027 6.46447 4.53553C6.65973 4.7308 6.97631 4.7308 7.17157 4.53553L10 1.70711L12.8284 4.53553C13.0237 4.7308 13.3403 4.7308 13.5355 4.53553C13.7308 4.34027 13.7308 4.02369 13.5355 3.82843L10.3536 0.646446ZM10.5 14L10.5 1L9.5 1L9.5 14L10.5 14Z"
                    fill="#282521"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="modal-body">

            <div className="product-Flex">
                <div className="box-img">
                  <img src={Crpetbox} alt="carpet" />
                </div>
                <div className="box-content">
                  <p className="titale-heading">
                    Justina Blakeney Josephine Midnight Rug
                  </p>
                  <p className="Parasafe"> Flatwoven Rug + Standard Pad </p>
                  <p className="font-size"> 6'x9' </p>
                </div>
                <div className="box-amount">
                  <p className="text-tiny">$1118.00</p>
                </div>
            </div>

              <div className="add-to-cart">
                <button className="add"> GO TO CHECK OUT </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarModal;
