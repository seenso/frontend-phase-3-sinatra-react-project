import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tasks({ showCreateTask, setShowCreateTask, taskData }) {
  return (
    <Container>
        <Row>
          <Col>
            <h1>Tasks</h1>
          </Col>
          <Col>
          <Button onClick={() => setShowCreateTask(true)} className="create-btn">
            Create
          </Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <ul>
            {taskData.map(task => {
                      return (<li key={task.id} value={task.id}>{task.task_name}</li>)
                    })}
          </ul>
          </Col>
        </Row>
      </Container>
  );
};

export default Tasks;