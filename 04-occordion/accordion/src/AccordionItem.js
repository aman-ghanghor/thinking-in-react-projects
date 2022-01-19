import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const AccordionItem = () => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="accordion-item">
      <div className="item item-que" onClick={toggleCollapse}>
        <h3>Vaccine available for age group 15-18 yrs</h3>
        <span>{collapse ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
      </div>
      {!collapse && (
        <div className="item item-ans">
          <p>
            Children of age group 15-18 yrs can now register on Co-WIN portal
            using AADHAAR card, PAN Card, Unique Disability ID, Ration card with
            Photo and School Photo ID card. Only COVAXIN is approved for this
            age group currently.
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
