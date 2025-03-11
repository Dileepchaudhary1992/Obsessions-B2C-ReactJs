import { useState } from "react";

export default  function ClickName(){
   const [name, setname] = useState('Rahul');

  return(

    <> 
     <p> Button clcik to name Change {name} </p>
     <button className="btn btn-primary" onClick={()=> setname('Dileep')}> BUTTON </button>
    
    
    </>


  )

}