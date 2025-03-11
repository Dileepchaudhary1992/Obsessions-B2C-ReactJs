import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import '../../assets/css/filter.css';

function Sizes() {
  const [activeKey, setActiveKey] = useState("0"); // Default open
  const handleToggle = (eventKey) => {
  setActiveKey(activeKey === eventKey ? null : eventKey);
  }
  return (
    <div className="single_search_boxed"> 
    <Accordion activeKey={activeKey} onSelect={handleToggle}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        Size {activeKey === "0" ? <FaMinus/> : <FaPlus />}
        </Accordion.Header>
        <Accordion.Body>
            
        <form>
            <div className="form-group">
            <input type="checkbox" id="below1"/>
            <label htmlFor="below1">1-2Y (18)</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="below2"/>
            <label htmlFor="below2">R1-2Y (18)</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="below3"/>
            <label htmlFor="below3">1-2Y (18)</label>
            </div>
        </form>	


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}
export default Sizes;
