import React, { useState } from 'react';
import '../css/certificate_section.css';

export default function CertificateSection() {
    const [showMore, setShowMore] = useState(false);

    const toggleCertificates = () => {
        setShowMore(prev => !prev);
    };

    return (
        <>
            {/* Certificate Section */}
            <section className="certificate-section">
                <h2>Education & Certifications</h2>
                <p className="edu-cert-tagline">
                    Knowledge backed by credentials.
                </p>

                <div className="edu-cert-wrapper">

                    {/* Education Block */}
                    <div className="education-block">
                        <div className="edu-icon">
                            <img src="images/grad-logo.png" alt="Education Icon" />
                        </div>
                        <div className="edu-details">
                            <h3>FAST University</h3>
                            <p className="degree">Bachelor of Science in Software Engineering</p>
                            <p className="grad-date">Expected Graduation: 2026</p>
                            <p className="coursework-label">Relevant Coursework:</p>
                            <p className="coursework">
                                Data Structures & Algorithms, Object-Oriented Programming,<br />
                                Database Systems, Web Development
                            </p>
                        </div>
                    </div>

                    {/* Certification Cards */}
                    <div className="certificate-grid" id="certificateGrid">
                        {/* Always Visible */}
                        <a href="certificates/Agile Project Management.pdf" target="_blank" className="certificate-card" rel="noreferrer">
                            <img src="images/Agile_Project_Management.jpeg" alt="Agile_Project_Management" />
                            <p>Agile Project Management</p>
                        </a>
                        <a href="certificates/Django Tutorial.pdf" target="_blank" className="certificate-card" rel="noreferrer">
                            <img src="images/Django_Certificate.png" alt="Django_Certificate" />
                            <p>Django</p>
                        </a>
                        <a href="certificates/Introduction to Docker.pdf" target="_blank" className="certificate-card" rel="noreferrer">
                            <img src="images/docker_certificate.png" alt="Docker" />
                            <p>Docker</p>
                        </a>

                        {/* Hidden Conditionally */}
                        {showMore && (
                            <>
                                <a href="certificates/React.pdf" target="_blank" className="certificate-card" rel="noreferrer">
                                    <img src="images/React_Certificate.png" alt="React" />
                                    <p>React</p>
                                </a>

                                {/* Add more <a> blocks for additional certs here */}
                            </>
                        )}
                    </div>

                    {/* Show More Button */}
                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <button onClick={toggleCertificates} id="showMoreBtn" className="showmore-btn">
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>

            {/* Find me Somewhere else */}
            <section className="find-me">
                <h2>Get In Touch</h2>
                <p>Ready to take on your next big idea. Let’s talk!</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/ashar-naveed-39499a25b/" target="_blank" className="social-card" rel="noreferrer">
                        <img src="images/linkedin.png" alt="LinkedIn" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/Ashar134" target="_blank" className="social-card" rel="noreferrer">
                        <img src="images/github.png" alt="GitHub" />
                        GitHub
                    </a>
                    <a href="https://x.com/AsharNavee72062" target="_blank" className="social-card" rel="noreferrer">
                        <img src="images/twitter.png" alt="Twitter" />
                        Twitter
                    </a>
                   
                    <a href="https://www.figma.com/@asharnaveed" target="_blank" className="social-card" rel="noreferrer">
                        <img src="images/figma.png" alt="Figma" />
                        Figma
                    </a>
                </div>
                <p className="open-to-work">
                    Open to freelance, full-time, and internship roles. Let's create something exceptional together.
                </p>
            </section>
        </>
    );
}
