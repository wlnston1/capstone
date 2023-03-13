import React from "react";

import Employee from "../Employee";
import InfoBox from "../InfoBox";

function Contact() {



  return (
    <div>
      <div className="top-part">
        <div className="contact-inner">
          <h4>Total Employees</h4>
          <p> 456 </p>
        </div>

        <div className="contact-inner">
          <h4>Age Ranges</h4>
          <h6> From 24 to 64</h6>
        </div>
        <div className="contact-inner">
          <InfoBox></InfoBox>
        </div>
      </div>

      <div className="bot-part">
        <div className="bot-inner">
          <Employee></Employee>
        </div>
      </div>
    </div>
  );
}

export default Contact;
