import React, { useEffect, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import Draggable from "react-draggable";
import { PacmanLoader } from "react-spinners";
import { AiOutlineDrag } from "react-icons/ai";

import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoCloseOutline,
  IoAdd,
} from "react-icons/io5";

const Resume = React.forwardRef((props, ref) => {
  let skills = [
    { skill: "HTML 5" },
    { skill: "CSS 3" },
    { skill: "SCSS" },
    { skill: "BOOTSTRAP" },
    { skill: "MUI" },
    { skill: "JAVASCRIPT" },
    { skill: "REACT" },
    { skill: "LARAVEL" },
    { skill: "SQL" },
    { skill: "AWS" },
  ];

  let [list, skillList] = useState(skills);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  let removeHandler = (e) => {
    let x = e.target.getAttribute("remove");
    console.log(e.target);
    skillList(list.filter((items) => items.skill !== x));
  };

  let addSkillhandler = () => {
    if (skills.length <= 10) {
      skillList((current) => [{ skill: "Edit Skill" }, ...current]);
    } else {
      alert("no");
    }
  };

  return (
    <div ref={ref} className="frame-res f-des">
      {loading ? (
        <div className="loader-wrapper">
          <PacmanLoader color="#292929" size={50} />
        </div>
      ) : (
        <>
          <h1 className="m-0">
            <EditText name="name" defaultValue="Jon Snow" />
          </h1>
          <h2 className="gray-color mt-10">
            <EditText name="job-title" defaultValue="Front End Designer" />
          </h2>
          <div className="contact mt-20">
            <div className="sec-wrapper j-start">
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <div>
                  <IoMailOutline />
                </div>
                <div>
                  <EditText
                    style={{ marginTop: "1px" }}
                    name="mail"
                    defaultValue="jonsnow@gmail.com"
                  />
                </div>
              </div>
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <div>
                  <IoPhonePortraitOutline />
                </div>
                <div>
                  <EditText
                    style={{ marginTop: "1px" }}
                    name="number"
                    defaultValue="+91 7778889990"
                  />
                </div>
              </div>
              <div className="inline gray m-loc" style={{ fontSize: "14px" }}>
                <span>
                  <IoLocationOutline />
                </span>
                <EditText
                  style={{ marginTop: "1px" }}
                  name="location"
                  defaultValue="New Delhi, India"
                />
              </div>
            </div>
          </div>
          <div className="ext-links">
            <div className="sec-wrapper j-start">
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <span>
                  <IoLogoLinkedin />
                </span>
                <div style={{ marginTop: "1px" }}>
                  <a
                    href="https://www.linkedin.com/in/shivam-chauhan-noobtodev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
              <div className="inline gray" style={{ fontSize: "14px" }}>
                <span>
                  <IoLogoGithub />
                </span>
                <div style={{ marginTop: "1px" }}>
                  <a
                    href="https://github.com/itsmeShC"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-30">
            <EditText
              name="description"
              defaultValue="Motivated, team-work oriented, and responsible Front end Designer. Proficient in creating User Interfaces, Debugging/Testing code and implementing new features. Strong ability to influence thinking in Web Development and have some Leadership qualities."
            />
          </div>
          <Draggable axis="y" handle="span">
            <div className="ed-sec mt-30">
              <span className="drag">
                <AiOutlineDrag />
              </span>
              <h2>
                <EditText name="ed" defaultValue="Education" />
              </h2>
              <div className="sec-wrapper mt-20">
                <Draggable axis="x" handle="span">
                  <div className="sec">
                    <span className="drag">
                      <AiOutlineDrag />
                    </span>
                    <div className="sec-hero mb-10">
                      <EditText
                        style={{ color: "#555555!important" }}
                        name="high-school"
                        defaultValue="High School (2019)"
                      />
                    </div>
                    <div>
                      <EditText
                        name="school-name"
                        defaultValue="Delhi Public School, New Delhi"
                      />
                    </div>
                    <div className="mt-10">
                      <EditText name="grade" defaultValue="8.6 CGPA" />
                    </div>
                  </div>
                </Draggable>
                <Draggable axis="x" handle="span">
                  <div className="sec">
                    <span className="drag">
                      <AiOutlineDrag />
                    </span>
                    <div className="sec-hero mb-10">
                      <EditText
                        name="intermediate"
                        defaultValue="Intermediate (+2) (2015)"
                      />
                    </div>
                    <div>
                      <EditText
                        name="school-name2"
                        defaultValue="Delhi Public School, New Delhi"
                      />
                    </div>
                    <div className="mt-10">
                      <EditText name="grade2" defaultValue="80.2%" />
                    </div>
                  </div>
                </Draggable>
                <Draggable axis="x" handle="span">
                  <div className="sec">
                    <span className="drag">
                      <AiOutlineDrag />
                    </span>
                    <div className="sec-hero mb-10">
                      <EditText
                        style={{ color: "#555" }}
                        name="College"
                        defaultValue="Graduation (2015-19)"
                      />
                    </div>
                    <div>
                      <EditText
                        name="college-name"
                        defaultValue="B.Tech, CS specialization in Cloud Computing,
                  Delhi Technical University, Delhi"
                      />
                    </div>
                    <div className="mt-10">
                      <EditText name="grade3" defaultValue="8.0 CGPA" />
                    </div>
                  </div>
                </Draggable>
              </div>
            </div>
          </Draggable>

          <Draggable axis="y" handle="span">
            <div className="sec-wrapper n-flex mt-30">
              <span className="drag">
                <AiOutlineDrag />
              </span>
              <div className="inline no-g">
                <h2>
                  <EditText name="title1" defaultValue="Technical Skills" />
                </h2>
                <span>
                  <span
                    className="ad-sk badge rounded-pill blue"
                    onClick={addSkillhandler}
                  >
                    <IoAdd style={{ fontWeight: "900" }} />
                    <small>Add Skill</small>
                  </span>
                </span>
              </div>

              <div className="badge-wrapper mt-20">
                {list.map((x) => (
                  <div className="badge rounded-pill blue" key={x.skill}>
                    <EditText
                      name="skill"
                      style={{ minHeight: "auto" }}
                      defaultValue={x.skill}
                    />
                    <span className="close">
                      <IoCloseOutline
                        remove={x.skill}
                        onClick={removeHandler}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Draggable>
          <Draggable axis="y" handle="span">
            <div className="wx-sec mt-30">
              <span className="drag">
                <AiOutlineDrag />
              </span>
              <div>
                <h2 className="mb-20">
                  <EditText name="title2" defaultValue="Work Experience" />
                </h2>
                <h6 className="m-0">
                  <EditText
                    name="job-title"
                    defaultValue="Web Developer Intern"
                  />
                </h6>
                <div className="gray-color">
                  <EditText
                    name="name"
                    style={{ fontSize: "14px" }}
                    defaultValue="Infoway Infotech, Delhi"
                  />
                </div>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="wx-info-text"
                          defaultValue="Designed the project UI of the ERM web app using HTML/CSS
                  Javascript/Jquery that allows the schools to manage their
                  data."
                        />
                      </div>
                    </li>
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="wx-info-text2"
                          defaultValue="Collabrated with the other interns and senior developers.
                  Gathered the requirements and designed the tool."
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-30">
                <div>
                  <h6 className="m-0">
                    <EditText name="job-title" defaultValue="UI/UX Intern" />
                  </h6>
                  <div className="gray-color">
                    <EditText
                      name="name"
                      style={{ fontSize: "14px" }}
                      defaultValue="NoobtoDev, Dehradun"
                    />
                  </div>
                  <div className="wx-info">
                    <ul className="m-0">
                      <li>
                        <div className="mt-10">
                          <EditText
                            name="wx-info-text"
                            defaultValue="Redesigned the UI of the variuos applications, that got featured in Play Store. Appreciated by the team and started working on the other apps. "
                          />
                        </div>
                      </li>
                      <li>
                        <div className="mt-10">
                          <EditText
                            name="wx-info-text2"
                            defaultValue="Increased the rate of feedback by 30% by enhancing the rating mechanism and overall post-order experience."
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
          <div className="pagebreak"></div>
          <Draggable axis="y" handle="span">
            <div className="wx-sec mt-30">
              <span className="drag">
                <AiOutlineDrag />
              </span>
              <h2 className="mb-20">
                <EditText defaultValue="Projects" />
              </h2>
              <div className="mb-20">
                <EditTextarea
                  defaultValue="I've worked on more than 20+ projects using
                HTML, CSS, BOOTSTRAP, MUI, WORDPRESS, JQUERY/JAVASCRIPT, REACT,
                LARAVEL. Some of the amazing projects i've worked on are"
                />
              </div>
              <div className="project-des">
                <h6 className="m-0">
                  <EditText name="project-name" defaultValue="RealExtract.ca" />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="abt-project1"
                          defaultValue="Acted as core member of small team engaged in designing and developing Ecommerce platform using Laravel, MySQL as database. Successfully integrated third-party services and external APIs as a part of implementation."
                        />
                      </div>
                    </li>
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="abt-project2"
                          defaultValue="	
Improved load speed on mobile, from 14 to 6 seconds, by applying recommendations by Google Lighthouse."
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-des mt-30">
                <h6 className="m-0">
                  <EditText
                    name="project-name"
                    defaultValue="Social Demand Sensing Engine"
                  />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="abt-project1"
                          defaultValue="Worked on Mapbox api's, CanvasJs Graphs in the app to show the data insights and created UI of the application using HTML 5, Bootstrap and Javascript. The App shows the Granular data insights at scale."
                        />
                      </div>
                    </li>
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="abt-project2"
                          defaultValue="Engaged with the team, giving daily reports to the team manager. Taking feedbacks and working on the required changes and creating new functionalities."
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-des mt-30">
                <h6 className="m-0">
                  <EditText
                    name="project-name"
                    defaultValue="Locate (Location Tracker)"
                  />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="abt-project1"
                          defaultValue="A location tracker web application using geolocation api. Technology used HTML 5, CSS 3, Bootstrap, Jquery and PHP. This application is used by the parents to track the activity of their children's."
                        />
                      </div>
                    </li>
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="abt-project1"
                          defaultValue="Engaged in setting up server in On-Premise infrastructure (Apache/Nginx web servers, Scheduling Cron Jobs and so on)"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="project-des mt-30">
                <h6 className="m-0">
                  <EditText name="project-name" defaultValue="Hike2Heaven.in" />
                </h6>
                <div className="wx-info">
                  <ul className="m-0">
                    <li>
                      <div className="mt-10">
                        <EditText
                          name="abt-project1"
                          defaultValue="Redesinged this travelling company website. Analysing the user needs and platform requirements for determining feasibility of design within time and cost constraints, consulting with clients about platform design and maintenance. Also helped the team with the marketing strategies and cost cutting."
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </Draggable>
        </>
      )}
    </div>
  );
});

export default Resume;
