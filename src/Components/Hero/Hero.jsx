import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import resume_pdf from '../../assets/Boobesh-Resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <div className='hero-content'>
                <h1>
                    <span>I'M Boobesh Palanisamy </span> <br />
                    Creative Designer from India
                </h1>
                <p>
                    <span className="uiux"> | UI/UX Designer | </span>
                    <span className="webdev"> | Web Developer | </span>
                </p>

                <div className="hero-socials">
                    <a 
                        href="https://github.com/BoobeshPalanisamy0612"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaGithub className="social-icon" />
                    </a>

                    <a 
                        href="https://www.instagram.com/boobesh0612"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaInstagram className="social-icon" />
                    </a>

                    <a 
                        href="mailto:boobeshpalanisamy0612@gmail.com"
                        className="social-link"
                    >
                        <MdEmail className="social-icon" />
                    </a>

                    <a 
                        href="https://wa.me/918248096268"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaWhatsapp className="social-icon" />
                    </a>
                </div>
                
                <div className="hero-action">
                    <div className="hero-connect">
                        <AnchorLink className='anchor-link' offset={50} href='#contact'>
                            Connect With Me
                        </AnchorLink>
                    </div>
                    <div className="hero-resume">
                        <a href={resume_pdf} target="_blank" rel="noopener noreferrer" download>
                            My Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className='hero-img'>
                <img src={profile_img} alt="Profile" />
            </div>
        </div>
    );
};

export default Hero;
