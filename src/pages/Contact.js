import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <Buttons left={"/project-4"} right={"/"} />
      </div>
    </main>
  );
};

export default Contact;
