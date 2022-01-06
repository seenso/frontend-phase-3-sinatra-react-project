import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
// import { format } from "date-fns";

function Tasks({
  setShowCreateTask,
  currentHouseholdTasks,
  setCurrentHouseholdTasks,
  taskToDelete, 
  setTaskToDelete,
  currentUser,
  currentHouseholdName
}) {

  // console.log("currentHouseholdTasks", currentHouseholdTasks)
  
  function handleDeleteTask(e) {
    // console.log("DELETE THIS", e.target.attributes[1].value)

    fetch(`http://localhost:9292/tasks/${parseInt(e.target.attributes[1].value)}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((r) => {
        console.log(r)
          fetch(`http://localhost:9292/households/${currentUser.household_id}/tasks`)
          .then((r) => r.json())
          .then((tasks) => {
            console.log("TASKS FROM TASKS MOD", tasks)
          // setCurrentHouseholdTasks(tasks);
      });
      })
      .catch(msg => console.log("TASKTODELETE .catch msg", msg))
  }

  function handleDate(date) {
    const year = parseInt(date.slice(0, 4));
    const month = parseInt(date.slice(5, 7));
    const day = parseInt(date.slice(8, 10));
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  function handleTime(date) {
    const hour = parseInt(date.slice(12, 13));
    const minute = parseInt(date.slice(15, 16));
    const amPm = hour > 12 ? "PM" : "AM"

    const formattedTime = `${hour}:${minute} ${amPm}`;
    return formattedTime;
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {currentHouseholdTasks
              ? `The Tasks of ${currentHouseholdName}`
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
        {/* <Col>
          {currentHouseholdTasks
            ? currentHouseholdTasks.tasks.map((t) => {
                return (
                  <Card key={t.id}>
                    <Card.Body>
                      <Card.Title>{t.task_name}</Card.Title>
                        {t.task_is_recurring.toString() === "true" ? 
                        <Card.Text>This is a recurring task! Recurs every {t.task_frequency} days.</Card.Text> : null}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Due Date: {handleDate(t.task_due_date)}</ListGroupItem>
                      <ListGroupItem>Date: {
                        handleDate(t.task_end_date) ? handleDate(t.task_start_date)+" - "+ handleDate(t.task_end_date) : handleDate(t.task_start_date)
                        }
                      </ListGroupItem>
                      <ListGroupItem>Time: {
                        handleTime(t.task_end_date) ? handleTime(t.task_start_date)+" - "+ handleTime(t.task_end_date) : handleTime(t.task_start_date)
                        }
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link onClick={e => handleDeleteTask(e)} data-task-id={t.id}>Mark Complete</Card.Link>
                    </Card.Body>
                  </Card>
                );
              })
            : "Please select your user from the dropdown on the top right."}
        </Col> */}
      </Row>
    </Container>
  );
}

export default Tasks;
