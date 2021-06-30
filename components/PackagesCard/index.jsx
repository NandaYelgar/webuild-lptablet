import React from "react";
import Group69 from "../Group69";
import Button82 from "../Button82";
import "./PackagesCard.css";

function PackagesCard(props) {
  const { basic, vector, group69Props, buttonProps } = props;

  return (
    <div className="package-card">
      <div className="basic valign-text-middle typographyheadlineh4-extrabold-24">{basic}</div>
      <div className="basic-1">
        <img className="vector-38" src={vector} />
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button82>{buttonProps.children}</Button82>
    </div>
  );
}

export default PackagesCard;
