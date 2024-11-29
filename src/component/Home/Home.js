import React from 'react';
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


export const Home = () => {
  const [role] = useTypewriter({
    words: ['Web Developer', 'Software Developer', 'React Developer', 'Java Developer'],
    loop: true,  
  });
  return (
    <section className='Home'>
    <div className='Home'>
      <div className='Home_Content'>
        <p className='greet'>Hello,I'M</p>
        <h1 className="name">Raghul Krishna B</h1>
        <p className='role '>{role}<span className='cursor'><Cursor /></span></p>
        <div className='Links mt-4'>
        <a href="Assets/Raghul_Krishna_B-Resume.pdf" download className='link mx-3' target='blank'> Download CV</a>
        </div>
        <div className='social_link mt-5'>
          <a href='mailto:raghulkrish2002@gmail.com' className='Social mx-3' target='blank'><FaEnvelope/></a>
          <a href='https://www.linkedin.com/in/raghul-krishna-b-909418253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='Social mx-3' target='blank'><FaLinkedinIn/></a>
          <a href='https://github.com/raghul030302' className='Social mx-3' target='blank'><FaGithub /></a>
          <a href='https://www.instagram.com/krish_editz1?igsh=MW1rZXZ6NGR1YXpueQ==' className='Social mx-3' target='blank'><FaInstagram/></a>
        </div>
      </div>
    </div>
    </section>
  );
};
