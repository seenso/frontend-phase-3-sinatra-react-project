import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreateTask(props) {
  const [recurring, setRecurring] = useState();

  //console.log("CREATETASK PROPS", props)

  function handleSubmit(e) {
    // console.log("CREATETASK handlesubmit e", e)
    e.preventDefault(e);

    const pet = e.target[0].value; // string type
    const assignedUser = e.target[1].value; // string type
    const task = e.target[2].value;
    const location = e.target[4].value;
    const due_date = e.target[5].value;
    const frequency = e.target[6].value;
    const start_date = e.target[7].value;
    const end_date = e.target[8].value;
    // const currentHouseID = e.target[9].value; // string type

    // console.log("CHECK TYPES IN CREATETASK", "houseid", typeof currentHouseID, "petid", typeof pet, "userid", typeof assignedUser)
    console.log("CURRENTHOUSEID", props.currentHouseholdID)

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
        task_frequency: frequency,
        task_start_date: start_date,
        task_end_date: end_date,
        task_location: location
        
      })
    })
    .then((r) => r.json())
    .then((data) => console.log("Posted task: ", data))

    .then((r) => {
      fetch(`http://localhost:9292/households/${props.currentHouseholdID}/tasks`)
      .then((res) => res.json())
      .then((tasks) => {
        // console.log("new list of tasks", tasks)
        props.setCurrentHouseholdTasks(tasks);
      })
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="">
              <Form.Label>Pet</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Which pet is this for?</option>
                {props.currentHouseholdPets ? (
                  props.currentHouseholdPets
                    .map((p) => {
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
              <Form.Label>Assign Task</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Which Person is this task for?</option>
                {props.currentHouseholdUsers ? (
                  props.currentHouseholdUsers
                    .map((u) => {
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
              <Form.Control placeholder="What do you have to do?" />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="recurring">
            <Form.Label>Recurring?</Form.Label>
            <Form.Check
              type="checkbox"
              onChange={() => setRecurring(!recurring)}
            />
          </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group as={Col} controlId="location" >
              <Form.Label>Location</Form.Label>
              <Form.Control placeholder="Where's this happening?" />
            </Form.Group>

    
            <Form.Group as={Col} required controlId="dueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control placeholder="Enter due date" />
                </Form.Group>
                  </Row>

          

          {recurring ? (
            <>
              <Row className="mb-3">
                <Form.Group as={Col} required controlId="frequency">
                  <Form.Label>Frequency</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option value={1}>Daily</option>
                    <option value={7}>Weekly</option>
                    <option value={30}>Monthly</option>
                    <option value={365}>Annually</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-2">
                

                <Form.Group as={Col} required controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control placeholder="Enter due date" />
                </Form.Group>

                <Form.Group as={Col} required controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control placeholder="Enter end date" />
                </Form.Group>

            {/* invisible shit */}
                {/* <Form.Group as={Col} controlId="householdId">
                  <Form.Label>Household ID</Form.Label>
                  <Form.Control value={props} />
                </Form.Group> */}
              </Row>
            </>
          ) : null}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateTask;
