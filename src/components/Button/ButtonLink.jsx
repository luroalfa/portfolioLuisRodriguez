import React from "react";
import { BtnLink } from "./Style/ButtonElements";

export default function ButtonLink(props) {
  return (
    <BtnLink href={props.href} target={props.target}>
      {props.children}
    </BtnLink>
  );
}
