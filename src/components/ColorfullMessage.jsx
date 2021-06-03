import React from "react";

export const ColorfullMessage = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
