import React from 'react'
import "./scss/ServiceTestimonial.scss"
import karl from "../assets/karl.png"
import devid from "../assets/devid.png"
const ServiceTestimonial = () => {
  return (
    <section className="section">
    <div className="container">
        <div className="section-header fs-1">Client Review </div>
        <div className="testimonials">
            
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="single-item">
                      <div className="row ">
                          <div className="col-md-5">
                              <div className="profile">
                                  <div className="img-area">
                                      <img src={devid} alt=""/>
                                  </div>
                                  <div className="bio">
                                      <h2>Devin Sawyer</h2>
                                      {/* <h4>Web Developer</h4> */}
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="content">
                                  <p><span><i className="fa fa-quote-left"></i></span>I wanted to thank you all and the team for the great work on RobotDrop.Fun.  It's a great site and works well now on Polygon.
                                   I have some work to do to finish the content site, robotdrop.nft, and upload/create the RobotDrop NFT collection for promoting the DEX, but overall, the functionality is working great and I am very impressed by the skills and commitment of this team!</p>
                                 
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="single-item">
                      <div className="row">
                          <div className="col-md-5">
                              <div className="profile">
                                  <div className="img-area">
                                      <img src={karl} alt=""/>
                                  </div>
                                  <div className="bio">
                                      <h2>Karl</h2>
                                      {/* <h4>UI/UX Designer</h4> */}
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="content">
                                  <p><span><i className="fa fa-quote-left"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!</p>
                                 
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="single-item">
                      <div className="row">
                          <div className="col-md-5">
                              <div className="profile">
                                  <div className="img-area">
                                      <img src="https://images.unsplash.com/photo-1586796676792-20fbdf87659e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt=""/>
                                  </div>
                                  <div className="bio">
                                      <h2>Stephen Jones</h2>
                                      {/* <h4>Graphic Designer</h4> */}
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="content">
                                  <p><span><i className="fa fa-quote-left"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!</p>
                              
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            
        </div>
    </div>
</section>
  )
}

export default ServiceTestimonial