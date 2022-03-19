import React from "react";
import {
  VectorizationsContainer,
  VectorizationsTitle,
} from "./Styles/VectorizationElements";
import data from "../../store/vectorization";
import Footer from "components/Footer/Footer";

const Vectorizations = () => {
  return (
    <>
      <VectorizationsTitle>
        My <span>Vectorizations</span>
      </VectorizationsTitle>
      <VectorizationsContainer>
        {data.vectors.map((item, index) => {
          return (
            <div
              key={index}
              className={item.size}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            ></div>
          );
        })}
      </VectorizationsContainer>
      <Footer />
    </>
  );
};

export default Vectorizations;
