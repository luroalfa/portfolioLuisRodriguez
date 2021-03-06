import React from "react";
import { StyleLink } from "./Style/LinkElements";

export default function Link(props) {
  return (
    <StyleLink href={props.href} target={props.target}>
      {props.children}
    </StyleLink>
  );
}
