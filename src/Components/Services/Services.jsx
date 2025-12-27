import React from "react";
import "./Services.css";
import pattern from "../../assets/pattern.svg";
import { Services_Data } from "../../assets/services_data.js";
import read_more from "../../assets/read_more.jpg";
function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((item, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{item.s_no}</h3>
              <h2>{item.s_name}</h2>
              <p>{item.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
