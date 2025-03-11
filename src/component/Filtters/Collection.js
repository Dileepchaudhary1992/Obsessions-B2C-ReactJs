import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import '../../assets/css/filter.css';
import Morefilter from "./Morefilter";
function Collection() {
    const [activeKey, setActiveKey] = useState("0"); // Default open
    const handleToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  }

  return (
    <div className="single_search_boxed"> 
    <Accordion activeKey={activeKey} onSelect={handleToggle}>
    <Accordion.Item eventKey="0">
        <Accordion.Header>
        Collection {activeKey === "0" ? <FaMinus /> : <FaPlus />}
        </Accordion.Header>
        <Accordion.Body> 

        <form>
            <div className="form-group">
            <input type="checkbox" id="Abby"/>
            <label htmlFor="Abby"> Abby</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="Afghan"/>
            <label htmlFor="Afghan">Afghan</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="Ahvaz"/>
            <label htmlFor="Ahvaz">Ahvaz</label>
            </div>
        </form>	
          <Morefilter/>

             </Accordion.Body>
         </Accordion.Item>
     </Accordion>
    </div>

  );
}
export default Collection;
