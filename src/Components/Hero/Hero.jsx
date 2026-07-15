import React from 'react';
import './Hero.css';
import resume_pdf from '../../assets/Boobesh-Resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaInstagram, FaWhatsapp, FaPaperPlane, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <div className="hero-glow" aria-hidden="true"></div>

            <div className='hero-content'>
                <h1>
                    <span>I'M <b className="b">Boobesh Palanisamy</b> </span> <br />
                    Creative Designer from India
                </h1>
                <p className="role-wrap">
                    <span className="role-badge uiux">UI/UX Designer</span>
                    <span className="role-badge webdev">Web Developer</span>
                </p>

                <div className="hero-socials">
                    <a href="https://github.com/BoobeshPalanisamy0612"
                        target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/boobesh0612"
                        target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="mailto:boobeshpalanisamy0612@gmail.com" className="social-link">
                        <MdEmail className="social-icon" />
                    </a>
                    <a href="https://wa.me/918248096268"
                        target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaWhatsapp className="social-icon" />
                    </a>
                </div>

                <div className="hero-action">
                    <div className="hero-connect">
                        <AnchorLink className='anchor-link' offset={50} href='#contact'>
                            <FaPaperPlane className="btn-icon" />
                            Connect With Me
                        </AnchorLink>
                    </div>
                    <div className="hero-resume">
                        <a href={resume_pdf} target="_blank" rel="noopener noreferrer" download>
                            <FaDownload className="btn-icon" />
                            My Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <iframe
                    src="/Portfolio/hero-animation.html"
                    className="hero-animation"
                    title="Workspace Animation"
                    scrolling="no"
                    frameBorder="0"
                />
            </div>
        </div>
    );
};

export default Hero;
