import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../assets/css/filter.css";

const CommonFilter = ({ filters }) => {
    const [activeKey, setActiveKey] = useState(null); // Default closed

    const handleToggle = (eventKey) => {
        setActiveKey(activeKey === eventKey ? null : eventKey);
    };

    return (<div>
        {Object.entries(filters).map(([key, values], index) => (
            <div className="single_search_boxed">
                <Accordion activeKey={activeKey} onSelect={handleToggle}>
                    <Accordion.Item eventKey={index.toString()} key={key}>
                        <Accordion.Header>
                            {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                            {activeKey === index.toString() ? <FaMinus /> : <FaPlus />}
                        </Accordion.Header>
                        <Accordion.Body>
                            {values.length > 0 ? (
                                values.map((item, i) => (
                                    <div className="form-group" key={`${key}-${i}`}>
                                        <input type="checkbox" id={`${key}-${i}`} />
                                        <label htmlFor={`${key}-${i}`}>{item}</label>
                                    </div>
                                ))
                            ) : (
                                <p>No options available</p>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        ))}
    </div>
    );
};

export default CommonFilter;
