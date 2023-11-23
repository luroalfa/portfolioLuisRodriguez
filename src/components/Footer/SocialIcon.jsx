import React from 'react'
import Tooltip from "@mui/material/Tooltip";
import {FooterA,} from "./Styles/FooterElements";

const SocialIcon = ({ href, title, icon }) => {
  return (
    <Tooltip title={title} placement="top-start">
      <FooterA href={href} target="_blank">
        {icon}
      </FooterA>
    </Tooltip>
  )
}

export default SocialIcon