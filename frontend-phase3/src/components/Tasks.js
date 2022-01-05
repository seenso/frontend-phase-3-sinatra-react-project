import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { format } from "date-fns";

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

  function handleDate(date) {
    console.log(date);
    const year = parseInt(date.slice(0, 4));
    const month = parseInt(date.slice(5, 7));
    const day = parseInt(date.slice(8, 10));
    const hour = parseInt(date.slice(12, 13));
    const minute = parseInt(date.slice(15, 16));
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
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
          {currentHouseholdTasks
            ? currentHouseholdTasks.tasks.map((t) => {
                return (
                  <Card>
                    <Card.Img
                      variant="top"
                      src="holder.js/100px180?text=Image cap"
                    />
                    <Card.Body>
                      <Card.Title>{t.task_name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Cras justo odio</ListGroupItem>
                      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                );
              })
            : "Please select your user from the dropdown on the top right."}

          {/* <Card id="tasks">
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
                          {handleDate(t.task_due_date)}
                          {" (due_date) | "}
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
          </Card> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Tasks;
