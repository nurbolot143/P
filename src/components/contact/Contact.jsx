import React, { useState } from "react";
import { Container } from "../../general";

import "./contact.scss";

function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(true);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <div className="contact__content">
          <h2>Contact Me</h2>

          <form onSubmit={handleSubmit}>
            <input type="name" name="name" placeholder="Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              type="submit"
              placeholder="Your Message"
              required
            ></textarea>
            <button>Send</button>
            {message && <span>Thank you for your message!</span>}
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
