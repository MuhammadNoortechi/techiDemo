import React from "react";
import "../css/DeliveredSec.scss";
import bag from "../assets/bag.png";
import lock from "../assets/lock.png";
import tag from "../assets/tag.png";
import login from "../assets/login.png";
const DeliveredSec = () => {
  return (
    <section className="section-del">
      <div className="container-del container">
        <div>
          <img src={login} alt="" className="w-25" />
          <h3>Happy Cutomers</h3>
        </div>
        <div>
          <img src={tag} alt="" className="w-25" />

          <h3>22500+lines of code</h3>
        </div>
        <div>
          <img src={lock} alt="" className="w-25" />

          <h3>10+ Projects</h3>
        </div>
        <div>
          <img src={bag} alt="" className="w-25" />

          <h3>30+ Developer </h3>
        </div>
      </div>
    </section>
  );
};

export default DeliveredSec;
