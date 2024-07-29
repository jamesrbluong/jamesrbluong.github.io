import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="introText">Hello! My name is <span className="introName"> James Luong</span>,<br></br> software developer.<span className="blink">_</span></span>
                <Link><button className="btn">Enter</button></Link>
            </div>
        </section>
    )
}

export default Intro;