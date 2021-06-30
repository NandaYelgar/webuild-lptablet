import React from "react";
import PackagesCard from "../PackagesCard";
import Group1112 from "../Group1112";
import Group112 from "../Group112";
import Group113 from "../Group113";
import "./Frame158.css";

function Frame158(props) {
  const { packagesCardProps, group1112Props, packagesCardProps2, group1112Props2 } = props;

  return (
    <div className="frame-158">
      <div className="frame-156">
        <PackagesCard
          basic={packagesCardProps.basic}
          vector={packagesCardProps.vector}
          group69Props={packagesCardProps.group69Props}
          buttonProps={packagesCardProps.buttonProps}
        />
        <Group1112
          place={group1112Props.place}
          overlapGroup4={group1112Props.overlapGroup4}
          vector={group1112Props.vector}
          group69Props={group1112Props.group69Props}
          buttonProps={group1112Props.buttonProps}
        />
      </div>
      <div className="frame-157">
        <Group112 {...packagesCardProps2} />
        <Group113
          basic={group1112Props2.basic}
          vector={group1112Props2.vector}
          group69Props={group1112Props2.group69Props}
          buttonProps={group1112Props2.buttonProps}
        />
      </div>
    </div>
  );
}

export default Frame158;
