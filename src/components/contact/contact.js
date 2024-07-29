import React from 'react'
import './contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contactPage">
                <h1 className="contactPageTitle">Contact</h1>
                <span className="contactDesc">Fill out the form below for work inquiries.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Name" />
                    <input type="email" className="email" placeholder="Email" />
                    <textarea className="message" name="message" rows="5" placeholder="Message" />
                    <btn type="submit" value="send" className="submitBtn">Submit</btn>
                    <div className="links">
                        <img src="" alt="" className="link" />
                        <img src="" alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact