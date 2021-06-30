import React from "react";
import Group69 from "../Group69";
import Button82 from "../Button82";
import "./Group112.css";

function Group112(props) {
  const { premium, group, vector, vector2, vector3, vector4, group2, group69Props, buttonProps } = props;

  return (
    <div className="package-card-2">
      <div className="premium valign-text-middle typographyheadlineh4-extrabold-24">{premium}</div>
      <div className="premium-1">
        <div className="overlap-group2-5">
          <div className="group-2" style={{ backgroundImage: `url(${group})` }}></div>
          <img className="vector-40" src={vector} />
          <img className="vector-41" src={vector2} />
          <img className="vector-42" src={vector3} />
          <img className="vector-43" src={vector4} />
          <div className="group-3" style={{ backgroundImage: `url(${group2})` }}></div>
        </div>
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button82>{buttonProps.children}</Button82>
    </div>
  );
}

export default Group112;
