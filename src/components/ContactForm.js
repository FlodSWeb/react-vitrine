import React, { useRef } from "react";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    // A implementer via emailjs
    // emailjs
    //   .sendForm(
    //     "service_ferfger",
    //     "template_drzaekz",
    //     form.current,
    //     process.env.REACT_APP_ID
    //   )
    //   .then((res) => {
    //     form.current.reset();
    //     formMess.innerHTML = "<p className='success'>Message sent </p>";
    //   });
    // ............................
  };
  return (
    <div className="form-container">
      <h2>Contact us</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Send" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
