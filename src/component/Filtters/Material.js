import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import '../../assets/css/filter.css';

function Material() {
  const [activeKey, setActiveKey] = useState("0"); // Default open
  const handleToggle = (eventKey) => {
  setActiveKey(activeKey === eventKey ? null : eventKey);
  }
  
  return (
    <div className="single_search_boxed"> 
    <Accordion activeKey={activeKey} onSelect={handleToggle}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        Material {activeKey === "0" ? <FaMinus /> : <FaPlus />}
        </Accordion.Header>
        <Accordion.Body className="show">
          
        <form>
            <div className="form-group">
            <input type="checkbox" id="Metallic"/>
            <label htmlFor="Metallic">Metallic</label>
            </div>
           
        </form>	

             </Accordion.Body>
         </Accordion.Item>
     </Accordion>
    </div>

  );
}
export default Material;
