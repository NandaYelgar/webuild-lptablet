import React from "react";
import Group11422 from "../Group11422";
import EstimateNowButton3 from "../EstimateNowButton3";
import Group117 from "../Group117";
import "./Frame1622.css";

function Frame1622(props) {
  const { costEstimatorBg, group11422Props, estimateNowButton3Props, group117Props } = props;

  return (
    <div className="frame-162">
      <div className="overlap-group2-6">
        <div className="cost-estimator-bg" style={{ backgroundImage: `url(${costEstimatorBg})` }}>
          <div className="rectangle-63"></div>
        </div>
        <Group11422 costEstimator={group11422Props.costEstimator} text93={group11422Props.text93} />
        <EstimateNowButton3>{estimateNowButton3Props.children}</EstimateNowButton3>
        <Group117
          textInputsNormal32Props={group117Props.textInputsNormal32Props}
          textInputsNormal322Props={group117Props.textInputsNormal322Props}
        />
      </div>
    </div>
  );
}

export default Frame1622;
