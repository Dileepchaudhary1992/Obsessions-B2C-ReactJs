import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Collection from "../Pages/Collection";
import Header from "../component/Layout/Header";
import Menubar from "../component/Layout/Menubar";
import Footers from "../component/Layout/Footers";

export default function AppRouter(){

return(
<>
<Router> 
<Header subtitle="0"/>
<Menubar/>
<Routes> 
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/collection' element={<Collection/>}/>
{  /*- Content-Part */ }
</Routes>
<Footers/>
</Router>

</>
)

}