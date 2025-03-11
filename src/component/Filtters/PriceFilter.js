import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import '../../assets/css/filter.css';

function PriceFilter() {
    const [activeKey, setActiveKey] = useState("0"); // Default open
    const handleToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  }
  return (
    <div className="single_search_boxed"> 
    <Accordion activeKey={activeKey} onSelect={handleToggle}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        Price {activeKey === "0" ? <FaMinus/> : <FaPlus />}
        </Accordion.Header>
        <Accordion.Body>
            
        <form>
            <div className="form-group">
            <input type="checkbox" id="below1"/>
            <label htmlFor="below1">Below Rs.500 (548)</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="below2"/>
            <label htmlFor="below2">Rs.500-1000 (1,254)</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="below3"/>
            <label htmlFor="below3">Below Rs.500 (548)</label>
            </div>
        </form>	
        <div className="filter-price"> 
         <p> Enter Price Range </p>
         <div className="row"> 
          <div className="col col-md-5"> <input type="text" className="form-control" placeholder="Min"></input> </div>
          <div className="col col-md-1"> - </div>
          <div className="col col-md-5"> <input type="text" className="form-control" placeholder="Max"></input> </div>
            </div>
        </div>

           </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>
  );
}
export default PriceFilter;
