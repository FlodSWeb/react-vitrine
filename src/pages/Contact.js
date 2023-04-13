import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Address</h4>
              <p>252 Hoover street</p>
              <p>Brooklyn, NEW YORK</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Phone</h4>
              <CopyToClipboard text="555 555 555" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Phone number copied")}
                >
                  555 555 555
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>E-mail</h4>
              <CopyToClipboard text="em@il.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copied")}
                >
                  email@dev.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Flo ds - 2023</p>
          </div>
        </div>
        <Buttons left={"/project-4"} right={"/"} />
      </div>
    </main>
  );
};

export default Contact;
