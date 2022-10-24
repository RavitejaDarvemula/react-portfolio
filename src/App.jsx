import { useState } from "react";
import Logo from "./images/DP.jpg";
import "./App.css";
function Info() {
  return (
    <div className="info">
      <img src={Logo} alt="" />
      <div className="info--profile">
        <h1>Darvemula Raviteja</h1>
        <h3>Web Developer</h3>
        <h4>
          <a
            href="https://ravitejadarvemulaportfolio.netlify.app?"
            className="portfolio"
          >
            Portfolio
          </a>
        </h4>
        <div className="btn">
          <a className="email">
            <ion-icon name="mail"></ion-icon>
            <span> Email </span>
          </a>
          <a className="linkedin">
            <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Strong in design and integration with intuitive problem-solving skills.
        Passionate about implementing and launching new projects. Ability to
        translate business requirements into technical solutions. Looking to
        start the career as an entry-level software engineer with a reputed firm
        driven by technology.
      </p>
    </div>
  );
}
function Interests() {
  return (
    <div className="interests">
      <h2>Interests</h2>
      <p>
        Gaming,Browsing,Playing Cricket,Watching Movies,Listening
        Music,Photography,Editing.
      </p>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <a>
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
      <a>
        <ion-icon name="logo-twitter"></ion-icon>
      </a>
      <a>
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
      <a>
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </div>
  );
}

function App() {
  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
