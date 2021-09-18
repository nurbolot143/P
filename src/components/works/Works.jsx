import React from "react";
import { ArrowBackIos } from "@material-ui/icons";
import { ArrowForwardIos } from "@material-ui/icons";

import "./works.scss";

function Works() {
  return (
    <div className="works">
      <div className="works__slider">
        <div className="works__slider-inner">
          <div className="works__slider-item">
            <h3>hello</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlV7DkjTySHEWt1tmfkooy34JpAPbrUdt2qw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <button className="works__slider-btn works__slider-btn-prev">
        <ArrowBackIos />
      </button>
      <button className="works__slider-btn works__slider-btn-next">
        <ArrowForwardIos />
      </button>
    </div>
  );
}

export default Works;
