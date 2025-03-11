import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const Filterbox = () => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(90);
  const min = 0;
  const max = 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 5);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 5);
    setMaxValue(value);
  };

  return (
    <div className="p-4">
      <h4>Double Range Slider</h4>
      <Form>
        <Row>
          <Col>
            <Form.Label>Min: {minValue}</Form.Label>
            <Form.Range
              min={min}
              max={max}
              value={minValue}
              onChange={handleMinChange}
            />
          </Col>
          <Col>
            <Form.Label>Max: {maxValue}</Form.Label>
            <Form.Range
              min={min}
              max={max}
              value={maxValue}
              onChange={handleMaxChange}
            />
          </Col>
        </Row>
      </Form>
      <div className="mt-3">
        Selected Range: {minValue} - {maxValue}
      </div>
    </div>
  );
};

export default Filterbox;
