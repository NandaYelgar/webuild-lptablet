import React from "react";
import Group69 from "../Group69";
import Button82 from "../Button82";
import "./Group113.css";

function Group113(props) {
  const { basic, vector, group69Props, buttonProps } = props;

  return (
    <div className="package-card-3">
      <div className="basic-2 valign-text-middle typographyheadlineh4-extrabold-24">{basic}</div>
      <div className="luxury">
        <img className="vector-44" src={vector} />
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button82>{buttonProps.children}</Button82>
    </div>
  );
}

export default Group113;
