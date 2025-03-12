import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/menu.css';
import bathimage from '../../assets/images/Bath-Set.jpg'; 
import carpetimage from '../../assets/images/Carpetimages.jpg';
export default function Menubar(){
 return(
 <> 
  <nav>
    <div className="wrapper">
      <input type="radio" name="slider" id="menu-btn" />
       <input type="radio" name="slider" id="close-btn" />
       <ul className="nav-links">
        <label htmlFor="close-btn" className="btn close-btn">
          <i className="bi bi-x"></i>
        </label>
        {/* <li><Link to="/">Home</Link> </li> */}
        {/* <li><Link to="/about"> About </Link> </li>
        <li><Link to="/collection"> Collection</Link> </li> */}
        
        <li>
          <Link to="/collection">BATH SET</Link>
          <input type="checkbox" id="showMega" />
          <label htmlFor="showMega" className="mobile-item">
            Mega Menu
          </label>
          <div className="mega-box">
            <div className="content">
            <div className="row">
                {/* <header>Design Services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Bath Mat</a>
                  </li>
                  <li>
                    <a href="#">Bath Set</a>
                  </li>
                  <li>
                    <a href="#">Shower Curtain</a>
                  </li>
                  <li>
                    <a href="#">Shower Mat</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                {/* <header>Email Services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Soap Dish</a>
                  </li>
                  <li>
                    <a href="#">Business Email</a>
                  </li>
                  <li>
                    <a href="#">Mobile Email</a>
                  </li>
                  <li>
                    <a href="#">Web Marketing</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                {/* <header>Security services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Site Seal</a>
                  </li>
                  <li>
                    <a href="#">VPS Hosting</a>
                  </li>
                  <li>
                    <a href="#">Privacy Seal</a>
                  </li>
                  <li>
                    <a href="#">Website design</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <img src={bathimage} alt="" /> 
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/collection" className="desktop-item">
          DUSTBINS
          </Link>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop" className="mobile-item">
            Dropdown Menu
          </label>
          <ul className="drop-menu">
            <li>
              <a href="#">Open Bin</a>
            </li>
            <li>
              <a href="#">Sensor Bin</a>
            </li>
            <li>
              <a href="#">Step Bin</a>
            </li>
            <li>
              <a href="#">Commercial Bin</a>
            </li>
            <li>
              <a href="#">Table Bin </a>
            </li>
            <li>
              <a href="#">Kitchen Bin </a>
            </li>
          </ul>
        </li>
        <li>  
        <Link to="/collection" className="desktop-item"> FLOOR COVERING  </Link>

        <input type="checkbox" id="showMega" />
          <label htmlFor="showMega" className="mobile-item">
            Mega Menu
          </label>
          <div className="mega-box">
            <div className="content">
             
              <div className="row">
                {/* <header>Design Services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Bath Mat</a>
                  </li>
                  <li>
                    <a href="#">Bath Set</a>
                  </li>
                  <li>
                    <a href="#">Shower Curtain</a>
                  </li>
                  <li>
                    <a href="#">Shower Mat</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                {/* <header>Email Services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Soap Dish</a>
                  </li>
                  <li>
                    <a href="#">Business Email</a>
                  </li>
                  <li>
                    <a href="#">Mobile Email</a>
                  </li>
                  <li>
                    <a href="#">Web Marketing</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                {/* <header>Security services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Site Seal</a>
                  </li>
                  <li>
                    <a href="#">VPS Hosting</a>
                  </li>
                  <li>
                    <a href="#">Privacy Seal</a>
                  </li>
                  <li>
                    <a href="#">Website design</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <img src={bathimage} alt="" /> 
              </div>
            </div>
          </div>
         </li>

        <li>
          <Link to="/collection" className="desktop-item">
          KITCHEN
          </Link>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop" className="mobile-item">
            Dropdown Menu
          </label>
          <ul className="drop-menu">
            <li>
              <a href="#">Counter Organizer </a>
            </li>
            <li>
              <a href="#">Shelf Liner</a>
            </li>
            <li>
              <a href="#">Soap Pump</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/collection" className="desktop-item">
          ORGANISERS
          </Link>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop" className="mobile-item">
            ORGANISERS
          </label>
          <ul className="drop-menu">
            <li>
              <a href="#">Storage Basket</a>
            </li>
            {/* <li>
              <a href="#">Drop menu 2</a>
            </li>
            <li>
              <a href="#">Drop menu 3</a>
            </li>
            <li>
              <a href="#">Drop menu 4</a>
            </li> */}
          </ul>
        </li>
        <li>
          <Link to="/collection" className="desktop-item">
          TABLEWARE
          </Link>
          <input type="checkbox" id="showMega" />
          <label htmlFor="showMega" className="mobile-item">
            Mega Menu
          </label>
          <div className="mega-box">
            <div className="content">
            <div className="row">
                <div className='headerbox'>Design Services</div>
                <ul className="mega-links">
                  <li>
                    <a href="#">Air Tight Jar</a>
                  </li>
                  <li>
                    <a href="#">Butter Dish</a>
                  </li>
                  <li>
                    <a href="#">Fork Holder</a>
                  </li>
                  <li>
                    <a href="#">Name Card Holder </a>
                  </li>
                </ul>
              </div>
              <div className="row">
                {/* <header>Email Services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Napkin Holder</a>
                  </li>
                  <li>
                    <a href="#">Salt & Pepper Sprinkler </a>
                  </li>
                  <li>
                    <a href="#">Sugar Jar with Tray </a>
                  </li>
                  <li>
                    <a href="#">Table Mat</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                {/* <header>Security services</header> */}
                <ul className="mega-links">
                  <li>
                    <a href="#">Toothpick Holder</a>
                  </li>
                  <li>
                    <a href="#">Trivet </a>
                  </li>
                  <li>
                    <a href="#">Wine Opener</a>
                  </li>
                  {/* <li>
                    <a href="#">Website design</a>
                  </li> */}
                </ul>
              </div>
              <div className="row">
                <img src={carpetimage} alt="" /> 
              </div>

            </div>
          </div>
        </li>
        <li>
          <Link to="/collection" className="desktop-item">
          YOGA MAT
          </Link>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop" className="mobile-item">
            ORGANISERS
          </label>
          <ul className="drop-menu">
            <li>
              <a href="#">Drop menu 1</a>
            </li>
            <li>
              <a href="#">Drop menu 2</a>
            </li>
            <li>
              <a href="#">Drop menu 3</a>
            </li>
            <li>
              <a href="#">Drop menu 4</a>
            </li>
          </ul>
        </li>
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn" style={{ color:"#000" }}>
        <i className="bi bi-list"></i>
      </label>
    </div>
  </nav>
 </>

 )

}
