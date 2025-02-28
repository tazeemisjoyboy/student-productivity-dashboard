import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faBook, faClock, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [taskCount, setTaskCount] = useState(5);
  const [studyProgress, setStudyProgress] = useState(60);
  const [pomodoroSessions, setPomodoroSessions] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaskCount(prevCount => prevCount + 1);
      setStudyProgress(prevProgress => (prevProgress < 100 ? prevProgress + 5 : 100));
      setPomodoroSessions(prevSessions => prevSessions + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Student Productivity Dashboard</h1>

      <Row>
        <Col md={4} sm={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faTasks} /> Task Manager</Card.Title>
              <Card.Text>Manage your tasks efficiently. Tasks remaining: {taskCount}</Card.Text>
              <Button as={Link} to="/tasks" variant="primary">View Tasks</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faBook} /> Study Planner</Card.Title>
              <Card.Text>Track your study progress:</Card.Text>
              <ProgressBar now={studyProgress} label={`${studyProgress}%`} />
              <Button as={Link} to="/study" variant="primary" className="mt-3">View Planner</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faClock} /> Pomodoro Timer</Card.Title>
              <Card.Text>Sessions completed: {pomodoroSessions}</Card.Text>
              <Button as={Link} to="/pomodoro" variant="primary">Start Timer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faStickyNote} /> Notes</Card.Title>
          <Card.Text>Take notes and stay organized.</Card.Text>
          <Button as={Link} to="/notes" variant="primary">View Notes</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
