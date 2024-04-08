import "../App.css";
import { useState } from "react";
import ResumeDoc from "../img/tech/AdityaChoubey-fw14_437.pdf"

function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [small, setsmall] = useState("");
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={require('../img/Aditya-logo-png.png')}
          width="60px"
          height="60px"
          alt="aditya_logo"
          style={{ borderRadius: "30%" }}
        />
      </div>
      <div
        className="menu_toggle"
        onClick={() => {
          settoggle(!toggle);
          setsmall("small");
        }}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
          width="50px"
          height="50px"
          alt=""
        />
      </div>
      <div
        className={
          toggle && small === "small" ? "small_nav right--nav" : "right--nav"
        }
      >
        <div
          className="active"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#top">Home</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#about">About</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#tech">Skills</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#projects">Projects</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#contact">Contact</a>
        </div>
        <div className="cv">
          <a
            href={ResumeDoc}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000" }}
            download="Aditya_Choubey_Resume"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
