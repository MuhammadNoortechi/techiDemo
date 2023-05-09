import React from "react";
import "../css/HeroSection.scss";

import ParticlesBg from "./ParticlesBg";
const HeroSection = () => {
  return (
    <>
      <ParticlesBg />
      <div className="bg">
        <div className="container container-hero">
          <div className="wrapper pt-5">
            <div className="hero-text">We Build</div>
            <div className="hero-heading">
              Agile <span className="heading-span-tag">Software</span> <br />
              Development Teams
            </div>
            <div
              className="services-hero fw-bold "
              style={{ color: "#16A092" }}
            >
              BlockChain | Artificial intilligence | Data Science | Ecommerce |
              DevOps
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
