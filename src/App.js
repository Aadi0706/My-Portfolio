import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./animation.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";
// import Projects from "./components/project";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    setTimeout(function () {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div id="top">
      <Navbar />
      <Header />

      <div id="about" data-aos={"fade-left"} style={{ height: "15vh" }}>
        <div className="stack-header">
          <p className="highlight">To Know</p>
          <h2 className="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header" data-aos={"zoom-in"}>
          {/* <p className="highlight">Projects</p> */}
          <h1 className="head">Projects</h1>
        </div>
        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Licious.in - Clone"}
            description={
              "Built the clone of licious.in-an online raw meat provider. Used HTML, CSS, JavaScript, Bootstrap , Local Storage. Major pages include Login , sign-up ,Home page , Product page , Cart page, Account page ,Deal page , Checkout page , Payment Page . full functional from Login to payment page."
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={["Licioius-front.gif", "Licious-2nd.png", "Licious-3rd.png"]}
            links={[
              "https://the-licious-clone.netlify.app/",
              "https://github.com/Aadi0706/first_project_Licious"
              // "https://drive.google.com/file/d/1kv49OOsf5xMyKa1MuZU3WRk_n6rbuv58/view",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"Max Fashion - Clone"}
            description={
              "Max Fashion is well-known for their frequent billboard collections in Dubai and are often referred to as leading innovation in the retail tech industry.We used the HTML,CSS,JavaScript,LocalStorsge on the frontend side and Node.js, express, mongoose, mongoDb and Google Auth on the backend side of the site."
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              "tech/express.png",
              "tech/node.webp",
              "tech/mongo.png",
              "tech/postman.png",
            ]}
            imges={["MaxFashion-front.jpeg", "Maxfashion-women.jpeg", "Maxfashion-cart.jpeg","Maxfashion-cart-2.jpeg"]}
            links={[
              "https://maxfashion-clone.netlify.app/",
              "https://github.com/Aadi0706/MaxFashion-Clone",
              "https://drive.google.com/file/d/1yJRRwawuQnKej5v2OvwAiMqNUclnEVth/view",
            ]}
          />
        </div>

        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Uborics.in - Clone"}
            description={
              "Built the clone of Uborics.in-an online e-commerce product site. We Used HTML, CSS, JavaScript, React.js, Materail.Ui. Major pages include Login , sign-up ,Home page , Product page , Cart page, Account page ,Deal page , Checkout page , Payment Page . full functional from Login to payment page."
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              "tech/express.png",
              "tech/node.webp",
              "tech/mongo.png",
              "tech/postman.png",
            ]}
            imges={["home.png", "category.png", "chappal.png","single.png"]}
            links={[
              "https://uboric-clone1-hazel.vercel.app/",
              "https://github.com/rahulbaghel6211/uboric-clone",
              "https://drive.google.com/file/d/1kv49OOsf5xMyKa1MuZU3WRk_n6rbuv58/view",
            ]}
          />
        </div>

             {/* //Section for mini-projects or assignments like youtube, food app, etc*/}


        {/* <div
          className="stack-header"
          style={{ marginBottom: "45px" }}
          data-aos={"fade-right"}
        >
          <p className="highlight">Mini Project's</p>
        </div>
        <div className="project_div">
          <Projects />
        </div> */}
        
      </div>

      <div id="contact" style={{ height: "15vh" }}></div>
      <Footer />
      
    </div>
  );
}

export default App;
