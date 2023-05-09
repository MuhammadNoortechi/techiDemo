import React from 'react'
import "./scss/AboutTes.scss"

const AboutTes = () => {
  return (
    <>
    <div className="bg-abouttes">
        <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <ol className="carousel-indicators tabs">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                >
                  <figure>
                    <img
                      src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1">
                  <figure>
                    <img
                      src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2">
                  <figure>
                    <img
                      src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
              </ol>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div
                id="carouselExampleIndicators"
                data-interval="false"
                className="carousel slide"
                data-ride="carousel"
              >
                
                <h1 className='text-white text-capitalize fs-1 '>Whats Going At techilab ? </h1>
              <div className="points">
                <ul> 
                    <li>to make your workforce a security front line</li>
                    <li>5 creative ways to address gaps in IT resources and talent</li>
                    <li>The top 13 benefits of proactive managed services vs reactive break-fix The top 13 benefits of proactive managed</li>
                    <li>4 ways compsec pros protect their computers</li>
                    <li>5 creative ways to address gaps in IT resources and talent</li>
                    <li>to make your workforce a security front line</li>
                </ul>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default AboutTes