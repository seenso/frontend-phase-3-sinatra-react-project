import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function CreateTask(props) {
  const [recurring, setRecurring] = useState(false)
  
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
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Pet</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Which pet is this for?</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="taskName">
              <Form.Label>Task</Form.Label>
              <Form.Control placeholder="What do you have to do?" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recurring?" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Frequency</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option value={1}>Daily</option>
                <option value={7}>Weekly</option>
                <option value={30}>Monthly</option>
                <option value={365}>Annually</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="taskName">
              <Form.Label>Location</Form.Label>
              <Form.Control placeholder="What do you have to do?" />
            </Form.Group>
          </Row>
          
          <Row className="mb-3">
            <Form.Group as={Col} controlId="age">
              <Form.Label>Due Date</Form.Label>
              <Form.Control placeholder="Enter due date" />
            </Form.Group>

            <Form.Group as={Col} controlId="age">
              <Form.Label>Start Date</Form.Label>
              <Form.Control placeholder="Enter due date" />
            </Form.Group>

            <Form.Group as={Col} controlId="species">
              <Form.Label>End Date</Form.Label>
              <Form.Control placeholder="Enter end date" />
            </Form.Group>
          </Row>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateTask;
