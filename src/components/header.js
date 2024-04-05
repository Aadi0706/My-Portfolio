import '../App.css';

function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi fadeLeft">Hi, I am </p>
        <h1 className="header--name fadeRight">Aditya Choubey</h1>
        <h3 className="header--work fadeLeft">FULL STACK WEB DEVELOPER </h3>
        <p className="fadeRight">
          I’m a MERN stack web developer with the
          <br />
          development skills based in Sagar, Madhya Pradesh.
        </p>
        <button className="btn fadeLeft">
          <a className="btn_contact" href="https://drive.google.com/file/d/1kuDwi7APrLU4ntGtPs_iRAOowV3vnl-_/view?usp=sharing" target="_blank" style={{ color: "#000" }}>
            <p className="contact_btn_text">Resume</p>
            <img className="contact_btn_icon" src="https://www.svgrepo.com/show/266221/resume-portfolio.svg"
            width="20px"
            height="20px"/> 
          </a>
        </button>
        <button className="btn fadeLeft">
          <a className="btn_github" href="https://github.com/Aadi0706" style={{ color: "#000" }}>
            <p>GitHub</p>
            <img src="https://www.svgrepo.com/show/343674/github.svg"
                     width="30px"
                     height="20px"
                     />
          </a>
        </button>
      </div>
      {/* <div id="home_pic">
        <img src={require("../img/Profile pic.jpg")}></img>
      </div> */}
      <div className="avtar_img zoomIn">
      <img id="home_pic" src={require("../img/Profile pic.jpg")}></img>
      </div>
    </div>
  );
}

export default Header;
