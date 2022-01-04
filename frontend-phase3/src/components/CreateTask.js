import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CloseButton from 'react-bootstrap/CloseButton'

function CreateTask(props) {
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
                <Form.Group as={Col} controlId="taskName">
                  <Form.Label>Task</Form.Label>
                  <Form.Control placeholder="What do you have to do?" />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Enter pet's last name (optional)" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control placeholder="Enter pet age" />
                </Form.Group>

                <Form.Group as={Col} controlId="species">
                  <Form.Label>Species</Form.Label>
                  <Form.Control placeholder="Enter pet species" />
                </Form.Group>
              </Row>

              <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Household</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
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