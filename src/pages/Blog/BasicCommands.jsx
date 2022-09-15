import React from 'react'
import {
    IQContainer,
    IQParagraph,
    IQTitle,
  } from "./Styles/InterviewsQElements";
  import Accordion from "@mui/material/Accordion";
  import AccordionSummary from "@mui/material/AccordionSummary";
  import AccordionDetails from "@mui/material/AccordionDetails";
  import Typography from "@mui/material/Typography";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import Data from "../../store/IQData";
  import Footer from "components/Footer/Footer";

const BasicCommands = () => {
    return (
      <>
        <IQTitle>
          Basic Linux <span>Commands</span>
        </IQTitle>
        <IQContainer>
          <IQParagraph>
          Before we go on to the list of commands, you need to open the command line with the shorthands CTRL+ALT+T.
          Right now I sharing a list of basic Linux commands for beginner, I hope you like it.
          </IQParagraph>
          {Data.LinuxCommands.map((item, index) => {
            return (
              <>
                <Accordion
                  sx={{
                    backgroundColor: "primary.main",
                    boxShadow: " 0px 2px 1px -1px rgb(255 255 255)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography color="white">{item.question}</Typography>
                  </AccordionSummary>
  
                  <AccordionDetails>
                    {item.answer.split("--").map((item) => {
                      return (
                        <Typography color="secondary.main">{item}</Typography>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
                <br />
              </>
            );
          })}
        </IQContainer>
        <Footer />
      </>
    );
  };
  
export default BasicCommands