import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email or connect with me on social
          media.
        </p>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:ayzen.ofek@outlook.com">ayzen.ofek@outlook.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ofek-ayzen-410a40247/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ofek Ayzen
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/OfekAyzen
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              Ofek Ayzen
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
