import React from "react";
import { MainPdf } from "./Styles/PdfElements";

class Pdf extends React.Component {
  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("linkPdf").click();
      window.close();
    }
  }

  render() {
    return (
      <MainPdf>
        <object
          data={require("../../Assets/Docs/CV.pdf")}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <a
            href={require("../../Assets/Docs/CV.pdf")}
            id="linkPdf"
            download="CV-LuisRodriguezfallas.pdf"
          ></a>
        </object>
      </MainPdf>
    );
  }
}

export default Pdf;
