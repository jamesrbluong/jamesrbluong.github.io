import React from 'react'
import './about.css';

const About = () => {
    return (
        <section id="about">
            <div className="aboutContent">
                <span className="aboutTitle">About Me</span><br /><br />
                <span className="aboutDesc">Welcome to my website! I'm <span className="aboutColor">James</span>, and I am a software developer located in <span className="aboutColor">Las Vegas, Nevada</span> currently looking to further my professional career. </span>
                <span className="aboutDesc">I seek to not only learn new technologies, but also have an impact with my work.</span><br /><br />
                <span className="aboutDesc">In May 2024, I graduated from the University of North Florida (Jacksonville, FL) with my B.S. in <span className="aboutColor">Information Science</span>.</span><br /><br />
                
                <div className="skillsBox">
                    <div className="skillsTitle">SKILLS</div>
                    <ul className="skillList">
                        <li className="skillTag">Python</li>
                        <li className="skillTag">C#</li>
                        <li className="skillTag">Java</li>
                        <li className="skillTag">JavaScript</li>
                        <li className="skillTag">.NET 6.0</li>
                        <li className="skillTag">SQL</li>
                        <li className="skillTag">HTML/CSS</li>
                        <li className="skillTag">Bootstrap</li>
                        <li className="skillTag">ReactJS</li>
                    </ul>
                    <div className="skillsTitle">METHODOLOGIES</div>
                    <ul className="skillList">
                        <li className="skillTag">Agile (Scrum)</li>
                        <li className="skillTag">Version Control (Git)</li>
                        <li className="skillTag">JIRA Boards</li>
                        <li className="skillTag">Software Development Cycle</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;