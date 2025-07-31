import React from 'react';
import '../css/skill.css';

export default function Skill() {
    return (
        <>
            {/* SKILL-SET SECTION */}
            <section className="skill-set">

                {/* Skills Block */}
                <div className="skill-block">
                    <div className="block-label block-label-skill">Technical Expertise</div>
                    <div className="block-content">
                        <div className="skill-logo"><img src="images/html.png" alt="HTML" title="HTML" /></div>
                        <div className="skill-logo"><img src="images/css.png" alt="CSS" title="CSS" /></div>
                        <div className="skill-logo"><img src="images/javascript.png" alt="JavaScript" title="JavaScript" /></div>
                        <div className="skill-logo"><img src="images/bootstrap.png" alt="bootstrap" title="bootstrap" /></div>
                        <div className="skill-logo"><img src="images/tailwindcss.png" alt="Tailwind CSS" title="Tailwind CSS" /></div>
                        <div className="skill-logo"><img src="images/react.png" alt="React" title="React" /></div>
                        <div className="skill-logo"><img src="images/c.png" alt="C" title="C" /></div>
                        <div className="skill-logo"><img src="images/c++.png" alt="c++" title="c++" /></div>
                        <div className="skill-logo"><img src="images/python.png" alt="Python" title="Python" /></div>
                        <div className="skill-logo"><img src="images/django.png" alt="Django" title="Django" /></div>
                        <div className="skill-logo"><img src="images/flask.png" alt="flask" title="flask" /></div>
                        <div className="skill-logo"><img src="images/fastapi.png" alt="fastapi" title="fastapi" /></div>
                        <div className="skill-logo"><img src="images/mysql.png" alt="mysql" title="mysql" /></div>
                        <div className="skill-logo"><img src="images/php.png" alt="PHP" title="PHP" /></div>
                        <div className="skill-logo"><img src="images/mongodb.png" alt="mongodb" title="mongodb" /></div>
                        <div className="skill-logo"><img src="images/firebase-2.png" alt="Firebase" title="Firebase" /></div>
                        <div className="skill-logo"><img src="images/oracle.png" alt="oracle" title="oracle" /></div>
                        <div className="skill-logo"><img src="images/docker.png" alt="docker" title="docker" /></div>
                        <div className="skill-logo"><img src="images/linux.png" alt="linux" title="linux" /></div>
                        <div className="skill-logo"><img src="images/github.png" alt="github" title="github" /></div>
                        <div className="skill-logo"><img src="images/figma.png" alt="figma" title="figma" /></div>
                        <div className="skill-logo"><img src="images/jira.png" alt="jira" title="jira" /></div>
                        <div className="skill-logo"><img src="images/lucidchart.png" alt="lucidchart" title="lucidchart" /></div>
                    </div>
                </div>

                {/* Divider */}
                <div className="horizontal-divider"></div>

                {/* Soft Skills Block */}
                <div className="soft-skill-block">
                    <div className="block-label block-label-soft-skill">Soft Skills</div>
                    <div className="soft-skills-wrapper">
                        <p>Communication</p>
                        <p>Problem Solving</p>
                        <p>Team Collaboration</p>
                        <p>Adaptability</p>
                        <p>Time Management</p>
                        <p>Critical Thinking</p>
                        <p>Creativity</p>
                        <p>Self-Motivation</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="horizontal-divider"></div>

                {/* Languages Block */}
                <div className="language-block" style={{ padding: 0, marginTop: '50px' }}>
                    <div className="block-label-language">Languages</div>
                    <div className="block-content-language">
                        <p>English – Professional</p>
                        <p>German – Beginner</p>
                        <p>Punjabi – Mid</p>
                        <p>Urdu – Native</p>

                    </div>
                </div>

                {/* Divider */}
                <div className="horizontal-divider"></div>
            </section>
        </>
    );
}
