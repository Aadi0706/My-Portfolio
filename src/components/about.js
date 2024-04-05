import "../styles/about.css";
function About() {
  return (
    <div className="container" data-aos={"fade-right"}>
      <div className="container__image">
        <div className="container__info container__author">Hi there,</div>
        <div className="container__info container__location">
          <p>
            I am <em></em>
            <a
              href="https://www.linkedin.com/in/aditya-choubey-/"
              className="link"
            >
              Aditya Choubey
            </a>{" "}
            , I like to build websites/application that serves the world and
            always want to enhance my knowledge & adpot new technologies that
            make impact on people. I have one year of experience with MERN stack
            web development.
          </p>
          <div>
            <h2>Education</h2>
            {/* <br/> */}
            <div>
              <h4> ~ Full Stack Web Development --> Oct,2021-Present</h4>
              <p>Masai School, Bengaluru, Karnataka</p>
            </div>
            <hr />
            <div>
              <h4> ~ Master of Arts --> 2019-2021 </h4>
              <p>Branch - Public Administration</p>
              <p>Hari Singh Gour, University, Sagar, M.P. </p>
              <p>Status - First Division </p>
            </div>
            <hr />
            <div>
              <h4> ~ Bachelor of Engineering --> 2013-2017 </h4>
              <p>Branch - Electronics & Communication</p>
              <p>BTIRT Engineering College, Sironja, M.P.</p>
              <p>Status - First Division </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
