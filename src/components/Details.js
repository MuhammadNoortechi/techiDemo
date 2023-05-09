import React from "react";
import imgdetails from "../assets/imgdetails.png";
import "../css/Details.scss";
const Details = () => {
  return (
    <div className="" style={{ background: "#000" }}>
      <div className="container row-details">
        <div className="row ">
          <div className="col-md-6">
            <h1 className="text-white fw-bold details-heading">Techilab</h1>
            <div className="h2-heading ">
              We are a Creative Agency- By{" "}
              <span className="fw-bold">Techilab</span>
            </div>
            <div className="h3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className="btn  btn-details">
              <a href="#" className="text-white text-decoration-none">
                About more
              </a>
            </div>
          </div>
          <div className="col-md-6  ">
            <div className="img-details d-flex justify-content-end">
              <img src={imgdetails} alt="" className="w-100 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
