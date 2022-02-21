import React from "react";
import { BtnRouter, SquareBtnRouter } from "./Style/ButtonElements";

export default function ButtonRouter(props) {
  if (props.type === "circle") {
    return <BtnRouter to={props.to}>{props.children}</BtnRouter>;
  }
  if (props.type === "square") {
    return <SquareBtnRouter to={props.to}>{props.children}</SquareBtnRouter>;
  }
}
