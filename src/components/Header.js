import React, { useEffect } from 'react';
import '../css/header.css';

function App() {

  useEffect(() => {
    const text = "Hi, I’m Ashar, a software developer focused on building smart, scalable product solutions with modern technologies.";
    const typedText = document.getElementById("typed-text");

    if (typedText) {
      // Clear existing text before starting
      typedText.textContent = '';

      let i = 0;
      let typingTimeout;

      function type() {
        if (i < text.length) {
          typedText.textContent += text.charAt(i);
          i++;
          typingTimeout = setTimeout(type, 120);
        }
      }

      type();

      // Cleanup function to stop typing on unmount or re-run
      return () => {
        clearTimeout(typingTimeout);
      };
    }
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      {/* HEADER SECTION */}
      <header>
        <div className="header-left">
          <div className="name">Ashar Naveed</div>
        </div>

        <a href="AsharNaveed_Software_Engineer.pdf" download className="available-badge">
          Available for hire
        </a>


      </header>

      {/* CARD SECTION */}
      <section className="card">
        <div className="profile">
          <img src="/images/profile-org.png" alt="Ashar Naveed" />
        </div>


        <div className="intro">
          <span id="typed-text"></span>
        </div>
      </section>
    </>
  );
}

export default App;















