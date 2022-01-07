import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

function Tasks({
  setShowCreateTask,
  currentHouseholdTasks,
  setCurrentHouseholdTasks,
  currentUser,
  currentHouseholdName,
  setConfetti
}) {
  function handleDeleteTask(e) {
    
    setConfetti(true)
    setTimeout(() => {setConfetti(false)}, 5000);

    fetch(
      `http://localhost:9292/tasks/${parseInt(e.target.attributes[0].value)}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((r) => {
        fetch(
          `http://localhost:9292/households/${currentUser.household_id}/tasks`
        )
          .then((r) => r.json())
          .then((tasks) => {
            setCurrentHouseholdTasks(tasks);
          });
      })
      .catch((msg) => console.log("TASKTODELETE .catch msg", msg));
  }

  function handleDate(date) {
    if (date === null) {
      return date
    } else {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
    }
  }

  // function handleTime(date) {
  //   const hour = parseInt(date.slice(12, 13));
  //   const minute = parseInt(date.slice(15, 16));
  //   const amPm = hour > 12 ? "PM" : "AM";
  //   const formattedTime = `${hour}:${minute} ${amPm}`;
  //   return formattedTime;
  // }

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {currentHouseholdTasks ? `${currentHouseholdName} Tasks` : "Tasks"}
          </h1>
        </Col>
        <Col>
          <Button
            onClick={() => setShowCreateTask(true)}
            className="create-btn"
            style={{ backgroundColor: "#C71C81", borderColor: "#C71C81" }}
          >
            Create Task
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {currentHouseholdTasks
            ? currentHouseholdTasks.map((t) => {
                console.log("T is", t);
                return (
                  <Card key={t.id}>
                    <Card.Body>
                      <Button
                        onClick={(e) => handleDeleteTask(e)}
                        data-task-id={t.id}
                      >
                        ✓
                      </Button>
                      <Card.Title>
                        {t.task_name}
                      </Card.Title>
                      <Card.Text>{t.user.first_name}</Card.Text>
                    </Card.Body>
                    

                    {t.task_is_recurring.toString() === "true" ? (
                      <ListGroupItem className="list-group-flush">
                          Do it every {t.task_frequency} days.
                          </ListGroupItem>
                    ) : <ListGroupItem>
                    Due Date: {handleDate(t.task_due_date)}
                  </ListGroupItem>}
                  </Card>
                );
              })
            : "Please select your user from the dropdown on the top right."}
        </Col>
      </Row>
    </Container>
  );
}

export default Tasks;
