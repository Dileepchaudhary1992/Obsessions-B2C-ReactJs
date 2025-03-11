import Topcontent from "./Topcontent";
import "../../assets/css/head.css"
export default function Tophead(){

  return(
   <section className="top-box">  
     <div className="container"> 
       <div className="row"> 
      <div className="col-md-3"> &nbsp; </div>
      <div className="col-md-6"> <Topcontent/> </div>
      <div className="col-md-3"> &nbsp; </div> 
      </div>
     </div>
   </section>
  )
}

