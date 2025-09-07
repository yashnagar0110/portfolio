import SkillCard from "./Skill_Card";
import jsLogo from "/media/js-logo.png";
import mongoLogo from "/media/mongo-logo.webp";
import expressLogo from "/media/express-logo.webp";
import reactLogo from "/media/react-logo.webp";
import nodeLogo from "/media/node-logo.png";
import htmlLogo from "/media/html-logo.png";
import cssLogo from "/media/css-logo.svg";
import tailLogo from "/media/tail-logo.png";
import bootLogo from "/media/bootstrap-logo.png";
import muiLogo from "/media/material-ui.svg";
import gitLogo from "/media/git-logo.png";
import apiLogo from "/media/api1.png";
import passportLogo from "/media/passport.svg";
import hoppLogo from "/media/Hoppscotch.png";
import javaLogo from "/media/java-logo.png";
import pythonLogo from "/media/Python-logo.png";
import mysqlLogo from "/media/mysql1-logo.png";

export default function Skills() {
  const skills = [
    { name: "JavaScript", img: jsLogo },
    { name: "MongoDB", img: mongoLogo },
    { name: "MySQL", img: mysqlLogo },
    { name: "Express", img: expressLogo },
    { name: "React", img: reactLogo },
    { name: "Node.js", img: nodeLogo },
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "Tailwind", img: tailLogo },
    { name: "Bootstrap", img: bootLogo },
    { name: "Material UI", img: muiLogo },
    { name: "Git & GitHub", img: gitLogo },
    { name: "API Handlind", img: apiLogo },
    { name: "Passport.js", img: passportLogo },
    { name: "Hoppscotch", img: hoppLogo },
    { name: "Java(DSA)", img: javaLogo },
    { name: "Python", img: pythonLogo },
  ];

  return (
    <section className="py-5 bg-light" id="skillpage">
      <div className="container">
        <h2 className="fw-bold mb-4 fs-1">Skills</h2>
        <div className="row">
          {skills.map((s, i) => (
            <SkillCard key={i} skill_name={s.name} skill_img={s.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
