import React from 'react';
import '../css/contact.css';

export default function Contact() {
  return (
    <>
      <section className="contact-me">
        <div className="contact-container">

          <div className="name-center">
            <h1>Ashar Naveed</h1>
            <p>
              Software Engineering Student passionate about creating innovative solutions.
              <br />
              Let's build the future together.
            </p>
          </div>

          <a
            href="mailto:asharnaveed2002@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="email-button"
          >
            Send me an email
          </a>

          <div className="availability">
            <span className="icon">⚑</span>
            <div className="availability-text">
              <strong>Current availability</strong>
              <p>I'm looking for a full-time job.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
