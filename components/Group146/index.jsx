import React from "react";
import "./Group146.css";

function Group146(props) {
  const { overlapGroup32, overlapGroup4, vector2, vector3, text331, text332 } = props;

  return (
    <div className="group-146">
      <div className="plan">
        <div className="overlap-group2-2" style={{ backgroundImage: `url(${overlapGroup32})` }}>
          <div className="overlap-group3-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <img
              className="vector-35"
              src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-122@2x.svg"
            />
          </div>
          <img className="vector-36" src={vector2} />
          <img className="vector-37" src={vector3} />
        </div>
      </div>
      <div className="text-6 valign-text-middle typographyheadlineh4-extrabold-24">{text331}</div>
      <p className="text-7 typography-body-smalltext-14-regular">{text332}</p>
    </div>
  );
}

export default Group146;
