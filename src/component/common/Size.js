import React, { useState } from "react";
const ButtonGroup = () => {
    const [activeButton, setActiveButton] = useState(0);
    const handleClick = (index) => {
        setActiveButton(index);
    };
    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            {["40x60 cm", "40x90 cm", "40x100 cm"].map((label, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                        padding:"4px 6px",
                        height: "31px",
                        fontSize: "13px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: activeButton === index ? "#fd4141" : "lightgray",
                        color: activeButton === index ? "white" : "black",
                        transition: "background-color 0.3s",
                    }}>
                    {label}
                </button>
              ))}
        </div>
    );
};

export default ButtonGroup;
