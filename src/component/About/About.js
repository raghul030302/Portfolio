import React from "react";
import "./About.css";
import { motion } from 'framer-motion';

const About = () => {
   const aboutStyle = {
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
    lineHeight: "1.6",
    
  };

  const titleStyle = {
    fontSize: "2.7rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "rgb(1, 225, 255)",
  };

  const motionvariants = {
    initial:{
        opacity:0,
        y:500
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

  return (
    <section className="About">
      <motion.div variants={motionvariants} whileInView="animate" initial='initial'>
    <div style={aboutStyle}>
      <h1 style={titleStyle} className="titleStyle text-decoration-underline">About Me</h1>
      <p className="paragraphStyle">
        Hi! I'm Raghul Krishna B, a web developer with a strong background in
        both front-end and back-end development. I completed my studies at{" "}
        <strong>Sri Ramanujar Engineering College </strong>and gained hands-on
        experience through internships and real-world projects. My key skills
        include <strong>Java, JavaScript, React.js, Bootstrap,</strong> and{" "}
        <strong>MySQL</strong>.
      </p>
      <p className="paragraphStyle">
        I love building user-friendly websites and applications, and I’m always
        eager to learn new technologies. My experience includes working as a{" "}
        <strong>Front-End Developer at Senchola</strong>, where I created
        responsive, attractive websites, and as a{" "}
        <strong>Java Developer at Shiash Info Tech Solutions</strong>, where I
        handled back-end development and database tasks.
      </p>
      <p className="paragraphStyle">
        I'm a problem-solver who enjoys writing clean, efficient code that
        enhances the user experience. I approach every project with energy and a
        commitment to improving my skills. I’m always open to new opportunities
        and collaborations with teams that value creativity and quality.
      </p>
      <p className="paragraphStyle">
        Feel free to check out my portfolio to see some of the projects I’ve
        worked on. Let’s connect and build something great together!
      </p>
    </div>
    </motion.div>
    </section>
  );
};

export default About;
