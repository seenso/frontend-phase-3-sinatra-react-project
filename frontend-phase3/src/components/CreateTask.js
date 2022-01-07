import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreateTask(props) {
  const [recurring, setRecurring] = useState(false);

  function handleSubmit(e) {
    console.log("CREATETASK handlesubmit e", e);
    e.preventDefault(e);
    setRecurring(false);

    const pet = e.target[0].value;
    const assignedUser = e.target[1].value;
    const task = e.target[2].value;
    const due_date = e.target[4].value;

    let frequency;
    let start_date;
    let end_date;

    if (e.target[7]) {
      frequency = parseInt(e.target[6].value);
    } else {
      frequency = 0;
      start_date = null;
      end_date = null;
    }

    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        household_id: props.currentHouseholdID,
        user_id: assignedUser,
        pet_id: pet,
        task_name: task,
        task_due_date: due_date,
        task_is_recurring: recurring,
        task_location: null,
        task_frequency: frequency,
        task_start_date: start_date,
        task_end_date: end_date,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log("Posted task: ", data))

      .then((r) => {
        fetch(
          `http://localhost:9292/households/${props.currentHouseholdID}/tasks`
        )
          .then((res) => res.json())
          .then((tasks) => {
            props.setCurrentHouseholdTasks(tasks);
          });
      });
    props.onHide(false);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="">
              <Form.Label>Which pet is this for?</Form.Label>
              <Form.Select required defaultValue="Choose...">
                {props.currentHouseholdPets ? (
                  props.currentHouseholdPets.map((p) => {
                    return (
                      <option key={p.id} value={p.id}>
                        {p.first_name}
                      </option>
                    );
                  })
                ) : (
                  <option>NULL</option>
                )}
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="assignUser">
              <Form.Label>Who is doing it?</Form.Label>
              <Form.Select defaultValue="Choose..." required>
                {props.currentHouseholdUsers ? (
                  props.currentHouseholdUsers.map((u) => {
                    return (
                      <option key={u.id} value={u.id}>
                        {u.first_name} {u.last_name}
                      </option>
                    );
                  })
                ) : (
                  <option>NULL</option>
                )}
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="taskName">
              <Form.Label>Task</Form.Label>
              <Form.Control required placeholder="What do you have to do?" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="recurring">
              <Form.Label>Recurring?</Form.Label>
              <Form.Check
                type="checkbox"
                onChange={() => setRecurring(!recurring)}
              />
            </Form.Group>

            {recurring ? (
              <Row className="mb-3">
                <Form.Group as={Col} required controlId="frequency">
                  <Form.Label>Frequency</Form.Label>
                  <Form.Select required defaultValue="Choose...">
                    <option value={"daily"}>Daily</option>
                    <option value={"weekly"}>Weekly</option>
                    <option value={"monthly"}>Monthly</option>
                    <option value={"annually"}>Annually</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            ) : (
              <Row className="mb-3">
                <Form.Group as={Col} required controlId="dueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    required
                    placeholder="Enter due date"
                    type="date"
                  />
                </Form.Group>
              </Row>
            )}
          </Row>

          {recurring ? (
            <Row>
              <Form.Group as={Col} required controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  id="theDate"
                  placeholder="Enter due date"
                />
              </Form.Group>

              <Form.Group as={Col} required controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="Enter end date" />
              </Form.Group>
            </Row>
          ) : null}

          <Button variant="primary" type="submit">
            Add a New Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateTask;
