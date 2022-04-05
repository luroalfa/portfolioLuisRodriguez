const data = {
  CssIQData: [
    {
      id: 1,
      question: `1) What is CSS?`,
      answer: `Css stands for cascading style sheet.--It's a style sheet language that determines how the elements contents in the page are looke shown.--Css is used to develop a beautiful page with colors, spacing, sizes and others styles.`,
    },
    {
      id: 2,
      question: `2) Which company developed CSS?`,
      answer: `Was created by World Wide Web Consortium W3C.--It was first released on December 17, 1996`,
    },
    {
      id: 3,
      question: `3) What is the Box Model in css?`,
      answer: `The css Box Model is essentially a box that wraps around every HTML element.--It consists in: --1) Margins.--2) Borders. --3) Padding.--4) Content.`,
    },
    {
      id: 4,
      question: `4) How to include css in the webpage?`,
      answer: `There are different ways to include css in the webpage, for example:--1) External style sheet.--2) Embed css with a style tag.--3) Add inline style to HTML elements.--4) Import a stylesheet file.`,
    },
    {
      id: 5,
      question: `5) How to make rounded corner using CSS ?`,
      answer: `To create a rounded corner, we use the CSS border-radius property. --This property is used to set the border radius of the element.`,
    },
  ],
  HtmlIQData: [
    {
      id: 1,
      question: `1) What is HTML?`,
      answer: `HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications.`,
    },
    {
      id: 2,
      question: `2) What is a tag?`,
      answer: `HTML tags are symbols between which content is placed.`,
    },
    {
      id: 3,
      question: `3) What is an attribute?`,
      answer: `HTML attributes are special words used inside the opening tag to control the element's behaviour.`,
    },
    {
      id: 4,
      question: `4) What is the difference between block and inline elements?`,
      answer: `Block elements are scheduled to take up as much space as they can. In contrast, inline elements have been designed to take up as little space as possible.`,
    },
    {
      id: 5,
      question: `5) What are semantic elements?`,
      answer: `A semantic element clearly describes its meaning to both the browser and the developer.
      --Examples of non-semantic elements: <div> and <span>: --Do not say anything about their content.
      --Examples of semantic elements: --<form>, <table> and <article> - Clearly define its content.`,
    },
    {
      id: 6,
      question: `6) Indicate some semantic labels?`,
      answer: `--<item>
              --<aside>
              --<details>
              --<figcaption>
              --<figure>
              --<footer>
              --<header>
              --<main>
              --<mark>
              --<navigation>
              --<section>
              --<summary>
              --<time>`,
    },
    {
      id: 7,
      question: `7) How to Use the Section Element in HTML?`,
      answer: `The section element should only be used if there isn't a more specific element. 
      --For example, you wouldn't use a <section> tag to create a footer, but use the <footer> tag instead. 
      --But you would use the <section> tag to break up a one page website.`,
    },
    {
      id: 8,
      question: `8) Do all HTML tags have an end tag?`,
      answer: `There are some HTML tags that don't need a closing tag.`,
    },
    {
      id: 9,
      question: `9) Are the HTML tags and elements the same thing?`,
      answer: `Are not the same thing. Because the element contain tags and content.--For example: <p>Parrafo</p>
      --And the tags are only, the start tags <p> and the end tags </p>.`,
    },
    {
      id: 10,
      question: `10) What is the 'class' attribute in HTML?`,
      answer: `The attribute class is placed inside the start tag and multiple tags can have the same class.`,
    },
  ],
  JsIQData: [
    {
      id: 1,
      question: `1) What is JavaScript?`,
      answer: `JavaScript is the programming language for the web, it can update and change both HTML and CSS and it can also calculate, manipulate and validate data, it is a language that works on the client and server side.`,
    },
    {
      id: 2,
      question: `2) What are JavaScript data types?`,
      answer: `There are two types of data: --The primitive data type can only store a single data whereas the object can store colletion of data.`,
    },
    {
      id: 3,
      question: `3) What is JavaScript standard?`,
      answer: `The JavaScript standard is the ECMAScript`,
    },
    {
      id: 4,
      question: `4) What is ECMAScript?`,
      answer: `ECMA is an acronym for the European Computer Manufacturers Association, which develops standards for information technology.--It is a general purpose programming language that is implemented in JavaScript.`,
    },
    {
      id: 5,
      question: `5) Which company developed JavaScript?`,
      answer: `Was created by Brendan Eich at Netscape Communications Corporation, for the Netscape navigator web browser.`,
    },
    {
      id: 6,
      question: `6) What are non-primitive data types in JavaScript?`,
      answer: `The non-primitive are:--Class, Object, Array.`,
    },
    {
      id: 7,
      question: `7) What is the use of the let keyword in JavaScript?`,
      answer: `It is used to handle a data type in a specific scope, for example, in methods. `,
    },
    {
      id: 8,
      question: `8) How do you initialize a variable in JavaScript?`,
      answer: `We use assignment operator = for set the value of a variable.`,
    },
    {
      id: 9,
      question: `9) How do you declare a variable?`,
      answer: `It is declared using the var, const, and let keywords.`,
    },
    {
      id: 10,
      question: `10) What is typeof operator for?`,
      answer: `Typeof operator in JavaScript is an operator used for type checking and returns the data type of the operand passed to it.`,
    },
    {
      id: 11,
      question: `11) What is concat?`,
      answer: `Adding, linking or interlinking content.`,
    },
    {
      id: 12,
      question: `12) What is “This” Keyword in Javascript?`,
      answer: `"This" keyword refers to an object that is executing the current piece.`,
    },
    {
      id: 13,
      question: `13) What are callbacks?`,
      answer: `A callback is a function that will be executed after another function gets executed.`,
    },
    {
      id: 14,
      question: `14) What is NaN property in JavaScript?`,
      answer: `NaN property represents “Not-a-Number” value.--For example:--isNaN("Hello")=>Returns true
      --isNaN(345)=>Returns false--isNaN(undefined)=>Returns true`,
    },
    {
      id: 15,
      question: `15) What is an IIFE in JavaScript?`,
      answer: `Is a function that runs as soon as it is defined.`,
    },
    {
      id: 16,
      question: `16) What is DOM?`,
      answer: `DOM stands for Document Object Model.--When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM.`,
    },
    {
      id: 17,
      question: `17) What is === operator?`,
      answer: `=== is called a strict equality operator, which returns true when the two operands have the same value without conversion.`,
    },
    {
      id: 18,
      question: `18) What are all the looping structures in JavaScript?`,
      answer: `Following are looping structures in Javascript:
      --For
      --While
      --Do-while`,
    },
    {
      id: 19,
      question: `19) How can you convert the string of any base to an integer in JavaScript?`,
      answer: `The parseInt() function is used to convert numbers between different bases. parseInt() takes the string to be converted as its first parameter. --The second parameter is the base of the given string.`,
    },
    {
      id: 20,
      question: `20) What is ! operator?`,
      answer: `It is a logical NOT operator, its main function is to negate the value.`,
    },
    {
      id: 21,
      question: `21) What is the difference between the && operator and || operator?`,
      answer: `The || operator must execute one of two statements, on the other hand, the && operator must execute the two statements.`,
    },
    {
      id: 20,
      question: `De un ejemplo de pre incremento?`,
      answer: ``,
    },
    {
      id: 21,
      question: `Cual es la estructura de un operador ternario o condicional?`,
      answer: ``,
    },
    {
      id: 22,
      question: `Cuales son los ciclos definidos?`,
      answer: `for`,
    },
    {
      id: 23,
      question: `Cuales son los ciclos indefinidos?`,
      answer: `While and do-while`,
    },
    {
      id: 24,
      question: `Cual es la diferencia entre while y do while?`,
      answer: `Con do-while la sentencia que esta dentro del bloque se ejecutara una vez y luego dependera del while si se vuelve a ejecutar o no cuantas veces sea necesario. Con while la sentencia no se ejecutara si no cumple con lo requerido. `,
    },
    {
      id: 25,
      question: `Where start the index of the array?`,
      answer: `Desde el cero, es el primer indice.`,
    },
    {
      id: 26,
      question: `What are arrays?`,
      answer: `Es un tipo de dato objeto que almacena datos este teniendo un indice interno. `,
    },
    {
      id: 27,
      question: `Que son los métodos?`,
      answer: ``,
    },
    {
      id: 28,
      question: `What are the control statements?`,
      answer: ``,
    },
    {
      id: 29,
      question: `Four types of functions?`,
      answer: ``,
    },
    {
      id: 31,
      question: `¿Para qué se utiliza el DOM?`,
      answer: `El DOM, se crea con la finalidad de poder identificar y permitirnos trabajar (modificando estilos, el contenido, añadiendo nodos hijos, etc) sobre todos los elementos (conocidos como nodos en DOM) de nuestro documento HTML.`,
    },
    {
      id: 32,
      question: `Para que sirve this?`,
      answer: `Sirve para tomar el nombre del objeto`,
    },
    {
      id: 33,
      question: `Que son los template String`,
      answer: `Los template string es una manera de concatenar string incrrustar valores o resultados de operaciones tambien para caracteres multilinea.`,
    },
  ],
};

// Export data
export default data;
