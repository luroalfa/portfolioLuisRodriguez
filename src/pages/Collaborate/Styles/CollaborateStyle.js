import styled from "styled-components";

export const Title = styled.h1`
  color: white;
  font-size: 2.5em;
  padding: 70px 0 20px 0;
  text-align: center;

  span {
    color: var(--secondaryColor);
  }
`;
export const SubTitle = styled.h2`
  font-size: 2em;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 960px) {
    padding: 10px;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row; // Coloca los elementos en una fila
  align-items: center; // Alinea los elementos verticalmente en el centro

  // Establece otros estilos como el padding, márgenes, etc., según sea necesario
  padding: 20px;
  margin: 0 auto;
  width: 100%; // Puede especificar un ancho si deseas limitar el ancho del artículo

  // Establece el ancho de los elementos hijos (Figure y el div)
  & > figure,
  & > div {
    width: 50%; // Cada uno ocupa el 50% del ancho
  }

  // Estilos responsivos para pantallas más pequeñas
  @media (max-width: 768px) {
    flex-direction: column; // Cambia a columna en pantallas pequeñas
    align-items: flex-start; // Alinea los elementos al inicio en pantallas pequeñas

    & > figure,
    & > div {
      width: 100%; // Cada uno ocupa el 100% del ancho en pantallas pequeñas
    }
  }
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column; // Alinea los elementos en una columna
  align-items: center; // Alinea los elementos horizontalmente en el centro
  justify-content: flex-start; // Empieza la alineación desde la parte superior

  // Establece otros estilos como el padding, márgenes, etc., según sea necesario
  padding: 20px;
  margin: 0;

  // Puedes agregar estilos específicos para la imagen y el figcaption si lo necesitas
  img {
    width: 100%; // Ajusta el ancho de la imagen según sea necesario
    height: auto; // Mantiene la relación de aspecto de la imagen
  }

  figcaption {
    margin-top: 10px; // Añade un espacio entre la imagen y el figcaption
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto; // Centra la imagen en el contenedor.border-radius: 10px; // Esquinas redondeadas
  border: 1px solid #ccc; // Borde con un color específico
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Sombra suave alrededor de la imagen
  object-fit: cover; // Asegura que la imagen cubra todo el espacio sin deformarse
  alt-text: "Descripción accesible de la imagen"; // Proporciona una descripción textual de la imagen

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03); // La imagen crece ligeramente al pasar el cursor
  }
`;

export const Button = styled.button`
  // Tus estilos aquí
`;

export const Figcaption = styled.figcaption`
  padding: 10px;
  text-align: center; // Centra el texto si es deseado
  font-family: "Arial", sans-serif;
  font-size: 1em; // O un tamaño específico, como 16px
  border-top: 1px solid #ddd; // Borde superior para separar de la imagen
  margin-top: 10px; // Espacio arriba para separar del elemento anterior
  padding: 15px; // Espacio interno
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); // Sombra ligera en el texto
  & > h3 {
    font-weight: bold; // O normal, light, etc.
  }

  @media (max-width: 960px) {
    font-size: 0.9em; // Texto más pequeño en pantallas menores
  }
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Li = styled.li`
  // Tus estilos aquí
  // Por ejemplo, para un espaciado uniforme:
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 30px 50px;
  align-self: center;
  justify-content: center;

  @media screen and (min-width: 960px) {
    padding: 60px 50px;
    text-align-last: center;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: left;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
