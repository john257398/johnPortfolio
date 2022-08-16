import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../cssFiles/portfolio.css";
import med1 from "../myImages/john.jpg";
import firstProject from "../myImages/first project.PNG";
import secondProject from "../myImages/second project.PNG";
import thirdProject from "../myImages/third project.PNG";
import {
  FaTimes,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { ImMenu3 } from "react-icons/im";
import Typical from "react-typical";

function Portfolio() {
  const [show, setShow] = useState("0");
  const [visible, setVisible] = useState("hidden");
  const [IconChange, setIconChange] = useState(
    <ImMenu3 className="menu3Icon" />
  );
  useEffect(() => {
    Aos.init({ duration: "1700" });
  }, []);
  const changeHeight = () => {
    if (show === "0") {
      setShow("1");
      setVisible("visible");
      setIconChange(<FaTimes className="menu3Icon" />);
    } else if (show === "1") {
      setShow("0");
      setVisible("hidden");
      setIconChange(<ImMenu3 className="menu3Icon" />);
    }
  };
  return (
    <>
      <div className="totalNav">
        <div className="nameDiv">Code_Doc</div>
        <div className="flexDiv">
          <a href="#navigateHome">
            {" "}
            <div className="flexChild1">Home</div>
          </a>
          <a href="#navigateAbout">
            <div className="flexChild2">About</div>
          </a>
          <a href="#navigateProjects">
            <div className="flexChild3">Projects</div>
          </a>
          <a href="#navigateSkills">
            <div className="flexChild4">Skills</div>
          </a>
          <a href="#navigateContact">
            <div className="flexChild5">Contact</div>
          </a>
        </div>
        <div className="menu3" onClick={changeHeight}>
          {IconChange}
        </div>
      </div>
      <div className="navParent" style={{ opacity: show, visibility: visible }}>
        <div className="navFlex">
          <u1>
            <a href="#navigateHome" onClick={changeHeight}>
              {" "}
              <li className="navHome">Home</li>
            </a>
            <a href="#navigateAbout" onClick={changeHeight}>
              <li className="navAbout">About</li>
            </a>
            <a href="#navigateProjects" onClick={changeHeight}>
              <li className="navProject">Projects</li>
            </a>
            <a href="#navigateSkills" onClick={changeHeight}>
              <li className="navSkill">Skills</li>
            </a>
            <a href="#navigateContact" onClick={changeHeight}>
              <li className="navContact">Contact</li>
            </a>
          </u1>
        </div>
      </div>
      <section id="navigateHome">
        <div className="greetingParent">
          <div className="greetDiv">
            <p className="greet">Greetings,</p>
            <div className="john">
              I am{"  "}
              <Typical
                loop={Infinity}
                wrapper="b"
                className="typicalText"
                steps={["John Solomon", 2000, "a Software Developer", 2000]}
              />
            </div>
            <p className="john2">
              I am passionate about coding and that has enabled me to discover a
              career in the IT industry as a web developer.
            </p>
            <p className="john3">
              I am a medical student though but my passion for programming has
              rendered me incapable of dropping it(programming).Using the skills
              and experience I have gathered over the last couple of years to
              solve problems for businesses and similar industries is my biggest
              dream.{" "}
            </p>
            <p className="john4">
              I am also a voracious learner. When I'm not coding I'm either busy
              learning new technologies or improving on existing ways to solve
              problems. I thrive with an open heart and I am willing to learn,
              relearn and unlearn to the latest in standards.
            </p>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="whatsappParent"
            >
              <button className="whatsapp">Whatsapp Me</button>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="iconAlign"
            >
              <div>
                {" "}
                <FaLinkedinIn className="icon1" />
              </div>
              <div>
                {" "}
                <FaTwitter className="icon2" />
              </div>
              <div>
                {" "}
                <FaGithub className="icon3" />
              </div>
              <div>
                <FaFacebook className="icon4" />
              </div>
            </div>
          </div>
          <div className="medDiv">
            <div className="medImageDiv">
              <img alt="" src={med1} className="medImage" />
            </div>
            <div className="johnImage">
              <p>John Solomon(Code_Doc)</p>
            </div>
          </div>
        </div>
      </section>
      <section id="navigateAbout" className="aboutDiv">
        <div data-aos="fade-up" className="aboutMe">
          {" "}
          <h1 className="aboutMe2">About Me</h1>
        </div>
        <div data-aos="fade-up" className="aboutBody">
          <p className="aboutBody2">
            I am a Software Developer with over one and the half years of
            experience.Though i have a basic knowledge of Nodejs,Express.js and
            Mongodb,i have only created two crash course projects(task manager
            and Article manager),they are not in my portfolio though.I hail from
            Nigeria, West Africa. I am a guy completely driven by passion,
            especially in the IT industry, and this passion has pushed me to
            learn to code. Coding is an addiction for me and I am not curing
            myself of it anytime soon. It is always a thing of joy for me to use
            my skills to solve the problems of others, as well as mine. Other
            hobbies of mine include playing games, hanging out, listening to
            music,reading etc.
          </p>
        </div>
        <div data-aos="fade-up" className="resumeParent">
          <button className="resume">Download My Resume</button>
        </div>
      </section>
      <section id="navigateProjects">
        <div data-aos="fade-up" className="projectParent">
          <h1 className="project">Projects</h1>
        </div>
        <div className="projectFlex">
          <div data-aos="fade-right" className="firstProjectDiv">
            <img className="firstProject" src={firstProject} alt="" />
            <div className="firstProjectFlex">
              <div className="firstProjectHead">
                <h1>Quiz Website</h1>
              </div>
              <div className="firstProjectText">
                <p>
                  I built this Front-end website with Html,Css and Javascript.I
                  also implemented Local Storage to save data.It is very
                  mobile-responsive and overall smooth user experience.
                </p>
              </div>
            </div>
            <button className="view1">View</button>
          </div>
          <div data-aos="fade-in" className="secondProjectDiv">
            <img className="secondProject" src={secondProject} alt="" />
            <div className="secondProjectFlex">
              <div className="secondProjectHead">
                <h1>Pet Shop E-commerce Website</h1>
              </div>
              <div className="secondProjectText">
                <p>
                  I built this Front-end website with React.js framework.It is
                  more like the prototype of an E-commerce Website because i did
                  not implement backend,but the Ui is very okay.It is very
                  mobile-responsive and overall smooth user experience.
                </p>
              </div>
            </div>
            <button className="view2">View</button>
          </div>
          <div data-aos="fade-left" className="thirdProjectDiv">
            <img className="thirdProject" src={thirdProject} alt="" />
            <div className="thirdProjectFlex">
              <div className="thirdProjectHead">
                <h1>Todo App Website</h1>
              </div>
              <div className="thirdProjectText">
                <p>
                  I built this Front-end website with React.js framework.I
                  implemented local storage for the working of the App which
                  includes adding,deleting,editing and preview of your
                  Todos!,the ui of this todo app was created by me.It is very
                  mobile-responsive and overall smooth user experience.
                </p>
              </div>
            </div>
            <button className="view3">View</button>
          </div>
        </div>
      </section>
      <section id="navigateSkills">
        <div data-aos="fade-up" className="skillParent">
          <h1 className="skill">Skills</h1>
        </div>
        <div data-aos="fade-up" className="iconParent">
          <div className="htmlDiv">
            <div className="htmlChild">Html</div>
            <div className="htmlDiv2">
              {" "}
              <FaHtml5 className="html" />
            </div>
          </div>
          <div className="cssDiv">
            <div className="cssChild">Css</div>
            <div className="cssDiv2">
              {" "}
              <FaCss3 className="css" />
            </div>
          </div>
          <div className="jsDiv">
            <div className="jsChild">Javascript</div>
            <div className="jsDiv2">
              <FaJs className="js" />
            </div>
          </div>
          <div className="reactDiv">
            <div className="reactChild">React</div>
            <div className="reactDiv2">
              <FaReact className="react" />
            </div>
          </div>
          <div className="bootstrapDiv">
            <div className="bootstrapChild">Bootstrap</div>
            <div className="bootstrapDiv2">
              {" "}
              <FaBootstrap className="bootstrap" />
            </div>
          </div>
          <div className="nodejsDiv">
            <div className="nodejsChild">Node.js</div>
            <div className="nodejsDiv2">
              <FaNodeJs className="nodejs" />
            </div>
          </div>
          <div className="mongodbDiv">
            <div className="mongodbChild">Mongodb</div>
            <div className="mongodbDiv2">
              <FaNodeJs className="mongodb" />
            </div>
          </div>
          <div className="expressjsDiv">
            <div className="expressjsChild">Express.js</div>
            <div className="expressjsDiv2">
              <FaNodeJs className="expressjs" />
            </div>
          </div>
        </div>
      </section>
      <section id="navigateContact">
        <div data-aos="fade-up" className="contactParent">
          <h1 className="contact">Contact Me</h1>
        </div>
        <div data-aos="fade-up" className="contactFlex">
          <div className="contactDiv1">
            <input type="text" placeholder="Name" className="contactChild1" />
          </div>
          <div className="contactDiv2">
            <input type="email" placeholder="Email" className="contactChild2" />
          </div>
          <div className="contactDiv3">
            <input
              type="text"
              placeholder="Subject"
              className="contactChild3"
            />
          </div>
          <div className="contactDiv4">
            <textarea
              type="text"
              placeholder="Message"
              className="contactChild4"
            />
          </div>
          <div className="contactDiv5">
            <input
              type="button"
              value="Send to John"
              className="contactChild5"
            />
          </div>
        </div>
      </section>
      <div className="navDown">
        <div className="copyrightParent">
          <p>
            <AiOutlineCopyright className="copyrightIcon" />
            <span className="copyrightText">Code_Doc</span>
          </p>
        </div>
        <div className="iconFlex">
          <div>
            {" "}
            <FaLinkedinIn className="icon5" />
          </div>
          <div>
            {" "}
            <FaTwitter className="icon6" />
          </div>
          <div>
            {" "}
            <FaGithub className="icon7" />
          </div>
          <div>
            <FaFacebook className="icon8" />
          </div>
        </div>
        <div className="copyrightParent2">
          <p>
            <AiOutlineCopyright className="copyrightIcon2" />
            <span className="copyrightText2">Code_Doc 2022</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
