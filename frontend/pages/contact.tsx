import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-25">
              <h2 className="title">Get In Touch</h2>
              <p></p>
            </div>
          </div>
        </div>

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
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form pt-30">
              <form id="contact-form" action="index/process" method="POST">
                <input
                  type="text"
                  className="hidden"
                  hidden={true}
                  name="PostName"
                  value="ContactForm"
                />
                <div className="single-form">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="single-form">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="single-form">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    cols={50}
                  ></textarea>
                </div>
                <p className="form-message"></p>
                <div className="single-form">
                  <input
                    className="main-btn"
                    type="submit"
                    name="submit"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-map mt-60">
              <div className="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6616.63711605911!2d18.4686462!3d-33.9843505!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1614435543472!5m2!1sen!2sza"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
