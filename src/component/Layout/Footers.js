function Footers(){
 return(
  <div>
     <section className="footer">
       <div className="container">
       <div className="row">
       <div className="col-md-9 col-sm-8">
       <div className="row">
       <div className="col-md-3 col-sm-3 col-xs-3 dis-none">
       <div className="f-box">
       <h3>COMPANY</h3>
       <ul className="batch-box">
       <li><a href="#" title="About Us"> About Us </a></li>
       <li><a href="#" title="Media"> Media </a></li>
       <li><a href="#" title="Contact Us"> Contact Us </a></li>
       </ul>
       </div>
       </div>
       <div className="col-md-5 col-sm-6 col-xs-7">
       <div className="f-box">
       <h3>POLICIES</h3>
       <ul className="batch-box batch-box-001">
       <li><a href="#" title="Cancellation, Return &amp; Refund Policy">Cancellation, Return &amp; Refund Policy</a></li>
       <li><a href="#" title="Fees &amp; Payments Policy">Fees &amp; Payments Policy</a></li>
       <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
       <li><a href="#" title="T&amp;C of Sale">T&amp;C of Sale</a></li>
       <li><a href="#" title="Terms of Use">Terms of Use</a></li>
       <li><a href="#" title="FAQ's"> FAQ's</a></li>
       </ul>
       </div>
       </div>
       
       <div className="col-md-4 col-sm-3 col-xs-5 col-md-myyyy">
       <div className="f-box">
       <h3>INFORMATION</h3>
       <ul className="batch-box">
       <li><a href="#" title="Track Order"> Track Order </a>
       </li>
       <li><a href="#" title="Bulk Purchase Enquiry"> Bulk
       Purchase Enquiry </a></li>
       <li className="m-d-none"><a href="#" title="About Us"> About
       Us
       </a></li>
       <li className="m-d-none"><a href="#" title="Media"> Media </a>
       </li>
       <li className="m-d-none"><a href="#" title="Contact Us">
       Contact Us </a>
       </li>
       </ul>
       </div>
       </div>
       </div>
       </div>
       
       <div className="col-md-3">
       <div className="subscribe">
       <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
       <p className="paddin001"><input type="email" className="email" id="email" name="email" placeholder="Enter your email address" required=""/></p>
       <p className="paddin001">
       <button className="btn Subcribe-btn" id="subscribeform">Subscribe Now</button>
       </p>
       <p id="msg"></p>
       
       <div className="col-md-12 col-xs-12">
       <h5 ><i className="fa fa-link" ></i> CONNECT WITH US
       </h5>
       <div className="Social-media">
       <a href="#" target="_blank" title="facebook">
       <font color="#007cc4"><i className="fa fa-facebook"></i></font>
       </a>
       <a href="#" target="_blank" title="instagram">
       <font color="#007cc4"><i className="fa fa-instagram"></i></font>
       </a>
       <a href="https://www.youtube.com/@obsessionsindia1023" target="_blank" title="YouTube">
       <font color="#007cc4"><i className="fa fa-youtube"></i></font>
       </a>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>
       </section>

 <section className="copyright">
   <div className="container">
       <div className="row">
           <div className="col-md-6">
               <p >Copyright © 2025 obsessions.co.in | All Rights Reserved.</p>
           </div>
           <div className="col-md-6">
               <div className="row">

                   <div className="col-md-2 col-xs-3">
                       <div className="M00005"><img src="https://www.obsessions.co.in/store/images/ssl-icon.png"  style={{ width: "65px" }}  /></div>
                   </div>
                   <div className="col-md-2 col-xs-3">
                       <div className="M00005"><img src="https://www.obsessions.co.in/store/images/ssl-icon1.png"  style={{ width: "65px" }} /></div>
                   </div>
                   <div className="col-md-8 col-xs-6">
                       <div className="M00005"><img src="https://www.obsessions.co.in/store/images/pymnt-strip.png"   style={{ width: "80%" }} />
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
       
</div>

 )


}
export default Footers;

