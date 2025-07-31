import React, { useState } from 'react';
import '../css/project.css';

export default function Project() {

    const [showMore, setShowMore] = useState(false);

    const toggleCertificates = () => {
        setShowMore(prev => !prev);
    };

    return (
        <>
            {/* PROJECT SECTION */}
            <section className="projects-section">
                <h2>My Projects</h2>

                <div className="project">
                    <div className="project-item">
                        <div className="project-date">2025</div>
                        <div className="project-icon"><img src="/images/idea.png" alt="" /></div>
                        <div className="project-content">
                            <h3>ClickNBuild</h3>
                            <p className="project-name">Web App – Construction Platform</p>
                            <p style={{ fontSize: 'smaller', marginTop: 0 }}><strong>Description</strong></p>
                            <p>
                                A web platform developed using Flask that connects clients with builders and vendors, streamlining construction project coordination and procurement.
                            </p>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-date">2025</div>
                        <div className="project-icon"><img src="/images/idea.png" alt="" /></div>
                        <div className="project-content">
                            <h3>Zeval</h3>
                            <p className="project-name">Real Estate Price Estimator</p>
                            <p style={{ fontSize: 'smaller', marginTop: 0 }}><strong>Description</strong></p>
                            <p>
                                Developed a house cost prediction system using data from Zameen.com. Implemented data cleaning, unit conversions, and ML models like Random Forest and Decision Tree with 80%+ accuracy.
                            </p>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-date">2024</div>
                        <div className="project-icon"><img src="/images/idea.png" alt="" /></div>
                        <div className="project-content">
                            <h3>Flex</h3>
                            <p className="project-name">Student-Teacher Portal</p>
                            <p style={{ fontSize: 'smaller', marginTop: 0 }}><strong>Description</strong></p>
                            <p>
                                A web-based system to facilitate communication and data sharing between students and faculty. Includes features like attendance tracking, grading, and messaging.
                            </p>
                        </div>
                    </div>

                    {showMore && (
                        <>
                            <div className="project-item">
                                <div className="project-date">2023</div>
                                <div className="project-icon"><img src="/images/idea.png" alt="" /></div>
                                <div className="project-content">
                                    <h3>RideMate</h3>
                                    <p className="project-name">SRS – Cab Booking App</p>
                                    <p style={{ fontSize: 'smaller', marginTop: 0 }}><strong>Description</strong></p>
                                    <p>
                                        Wrote a complete Software Requirements Specification for a cab booking app, including system models, use case diagrams, and detailed functional requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="project-item">
                                <div className="project-date">2023</div>
                                <div className="project-icon"><img src="/images/idea.png" alt="" /></div>
                                <div className="project-content">
                                    <h3>Bank Management System</h3>
                                    <p className="project-name">C++ Console Application</p>
                                    <p style={{ fontSize: 'smaller', marginTop: 0 }}><strong>Description</strong></p>
                                    <p>
                                        Developed a banking system using object-oriented programming in C++. Features include account creation, transaction handling, and statement generation.
                                    </p>
                                </div>
                            </div>

                            <div className="project-item">
                                <div className="project-date">2022</div>
                                <div className="project-icon"><img src="/images/idea.png" alt="" /></div>
                                <div className="project-content">
                                    <h3>Tic-Tac-Toe Game</h3>
                                    <p className="project-name">C Console Game</p>
                                    <p style={{ fontSize: 'smaller', marginTop: 0 }}><strong>Description</strong></p>
                                    <p>
                                        A two-player console game built using C, implementing clean game logic and a user-friendly UI.
                                    </p>
                                </div>
                            </div>

                            <div className="project-item">
                                <div className="project-date">2022</div>
                                <div className="project-icon"><img src="/images/idea.png" alt="" /></div>
                                <div className="project-content">
                                    <h3>Hangman Game</h3>
                                    <p className="project-name">Python Console Game</p>
                                    <p style={{ fontSize: 'smaller', marginTop: 0 }}><strong>Description</strong></p>
                                    <p>
                                        A word-guessing game built in Python featuring input validation, hints, and visual indicators for remaining attempts.
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Show More Button */}
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <button onClick={toggleCertificates} id="showMoreBtn" className="showmore-btn">
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </section>
        </>
    );
}
