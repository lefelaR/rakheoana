import React from "react";

const contactInformation = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-7">
        <div className="contact-box text-center mt-30">
          <div className="contact-icon">
            <i className="lni lni-map"></i>
          </div>
          <div className="contact-content">
            <h6 className="contact-title">Address</h6>
            <p>Claremont, Western Cape 7708</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-7">
        <div className="contact-box text-center mt-30">
          <div className="contact-icon">
            <i className="lni lni-phone"></i>
          </div>
          <div className="contact-content">
            <h6 className="contact-title">Phone</h6>
            <p>+277 (0) 8 375 4146</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-7">
        <div className="contact-box text-center mt-30">
          <div className="contact-icon">
            <i className="lni lni-envelope"></i>
          </div>
          <div className="contact-content">
            <h6 className="contact-title">Email</h6>
            <p>rakgew@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactInformation;
