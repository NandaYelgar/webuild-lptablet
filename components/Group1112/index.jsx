import React from "react";
import Group69 from "../Group69";
import Button82 from "../Button82";
import "./Group1112.css";

function Group1112(props) {
  const { place, overlapGroup4, vector, group69Props, buttonProps } = props;

  return (
    <div className="package-card-1">
      <div className="place-1 valign-text-middle typographyheadlineh4-extrabold-24">{place}</div>
      <div className="standard">
        <div className="overlap-group2-4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <img className="vector-39" src={vector} />
        </div>
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button82>{buttonProps.children}</Button82>
    </div>
  );
}

export default Group1112;
