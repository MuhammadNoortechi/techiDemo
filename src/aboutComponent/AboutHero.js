import React from 'react'
import "../aboutComponent/scss/AboutHero.scss"
import { Link} from "react-router-dom";
const AboutHero = () => {
  return (
   <>
    <div className="bg-About-page">
        <div className="container container-hero">
          <div className="wrapper pt-5">
            <div className="hero-text">TECHILAB</div>
            <div className="hero-heading">
             About us
            </div>
            <div
              className="about-hero fw-bold "
              style={{ color: "#16A092" }}
            >
          Proudly serving the world’s top asset finance and leasing companies with smart software technology for over four decades.
            </div>
            <Link to="/contact">
            <button className='btn-get-in-touch   rounded'>Get in touch</button>
            </Link>
          </div>
        </div>
      </div>

   
   </>
  )
}

export default AboutHero