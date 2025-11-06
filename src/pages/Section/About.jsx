import React, { useState } from 'react';
import { Container, Row, Col, Card, Spinner, Badge, Alert, Table, ButtonGroup, Button } from "react-bootstrap";
import { sendToDeepSeekApi } from './apiService';
import './about.css';

function About(props) {
    const [story, setStory] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeView, setActiveView] = useState('story'); // 'story' или 'table'

    const generateStory = async () => {
        setIsLoading(true);
        setError('');
        setStory('');

        try {
            const result = await sendToDeepSeekApi('en',
                `Create a compelling personal story and professional journey based on this information. 
                Write it as a narrative story in first person, with emotion and personality. 
                Make it engaging and human, not like a formal CV.

                My journey includes:

                CURRENT CHAPTER: Working at Ängelholms kommun as USK since December 2020 - that's 5 years of growing and learning!

                PREVIOUS ADVENTURES:
                - Landskrona kommun (part-time for 2 years 10 months)
                - Business Analyst at OTP Bank in Russia (1 year 8 months)
                - Insurance Specialist at Ингосстрах (1 year 6 months)
                - Controller at Allianz (6 months)
                - Senior Financial Controller at Insurance Supervision Authority (1 year 2 months)

                LEARNING JOURNEY:
                - Currently studying Java Development at Grit Academy (2024-2026)
                - Java Developer program at Teknikhögskolan (2022)
                - Bachelor in Information Technology at Bauman Moscow State Technical University
                - Master in Economy at Financial University under Russian Federation

                MY TOOLKIT:
                - Programming: Java, Kotlin, JavaScript, React.js, Spring Boot
                - Development: Web, Frontend, Android, AI
                - Languages: Swedish, English, Russian
                - Background: Finance, Insurance, Economics

                Please write this as a warm, engaging personal story that shows my journey from finance to tech. 
                Include my passion for learning and growth. Make it sound like I'm telling my own story to a friend.`
            );
            setStory(result);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    // Данные для таблицы
    const cvData = {
        experience: [
            {
                period: "Dec 2020 - Present",
                duration: "5 years",
                position: "USK",
                company: "Ängelholms kommun",
                location: "Ängelholm, Sweden",
                description: "Current role with continuous learning and growth"
            },
            {
                period: "Mar 2018 - Dec 2020",
                duration: "2 years 10 months",
                position: "Part-time Specialist",
                company: "Landskrona kommun",
                location: "Landskrona, Sweden",
                description: "Part-time professional work"
            },
            {
                period: "Dec 2012 - Jul 2014",
                duration: "1 year 8 months",
                position: "Business Analyst",
                company: "OTP Bank",
                location: "Russia",
                description: "Financial analysis and business process optimization"
            },
            {
                period: "Jun 2011 - Nov 2012",
                duration: "1 year 6 months",
                position: "Insurance Specialist",
                company: "Ингосстрах",
                location: "Russia",
                description: "Insurance services and client management"
            },
            {
                period: "Jul 2009 - Aug 2010",
                duration: "1 year 2 months",
                position: "Senior Financial Controller",
                company: "Insurance Supervision Authority",
                location: "Russian Federation",
                description: "Financial control and supervision"
            }
        ],
        education: [
            {
                period: "Aug 2024 - May 2026",
                institution: "Grit Academy",
                degree: "Java Developer Program",
                field: "Software Development",
                status: "In Progress"
            },
            {
                period: "Aug 2022",
                institution: "Teknikhögskolan",
                degree: "Java Developer Certificate",
                field: "Software Development",
                status: "Completed"
            },
            {
                period: "Feb 2010 - Jun 2013",
                institution: "Bauman Moscow State Technical University",
                degree: "Bachelor's Degree",
                field: "Information Technology",
                status: "Completed"
            },
            {
                period: "Sep 2004 - Jun 2009",
                institution: "Financial University under the Government of the Russian Federation",
                degree: "Master's Degree",
                field: "Economy",
                status: "Completed"
            }
        ],
        skills: {
            programming: ["Java", "Kotlin", "JavaScript", "React.js", "Spring Boot", "Spring Framework", "CSS"],
            tools: ["Kali Linux", "Artificial Intelligence", "Android Development", "Web Development", "Frontend Development"],
            languages: [
                { language: "Swedish", level: "Professional" },
                { language: "English", level: "Professional" },
                { language: "Russian", level: "Native" }
            ],
            domains: ["Finance", "Insurance", "Economics", "Business Analysis"]
        }
    };

    // Функция для форматирования рассказа
    const formatStory = (content) => {
        if (!content) return null;

        return content.split('\n\n').map((paragraph, index) => {
            const trimmedPara = paragraph.trim();
            if (!trimmedPara) return null;

            if (index === 0) {
                return (
                    <div key={index} className="story-first-paragraph">
                        {trimmedPara}
                    </div>
                );
            }

            if (trimmedPara.match(/^[A-Z][A-Z\s]+:/) || trimmedPara.match(/^[A-Z][a-zA-Z\s]+:/)) {
                const [title, ...textParts] = trimmedPara.split(':');
                const text = textParts.join(':');
                return (
                    <div key={index} className="story-section">
                        <h3 className="story-section-title">{title.trim()}:</h3>
                        <p className="story-section-text">{text.trim()}</p>
                    </div>
                );
            }

            if (trimmedPara.includes('"') || trimmedPara.includes('💭') || trimmedPara.includes('✨')) {
                return (
                    <div key={index} className="story-highlight">
                        <div className="highlight-content">
                            {trimmedPara}
                        </div>
                    </div>
                );
            }

            return (
                <p key={index} className="story-paragraph">
                    {trimmedPara}
                </p>
            );
        });
    };

    return (
        <div className="story-page cosmic-bg author-title ">
            {/* Герой секция */}
            <Container fluid className="story-hero-section">
                <Row className="justify-content-center">
                    <Col xl={8} lg={10}>
                        <div className="story-hero-content text-center">
                            <Badge bg="light" text="dark" className="story-badge">
                                My Professional Journey
                            </Badge>
                            <h1>
                                Liliya Sayfutdinova
                            </h1>
                            <p className="story-hero-subtitle">
                                Full Stack Developer | Business Analyst
                            </p>

                            {/* Переключатель представлений */}
                            <ButtonGroup className="view-switcher mb-4">
                                <Button
                                    variant={activeView === 'story' ? 'primary' : 'outline-primary'}
                                    onClick={() => setActiveView('story')}
                                    className={`view-btn ${activeView === 'story' ? 'btn-box-active' : 'btn-box'}`}
                                >
                                    Story Version
                                </Button>
                                <Button
                                    variant={activeView === 'table' ? 'primary' : 'outline-primary'}
                                    onClick={() => setActiveView('table')}
                                    className={`view-btn ${activeView === 'table' ? 'btn-box-active' : 'btn-box'}`}
                                >
                                    CV Version
                                </Button>
                            </ButtonGroup>

                            <button
                                className="story-generate-btn"
                                onClick={generateStory}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                            className="me-2"
                                        />
                                        {activeView === 'story' ? 'Writing My Story...' : 'Generating Content...'}
                                    </>
                                ) : (
                                    <>
                                        <span className="btn-icon">
                                            {activeView === 'story' ? '📖' : '📊'}
                                        </span>
                                        {activeView === 'story' ? 'Generate with AI' : 'Show CV Table'}
                                    </>
                                )}
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Секция с контентом */}
            {activeView === 'story' && story && (
                <Container fluid className="story-content-section">
                    <Row className="justify-content-center">
                        <Col xl={10} lg={12}>
                            <Card className="story-card">
                                <Card.Header className="story-card-header">
                                    <div className="story-header-content">
                                        <div className="author-info">
                                            <div className="author-avatar">LS</div>
                                            <div className="author-details">
                                                <h4 className="author-name">Liliya Sayfutdinova</h4>
                                                <p className="author-title">From Finance to Code: My Transformation Story</p>
                                            </div>
                                        </div>
                                        <Badge bg="success" className="story-date">
                                            Personal Narrative
                                        </Badge>
                                    </div>
                                </Card.Header>
                                <Card.Body className="story-card-body">
                                    <div className="story-content">
                                        {formatStory(story)}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )}

            {/* Секция с таблицей CV */}
            {activeView === 'table' && (
                <Container fluid className="table-content-section">
                    <Row className="justify-content-center">
                        <Col xl={11} lg={12}>
                            <Card className="cv-table-card">
                                <Card.Header className="cv-table-header">
                                    <h2 className="cv-table-title">
                                        <span className="table-icon">📊</span>
                                        Professional CV - Table View
                                    </h2>
                                </Card.Header>
                                <Card.Body className="cv-table-body">

                                    {/* Опыт работы */}
                                    <div className="table-section">
                                        <h3 className="table-section-title">
                                            <Badge bg="primary" className="section-badge">💼</Badge>
                                            Work Experience
                                        </h3>
                                        <Table responsive striped hover className="cv-table">
                                            <thead className="table-header">
                                            <tr>
                                                <th>Period</th>
                                                <th>Duration</th>
                                                <th>Position</th>
                                                <th>Company</th>
                                                <th>Location</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {cvData.experience.map((exp, index) => (
                                                <tr key={index} className="table-row">
                                                    <td className="period-cell">
                                                        <strong>{exp.period}</strong>
                                                    </td>
                                                    <td>
                                                        <Badge bg="secondary" className="duration-badge">
                                                            {exp.duration}
                                                        </Badge>
                                                    </td>
                                                    <td className="position-cell">
                                                        <strong>{exp.position}</strong>
                                                    </td>
                                                    <td>{exp.company}</td>
                                                    <td>
                                                        <span className="location-text">{exp.location}</span>
                                                    </td>
                                                    <td className="description-cell">
                                                        {exp.description}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </Table>
                                    </div>

                                    {/* Образование */}
                                    <div className="table-section">
                                        <h3 className="table-section-title">
                                            <Badge bg="success" className="section-badge">🎓</Badge>
                                            Education
                                        </h3>
                                        <Table responsive striped hover className="cv-table">
                                            <thead className="table-header">
                                            <tr>
                                                <th>Period</th>
                                                <th>Institution</th>
                                                <th>Degree</th>
                                                <th>Field of Study</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {cvData.education.map((edu, index) => (
                                                <tr key={index} className="table-row">
                                                    <td className="period-cell">
                                                        <strong>{edu.period}</strong>
                                                    </td>
                                                    <td>
                                                        <strong>{edu.institution}</strong>
                                                    </td>
                                                    <td>{edu.degree}</td>
                                                    <td>{edu.field}</td>
                                                    <td>
                                                        <Badge
                                                            bg={edu.status === 'In Progress' ? 'warning' : 'success'}
                                                            className="status-badge"
                                                        >
                                                            {edu.status}
                                                        </Badge>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </Table>
                                    </div>

                                    {/* Навыки */}
                                    <div className="skills-section">
                                        <h3 className="table-section-title">
                                            <Badge bg="info" className="section-badge">🛠️</Badge>
                                            Skills & Competencies
                                        </h3>
                                        <Row>
                                            <Col md={6} className="skill-category">
                                                <h5 className="skill-category-title">Programming & Technologies</h5>
                                                <div className="skills-list">
                                                    {cvData.skills.programming.map((skill, index) => (
                                                        <Badge key={index} bg="primary" className="skill-badge">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </Col>
                                            <Col md={6} className="skill-category">
                                                <h5 className="skill-category-title">Tools & Platforms</h5>
                                                <div className="skills-list">
                                                    {cvData.skills.tools.map((tool, index) => (
                                                        <Badge key={index} bg="secondary" className="skill-badge">
                                                            {tool}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={6} className="skill-category">
                                                <h5 className="skill-category-title">Languages</h5>
                                                <Table responsive size="sm" className="languages-table">
                                                    <tbody>
                                                    {cvData.skills.languages.map((lang, index) => (
                                                        <tr key={index}>
                                                            <td><strong>{lang.language}</strong></td>
                                                            <td>
                                                                <Badge bg="info" className="level-badge">
                                                                    {lang.level}
                                                                </Badge>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col md={6} className="skill-category">
                                                <h5 className="skill-category-title">Domain Knowledge</h5>
                                                <div className="skills-list">
                                                    {cvData.skills.domains.map((domain, index) => (
                                                        <Badge key={index} bg="success" className="skill-badge">
                                                            {domain}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </Card.Body>
                                <Card.Footer className="cv-table-footer">
                                    <div className="download-section">
                                        <small className="text-muted">
                                            Last updated: {new Date().toLocaleDateString()} |
                                            Total Experience: 12+ years |
                                            <Button variant="outline-primary" size="sm" className="ms-2">
                                                📥 Export as PDF
                                            </Button>
                                        </small>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )}

            {/* Состояния загрузки и ошибки */}
            {isLoading && (
                <Container fluid className="story-loading-section">
                    <Row className="justify-content-center">
                        <Col xl={8} lg={10}>
                            <div className="story-loading-content text-center">
                                <div className="writing-animation">
                                    <span className="writing-dot">
                                        {activeView === 'story' ? '✍️' : '📊'}
                                    </span>
                                </div>
                                <h3 className="story-loading-text">
                                    {activeView === 'story' ? 'Crafting your unique story...' : 'Preparing CV data...'}
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}

            {error && (
                <Container fluid className="story-error-section">
                    <Row className="justify-content-center">
                        <Col xl={8} lg={10}>
                            <Alert variant="danger" className="story-error-alert">
                                <Alert.Heading>
                                    <span className="error-icon">⚠️</span>
                                    Generation Error
                                </Alert.Heading>
                                <p>{error}</p>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default About;