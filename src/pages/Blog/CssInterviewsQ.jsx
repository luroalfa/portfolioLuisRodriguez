import React from "react";
import {
  CssIQContainer,
  CssIQParagraph,
  CssIQTitle,
} from "./Styles/CssInterviewsQElements";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Data from "../../store/CssIQData";
import Footer from "components/Footer/Footer";

const elementsAnswer = (answer) => {
  let arr = answer.split("-");
  arr.forEach((item) => {
    return <Typography color="secondary.main">{item}</Typography>;
  });
  // return <Typography color="secondary.main">{answer.split("-")}</Typography>;
};

const CssInterviewsQ = () => {
  return (
    <>
      <CssIQTitle>
        Interview <span>Questions</span>
      </CssIQTitle>
      <CssIQContainer>
        <CssIQParagraph>
          When you go to a tech job interview as a developer web. So, I bet
          you're wondering what to say when you're sitting across from a real
          recruit. Tech job interviews are nothing to fear, especially when
          you've already practiced the most likely questions. Here we put into
          practice our hard skills. In this way, you will be able to prepare
          better and get the best score for your evaluation. Ok so, we come to
          the point with Css interview questions.
        </CssIQParagraph>
        {Data.CssIQData.map((item, index) => {
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
      </CssIQContainer>
      <Footer />
    </>
  );
};

export default CssInterviewsQ;
