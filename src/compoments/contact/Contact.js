import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sucessMessage, setSucessMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aon727r",
        "template_r52f70i",
        form.current,
        "lofre3uFDUT7j2BPP"
      )
      .then(
        (r) => {
          console.log(r.text);
          setSucessMessage(true);
        },
        (e) => {
          console.log(e.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="from_name" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {sucessMessage && <span>謝謝 ! 已收到您的信件,我會盡快回覆</span>}
        </form>
        <a href="#intro">
          <img className="arrow" src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
