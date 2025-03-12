import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import '../../assets/css/filter.css';

function Category(props) {

    const [activeKey, setActiveKey] = useState("0"); // Default open
    const handleToggle = (eventKey) => {
        setActiveKey(activeKey === eventKey ? null : eventKey);
    }
    return (
        <div className="single_search_boxed border-top-none">
            <Accordion activeKey={activeKey} onSelect={handleToggle}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Category {activeKey === "0" ? <FaMinus /> : <FaPlus />}
                    </Accordion.Header>
                    <Accordion.Body>
                        <form>
                            <div className="form-group">
                                <input type="checkbox" id="Mat" />
                                <label htmlFor="Mat"> Bath Mat </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="Set" />
                                <label htmlFor="Set">Bath Set </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="Outdoor" />
                                <label htmlFor="Outdoor"> Outdoor Mat </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="Curtain" />
                                <label htmlFor="Curtain"> Shower Curtain </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="Shower" />
                                <label htmlFor="Shower"> Shower Mat </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="Dish" />
                                <label htmlFor="Dish"> Soap Dish </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="Dispenser" />
                                <label htmlFor="Dispenser"> Soap Dispenser </label>
                            </div>
                        </form>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
export default Category;
