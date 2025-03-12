import React, { useState } from 'react';

export default function Productcounter() {
 const [count, setCount ]= useState(0)
  return (
     <div className='d-flex mb-3'>
        <button onClick={()=> setCount(count - 1)} className='btn btn-primary' style={{borderTopRightRadius: "0", borderBottomRightRadius: "0", height: "28px", paddingTop: "0"}}> - </button>
        <input type='text' value={count} style={{ width: "51px", textAlign: "center", outline: "none", borderRadius: "0", border: "1px solid rgb(170 167 167)"}}/>
        <button onClick={()=> setCount(count + 1)} className='btn btn-primary' style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0", height: "28px", paddingTop: "0"}}> + </button>
     </div>
  )
}