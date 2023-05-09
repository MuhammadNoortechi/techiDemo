import React from "react";
import "./scss/ContactHero.scss";
import lunch from "../assets/lunch.png"
const ContactHero = () => {
  return (
    <>
      <div className="bg-contact-page">
        <div className="container container-contact-us">
          <div className="contact-heading-hero">
            <div className="heading-contact-page text-center text-white ">Contact us </div>

            <div className="text-center text-white para-contact-page">
              Interested in our IT services or need advice? Then please get in
              touch and we’ll be glad to help.
            </div>
            
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <div className="h4  rounded p-5 card-border">
                <div className="heading-card-contact text-center fw-bold text-white fs-2">FAQs</div>
                <div className="para-card-contact text-center  text-white py-4" style={{fontSize:"20px"}}>
                  For quick answers to common questions, try our FAQ first
                </div>
                <div className="d-flex justify-content-center py-4"  >
                  <img
                    src={lunch}
                    alt=""
                    className="" style={{width:"4rem"}}
                  />
                </div>
                <div className="text-card-contact text-center text-white fw-bold fs-5">Help Center</div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="h4  rounded p-5 card-border">
                <div className="heading-card-contact text-center fw-bold text-white fs-2">FAQs</div>
                <div className="para-card-contact text-center  text-white py-4" style={{fontSize:"20px"}}>
                  For quick answers to common questions, try our FAQ first
                </div>
                <div className="d-flex justify-content-center py-4"  >
                  <img
                    src={lunch}
                    alt=""
                    className="" style={{width:"4rem"}}
                  />
                </div>
                <div className="text-card-contact text-center text-white fw-bold fs-5">Help Center</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="h4  rounded p-5 card-border">
                <div className="heading-card-contact text-center fw-bold text-white fs-2">FAQs</div>
                <div className="para-card-contact text-center  text-white py-4" style={{fontSize:"20px"}}>
                  For quick answers to common questions, try our FAQ first
                </div>
                <div className="d-flex justify-content-center py-4"  >
                  <img
                    src={lunch}
                    alt=""
                    className="" style={{width:"4rem"}}
                  />
                </div>
                <div className="text-card-contact text-center text-white fw-bold fs-5">Help Center</div>
              </div>
            </div>
          </div>
          <div className="email-contact-page text-center fs-4  pt-5 fw-bold">You can also email us <span className="span-email"> hr@techilab.com</span></div>
        <div className="linked-in-contactpage text-center fs-5 pt-3 fw-bold">Follow us on linkedin <span className="span-linkedin"> Techilab Linkedin</span></div>
        </div>

       
      </div>
    </>
  );
};

export default ContactHero;
