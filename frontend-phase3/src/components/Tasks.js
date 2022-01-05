import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Tasks({
  showCreateTask,
  setShowCreateTask,
  taskData,
  currentHouseholdTasks,
}) {
  function handleDeleteTask(e) {
    console.log(e.target.attributes[0].value);
    const taskToDelete = e.target.attributes[0].value;

    fetch(`http://localhost:9292/tasks/${taskToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {currentHouseholdTasks
              ? `The Tasks of ${currentHouseholdTasks.household_name}`
              : "Tasks"}
          </h1>
        </Col>
        <Col>
          <Button
            onClick={() => setShowCreateTask(true)}
            className="create-btn"
          >
            Create
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card id="tasks">
            <Card.Body>
              <ListGroup variant="flush">
                {currentHouseholdTasks
                  ? currentHouseholdTasks.tasks.map((t) => {
                      return (
                        <ListGroup.Item
                          className="d-flex justify-content-between align-items-start"
                          id="tasks"
                        >
                          {t.task_name}
                          {" | "}
                          {t.pet.first_name}
                          {" (pet) | "}
                          {t.user.first_name}
                          {" (user) | "}
                          <button
                            data-taskid={t.id}
                            onClick={(e) => handleDeleteTask(e)}
                          >
                            Done
                          </button>
                        </ListGroup.Item>
                      );
                    })
                  : "Please select your user from the dropdown on the top right."}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Tasks;
