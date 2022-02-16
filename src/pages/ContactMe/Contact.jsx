import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import {
  ContactContainer,
  ContactForm,
  ContactGroup,
  ContactInfo,
  ContactTitleForm,
  ContactInput,
  ContactTextArea,
  ContactButtom,
  ContactParagraph,
  ContactParagraphTextArea,
  ContactParagraphButtom,
  ContactInfoTitle,
  ContactInfoUl,
  ContactInfoLI,
  ContactSubTitleForm,
  // ContactLink,
  ContactInfoSubTitle,
} from "./Styles/ContactMeElements.js";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import { Animated } from "react-animated-css";

const Loading = () => "Cargando...";
const Success = () => "Datos enviados";
const Fail = () => "Fallo el envio";

function Contact() {
  const [form, setForm] = React.useState({});
  const [status, setStatus] = React.useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <ContactContainer>
        <Animated
          animationIn="headShake"
          animationOut="fadeOut"
          isVisible={true}
        >
          <ContactTitleForm>
            Contact <span>Me</span>
          </ContactTitleForm>
        </Animated>
        <ContactSubTitleForm>
          Can I help you clarify your doubts?{" "}
        </ContactSubTitleForm>
        <ContactGroup>
          <ContactForm>
            <ContactParagraph>
              <label htmlFor="fullname">Fullname</label>
              <ContactInput
                type="text"
                name="fullname"
                id="fullname"
                value={form.fullname}
                onChange={onChange}
              />
            </ContactParagraph>
            <ContactParagraph>
              <label htmlFor="fullname">Email Address </label>
              <ContactInput
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={onChange}
              />
            </ContactParagraph>
            <ContactParagraph>
              <label htmlFor="fullname">Phone</label>
              <ContactInput
                type="tel"
                name="telField"
                id="telField"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                required
                onChange={onChange}
              />
            </ContactParagraph>
            <ContactParagraph>
              <label htmlFor="fullname">Affair</label>
              <ContactInput
                type="text"
                name="Affair"
                id="Affair"
                onChange={onChange}
              />
            </ContactParagraph>
            <ContactParagraphTextArea>
              <label htmlFor="Messages">Messages</label>
              <ContactTextArea
                name="messages"
                id="messages"
                rows="3"
                onChange={onChange}
              />
            </ContactParagraphTextArea>
            <ContactParagraphButtom>
              <ContactButtom
                onClick={() => {
                  setStatus("loading");
                  fetch(process.env.REACT_APP_URL_CONTACT_FORM, {
                    method: "POST", // *GET, POST, PUT, DELETE, etc.
                    // mode: "cors",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form), // body data type must match "Content-Type" header
                  })
                    .then((res) => {
                      console.log(res.json());
                      setStatus("success");
                    })
                    .catch((err) => {
                      console.log(err);
                      setStatus("fail");
                    });
                }}
              >
                <b>Send data</b>
              </ContactButtom>
            </ContactParagraphButtom>

            {status === "loading" ? (
              <Loading />
            ) : status === "success" ? (
              <Success />
            ) : (
              status === "fail" && <Fail />
            )}
          </ContactForm>

          <ContactInfo>
            <ContactInfoTitle>More Info</ContactInfoTitle>
            <ContactInfoUl>
              <ContactInfoLI>
                <HiLocationMarker />
                <span>
                  <b>Costa Rica</b>, Alajuela, San Rafael
                </span>
              </ContactInfoLI>
              <ContactInfoLI>
                <HiPhone />
                <span>
                  <b>(506)</b>7052-9997
                </span>
              </ContactInfoLI>
              <ContactInfoLI>
                <HiOutlineMail />
                <span>rodriguezfallasluis@gmail.com</span>
              </ContactInfoLI>
            </ContactInfoUl>
            <ContactInfoSubTitle>
              A great project begins with a "Hi!"👋
            </ContactInfoSubTitle>
            <p>
              If you have a company or business and you need creative solutions
              that can boost your business or project or you simply need to
              resolve any doubts about design, I will be happy to talk with you
              about anything you want to tell me.
            </p>
            <p>
              Send me a message and I will reply as soon as possible. I hope you
              enjoy visiting my website and I am looking forward to hear from
              you soon!
            </p>
            <p>Hey, feel free to contact me, don't be shy.</p>
            {/* <ContactLink to="/">Ver términos y condiciones.</ContactLink> */}
          </ContactInfo>
        </ContactGroup>
      </ContactContainer>

      <Footer />
    </>
  );
}

export default Contact;
