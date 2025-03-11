import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import '../../assets/css/filter.css';

function Color() {
    const [activeKey, setActiveKey] = useState("0"); // Default open
    const handleToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
    
  }
  
  return (
    <div className="single_search_boxed"> 
   <Accordion activeKey={activeKey} onSelect={handleToggle}>
   <Accordion.Item eventKey="0">
        <Accordion.Header>
        Color {activeKey === "0" ? <FaMinus /> : <FaPlus />}
        </Accordion.Header>
        <Accordion.Body> 
        <form>
            <div className="form-group">
            <input type="checkbox" id="Beiges"/>
            <label htmlFor="Beiges">Beiges & Browns</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="Browns"/>
            <label htmlFor="Browns"> Browns</label>
            </div>
            <div className="form-group">
            <input type="checkbox" id="Orange"/>
            <label htmlFor="Orange">Orange</label>
            </div>
        </form>	

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

  );
}
export default Color;
