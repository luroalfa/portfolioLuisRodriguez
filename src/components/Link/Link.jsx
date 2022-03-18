import React from "react";
import { StyleLink } from "./Style/LinkElements";

export default function Link(props) {
  return <StyleLink to={props.to}>{props.children}</StyleLink>;
}
