import React from "react";
import Frame149 from "../Frame149";
import "./Frame154.css";

function Frame154(props) {
  const { ourProjects, text335, frame149Props } = props;

  return (
    <div className="frame-154">
      <div className="our-projects valign-text-middle typographyheadlineh4-extrabold-24">{ourProjects}</div>
      <p className="text-10 typography-body-smalltext-14-regular">{text335}</p>
      <Frame149 {...frame149Props} />
    </div>
  );
}

export default Frame154;
