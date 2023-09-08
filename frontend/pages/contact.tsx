import { ImageError } from "next/dist/server/image-optimizer";
import React, { useState, useEffect } from "react";
import ContactInformation from "components/atoms/contactInformation";
import Email from "models/email.model";
import { sendEmail } from "services/mailServices";
import Layout from "@components/layouts/frontendLayout";

const Contact = () => {
  const [item, setItem] = useState<Email | any>({});
  const handleChange = (event: any) => {
    const { target: input } = event;
    const tmpItem = { ...item };
    tmpItem[input.name] = input.value;
    setItem(tmpItem);
  };

  const handleSubmit = async (event: any) => {
    console.log(item);
    
    await sendEmail("rakgew@gmail.com", "rakgew@hotmail.com", "example email", "this is going toi be sweet once it works")
    .then((res:any)=>{
      console.log(res);
    }).catch((error:any)=>console.log(error.message))
    

  };

  return (
    <Layout>    <section id="contact" className="contact-area pt-125 pb-130 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-25">
              <h2 className="title">Get In Touch</h2>
              <p></p>
            </div>
          </div>
        </div>
        <ContactInformation />
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form pt-30">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="single-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={item.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="single-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={item.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="single-form">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    cols={50}
                    value={item.message}
                    onChange={handleChange}
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
    </Layout>

  );
};

export default Contact;
