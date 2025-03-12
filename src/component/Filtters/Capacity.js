import { useState} from "react";
// import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import '../../assets/css/filter.css';

function Capacity() {
  const [activeKey, setActiveKey] = useState("0"); // Default open
    const handleToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey); 
  }
  
  return (
    <div className="single_search_boxed"> 
    <Accordion activeKey={activeKey} onSelect={handleToggle}>
    <Accordion.Item eventKey="0">
        <Accordion.Header>
        Capacity {activeKey === "0" ? <FaMinus /> : <FaPlus />}
        </Accordion.Header>
        <Accordion.Body>
        <form>
            <div className="form-group">
            <input type="checkbox" id="discounts"/>
            <label htmlFor="discounts">Metallic</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="discounts2"/>
            <label htmlFor="discounts2">Metallic</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="discounts3"/>
            <label htmlFor="discounts3">Metallic</label>
            </div>
          </form>	
             </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </div>

  );
}
export default Capacity;
