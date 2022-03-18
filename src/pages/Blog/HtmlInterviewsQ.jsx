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

const HtmlInterviewsQ = () => {
  return (
    <>
      <IQTitle>
        Interview <span>Questions</span>
      </IQTitle>
      <IQContainer>
        <IQParagraph>
          Well, let's see, what is HTML? Questions in a job interview and let's
          find out all about the HTML language. Let's lose our fear in a job
          interview and we are quiet and confident because you will learn a lot
          after reading this article.
        </IQParagraph>
        {Data.HtmlIQData.map((item, index) => {
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

export default HtmlInterviewsQ;
