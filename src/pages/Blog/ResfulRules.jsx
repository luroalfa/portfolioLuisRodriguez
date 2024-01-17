import React from "react";
import {
  IQTitle,
} from "./Styles/InterviewsQElements";

import {
  BlogContent,
  BlogTitleCard,
  BlogParagraph,
} from "./Styles/BlogElements";
import Footer from "components/Footer/Footer";

const ResfulRules = () => {
  return (
    <>
      <IQTitle>
        RESTFUL <span>RULES</span>
      </IQTitle>
      <BlogContent>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
          Welcome to this space dedicated to exploring the fascinating world of
          APIs and their crucial role in the interaction between applications in
          the digital era. In this post, we will address some of the fundamental
          but often misunderstood concepts: REST, RESTful, URI, and Resources.
          These terms are essential for understanding how modern APIs work and
          how they can be designed to be efficient, scalable, and user-friendly.
        </BlogParagraph>
        <BlogTitleCard color="white">
          <span>REST vs RESTful</span>Untangling the Confusion
        </BlogTitleCard>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
          Before diving into API design and development, it is vital to clarify
          the difference between REST and RESTful, as they are often used
          interchangeably but represent different ideas.
        </BlogParagraph>
        <BlogTitleCard color="white">
          <span>What is REST?</span>
        </BlogTitleCard>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
          REST, or Representational State Transfer, is a set of architectural
          principles for creating web services. Defined by Roy Fielding in his
          doctoral thesis, REST is not a standard or protocol, but rather a
          design style that relies on the use of existing web technology and
          protocols, mainly HTTP. Its key features include stateless
          communication, CRUD (Create, Read, Update, Delete) operations via HTTP
          methods, and a uniform interface for interacting with resources.
        </BlogParagraph>
        <BlogTitleCard color="white">
          <span>And RESTful?</span>
        </BlogTitleCard>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
          On the other hand, when we talk about "RESTful" web services, we are
          referring to those that implement and adhere to REST principles. A
          RESTful web service is one that faithfully follows these guidelines,
          using HTTP methods appropriately, maintaining a stateless state, and
          providing a uniform and predictable interface.
        </BlogParagraph>
        <BlogTitleCard color="white">
          <span>URI</span>The Universal Identifier
        </BlogTitleCard>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
          One of the cornerstones in the design of a RESTful API is the use of
          URIs (Uniform Resource Identifiers). But, what exactly is a URI?
        </BlogParagraph>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
          A URI is a string of characters used to identify a specific resource
          within a network, such as the Internet. It acts as an address
          indicating where a resource can be found or how to access it. URIs are
          divided into two main categories: URLs (Uniform Resource Locators),
          which locate a resource, and URNs (Uniform Resource Names), which name
          a resource.
        </BlogParagraph>
        <BlogTitleCard color="white">
          <span>When a Web Service Is Not "RESTful</span>Identifying Common Deviations
        </BlogTitleCard>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
            In the world of API development, adhering to REST principles is often a key goal. But, what happens when a web service does not qualify as "RESTful"? Identifying these deviations helps us better understand how these APIs can be improved. Below, we explore some of the common practices that can make a web service not be considered RESTful.
        </BlogParagraph>
        <BlogTitleCard color="white">
          <span>Incorrect Use of HTTP Methods</span>
        </BlogTitleCard>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
            The foundation of a RESTful API is the proper use of HTTP methods. Two common examples of misuse are:
        </BlogParagraph>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
            GET for Updating Data: The GET method should be used exclusively for retrieving data. Using it to update data violates REST principles, as GET should not have side effects like data modification.
        </BlogParagraph>
        <BlogParagraph color="white" maxWidth="60em" minWidth="200px">
            POST for Fetching Data: Similarly, using POST merely to request data (without implying a state change or resource creation) also contradicts REST guidelines.
        </BlogParagraph>
      </BlogContent>
      <Footer />
    </>
  );
};

export default ResfulRules;
