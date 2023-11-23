import React from "react";
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
          Before diving into the Linux command list, it's important to know how
          to access the terminal. In Linux systems, you can quickly open the
          command line using the shortcut CTRL+ALT+T. However, if you're on
          Windows and using the Windows Subsystem for Linux (WSL), you'll need
          to use the Win+R shortcut, type 'wsl', and then press Enter to launch
          the Linux terminal. This guide offers a comprehensive list of basic
          Linux commands tailored for beginners. It's designed to help you
          familiarize yourself with the Linux command line interface and enhance
          your command-line skills. Whether you're just starting out with Linux
          or seeking to brush up on the basics, I hope you find this collection
          insightful and helpful.
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

export default BasicCommands;
