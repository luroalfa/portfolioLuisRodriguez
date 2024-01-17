import React from "react";
import { MainPdf } from "./Styles/PdfElements";
import pdf from "../../Assets/Docs/CV.pdf";

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
          data={pdf}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <a href={pdf} id="linkPdf" download="CV-LuisRodriguezfallas.pdf"></a>
        </object>
      </MainPdf>
    );
  }
}

export default Pdf;
