
import Herrobanner from "../component/Home/Herrobanner";
import Latestcollection from "../component/Home/Latestcollection";
import Bestsellerbanner from "../component/Home/Bestsellerbanner";
import Newarivel from "../component/Home/Newarivel";
import Newluanch from "../component/Home/Newluanch";
import Obsesionlife from "../component/Home/Obsesionlife";
import Dustbin from "../component/Home/Dustbin";
import Dustbinproduct from "../component/Home/Dustbinproduct";

function Home(){
 return(
      <> 
        <Herrobanner/>
        <Latestcollection/>
        <Newluanch/>
        <Bestsellerbanner/>
        <Newarivel/>
        <Dustbin/>
        <Dustbinproduct Subheadding="Dustbin"/>
        <Obsesionlife/>
    
      </> 
 )
}
export default Home;