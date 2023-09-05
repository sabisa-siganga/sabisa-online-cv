import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import profilePic from "../src/img/profilePic.jpg";

function App() {
  // skills array
  const skills = [
    "React.js",
    "Typescript",
    "Redux",
    "Javascript",
    "Bootstrap",
    "Git",
    "HTML",
    "CSS",
    "SASS",
    "Google Analytics",
    "Styled-components",
  ];
  
  // Iterating through skills array get and display each skill using the map function
  const skillList = skills.map((skill, index) => (
    <ListGroup.Item as="li" key={index}>
      {skill}
    </ListGroup.Item>
  ));

  return (
    <Container fluid className="cv-container my-5">
      <Row>
        <Col className="left" xs={12} md={4} lg={4}>
          {/* Left container */}
          <div className="left-container px-3">
            <div className="img-container py-5">
              {/* profile picture */}
              <Image
                className="pic"
                src={profilePic}
                alt="profileImage"
                roundedCircle
              />
            </div>
            {/* profile information */}
            <div className="profile-info">
              <h5 className="text-center py-1 mb-3">Profile</h5>
              <p>
                Web Developer who works with the frontend and embarking on a
                journey of learning and mastering the backend of website or
                application.
                <br />
                Provide an end-to-end service, and can be involved in projects
                that are building UI websites <br />
              </p>
            </div>
            {/* contact details */}
            <div className="contact">
              <h5 className="text-center py-1 mb-3">Contact</h5>
              <div className="contact-info">
                <span className="material-symbols-outlined">contact_phone</span>
                <p> (+27) 788437034</p>
              </div>
              <div className="email-info">
                <span className="material-symbols-outlined">mail</span>
                <p>lumisabisa@gmail.com</p>
              </div>
              <div className="website-info">
                <span className="material-symbols-outlined">
                  captive_portal
                </span>
                {/* github link */}
                <p>
                  <a href="https://github.com/sabisa-siganga">
                    https://github.com/sabisa-siganga
                  </a>
                </p>
              </div>
              <div className="address-info">
                <span className="material-symbols-outlined">location_on</span>
                <p>
                  Paddlefish str., Alberton,
                  <br />
                  Johannesburg, 1449
                </p>
              </div>
            </div>

            <div className="skills pb-3">
              <h5 className="text-center py-1 mb-3">Skills</h5>
              {/* list of skills */}
              <ListGroup.Item as="ul" className="items">
                {skillList}
              </ListGroup.Item>
            </div>
          </div>
        </Col>

         {/* right container */}
        <Col className="right" xs={12} md={8} lg={8}>
          <div className="right-container">
            {/* name and position/role */}
            <div className="name-role py-5 my-5">
              <h2>SABISA SIGANGA</h2>
              <p>Front-End Developer</p>
            </div>
             
            <div className="edu-exper">
              {/* Education information */}
              <div className="education">
                <h5 className="text-center py-1 mb-3">Education</h5>
                <p>
                  May 2023 - Present || Hyperion dev
                  <br />
                  Full-Stack Web Development
                </p>
                <p>
                  2022 || Udemy - Modern React with Redux
                  <br />
                  Master React and Redux with React Router, Webpack, &
                  Create-React-App.
                  <br />
                  Includes Hooks
                  <br />
                  Certificate:{" "}
                  <a href="https://www.udemy.com/certificate/UC-86196a9c-007b-43e7-8b78-3ae584cac0dc/">
                    {" "}
                    Udemy Certificate
                  </a>
                </p>
                <p>
                  2017 - 2020 || University of Fort Hare
                  <br />
                  Bachelor of Social Work
                </p>
              </div>
                
                {/* work experience information */}
              <div className="experience pb-3">
                <h5 className="text-center py-1 mb-3">Work Experience</h5>

                <h6>Frontend Developer at Yiya Kude (Apri 2022 - Present)</h6>
                <ul>
                  <li>Co-ordinating with SEO team</li>
                  <li>
                    Performed code reviews, peer programming, sprint meetings
                  </li>
                  <li>Translate designs & wireframes into quality code</li>
                  <li>
                    Building stable & maintainable codebase using React, Redux
                    for state management, and Vuejs
                  </li>
                  <li>Unit testing using Jest & React testing library</li>
                  <li>
                    Create responsive web apps using SASS & Styled-components
                  </li>
                  <li>Project</li>
                  <li>
                    VOIP calling app (YOOTOK) built using React, Redux,
                    Styled-components, TypeScript. Unit testing with Jest, React
                    testing library.
                  </li>
                  <li>
                    Building marketing websites using Vuejs, SASS and GraphQL
                  </li>
                </ul>

                <div>
                  <h6>
                    Junior Frontend Developer (Part-time) at Enrooting
                    Technologies (January 2018 - March 2020)
                  </h6>
                  <ul>
                    <li>
                      Used React & Redux to build admin dashboards for the Cutag
                      an online platform for student recruitment.
                    </li>
                    <li>
                      Brought UI designs into life with the help of SASS and
                      bootstrap.
                    </li>
                    <li>Maintained existing systems</li>
                    <li>Project collaboration via Git</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
