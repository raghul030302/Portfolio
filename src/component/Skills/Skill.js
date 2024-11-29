import React from 'react';
import { FaJava, FaJs, FaReact, FaBootstrap, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaPhp } from 'react-icons/fa';
import './Skill.css';

const Skill = () => {
    const skills = [
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'MySQL', icon: <FaDatabase /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'C#', icon: "C#" },
        { name: 'PHP', icon: <FaPhp /> }
    ];

    return (
        <section className='Skill'>
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card mb-3">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name text-light">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;
