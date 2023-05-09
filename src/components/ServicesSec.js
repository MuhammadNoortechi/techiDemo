import React from "react";
import "../css/ServicesSec.scss";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import datasci from "../assets/datasci.png";
import devops from "../assets/devops.png";
import iot from "../assets/iot.png";
import ecommerce from "../assets/ecommerce.png";
const ServicesSec = () => {
  return (
    <>
      <section>
        <div className="container row-ser">
          <div className="row">
            <h2 className="section-heading text-center text-white fw-bold fs-1 ">
              {" "}
              What we do ?
            </h2>
            <div className="what d-flex justify-content-center mt-4">
              <p className=" w-75 text-center  what-we-do-p">
                We hire top 5% of the available talent, and provide you with
                technically proficient and motivated team members for the
                following technologies on staff augomentation model.
              </p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="column">
              <div className="card ">
                <div className="icon-wrapper">
                  <img src={blockchain} alt="" style={{ width: "63px" }} />
                </div>
                <h3>Blockchain Web3</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <img src={ai} alt="" style={{ width: "63px" }} />
                </div>
                <h3>Artificial Intelligence</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <img src={devops} alt="" style={{ width: "63px" }} />
                </div>
                <h3>DevOps</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <img src={datasci} alt="" style={{ width: "63px" }} />
                </div>
                <h3>Data Science</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <img src={ecommerce} alt="" style={{ width: "63px" }} />
                </div>
                <h3>Ecommerce</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <img src={iot} alt="" style={{ width: "63px" }} />
                </div>
                <h3>Internet of things</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSec;
