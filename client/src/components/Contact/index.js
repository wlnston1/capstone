import React from "react";

function Contact() {
  return (
    <div>
      <div className="top-part">
        <div className="dashboard-inner">
          <h4>Name</h4>
          <p> Kingstroner </p>
        </div>

        <div className="dashboard-inner">
          <h4>Record Information</h4>
          <span>
            <h6>Email </h6> <p> example@gmiual.com </p>
          </span>
          <span>
            <h6>Age </h6> <p> 12 </p>
          </span>
          <span>
            <h6>Phone</h6> <p> 321 </p>
          </span>
        </div>
        <div className="dashboard-inner">
          <h4></h4>
          <p> ? </p>
        </div>
      </div>

      <div className="bot-part">
        <div className="dashboard-inner bot-inner">
          <h4> Country </h4>
          <p> US </p>
          {/* <img src="/bar-chart.png"></img> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
