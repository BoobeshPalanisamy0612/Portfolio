import React from 'react';
import './Education.css';
import studyAnim from '../../assets/lottie/study.json';
import theme_pattern from '../../assets/theme_pattern.svg';
import { BsPersonWorkspace } from "react-icons/bs";
import Lottie from 'lottie-react';

const educations = [
    {
        id: 1,
        duration: '2017 - 2018',
        title: 'Secondary School',
        institution: 'SAGAR INTERNATIONAL SCHOOL'
    },
    {
        id: 2,
        duration: '2018 - 2020',
        title: 'Higher Secondary School',
        institution: 'MAHARISHI INTERNATIONAL RESIDENTIAL SCHOOL'
    },
    {
        id: 3,
        duration: '2020 - 2024',
        title: 'B.E Computer Science and Engineering',
        institution: 'BANNARI AMMAN INSTITUTE OF TECHNOLOGY'
    },
];

const GlowCard = ({ children }) => (
    <div className="glowcard-fallback">
        {children}
    </div>
);

const Education = () => {
    return (
        <div id="education" className="education">

            <div className="education-divider-container">
                <div className="education-divider"></div>
            </div>

            {/* ABOUT STYLE TITLE */}
            <div className="about-title">
                <h1>Education</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="education-content">
                <div className="education-grid">

                    <div className="education-left">
                        <div className="animation-wrap">
                            <Lottie
                                className="education-lottie"
                                animationData={studyAnim}
                                loop={true}
                                style={{
                                    width: '500px',
                                    height: '500px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="education-right">
                        <div className="education-cards">

                            {educations.map((education) => (
                                <GlowCard key={education.id}>
                                    <div className="education-card">

                                        <div className="education-duration">
                                            <p>{education.duration}</p>
                                        </div>

                                        <div className="education-card-body">

                                            <div className="education-icon">
                                                <BsPersonWorkspace size={36} />
                                            </div>

                                            <div>
                                                <p className="education-card-title">
                                                    {education.title}
                                                </p>

                                                <p className="education-institution">
                                                    {education.institution}
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </GlowCard>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Education;