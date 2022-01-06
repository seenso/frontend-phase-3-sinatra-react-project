import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreatePet(props) {
  function handleSubmit(e) {
    e.preventDefault(e);

    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const age = e.target[2].value;
    const species = e.target[3].value;

    fetch("http://localhost:9292/pets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        age: age,
        species: species,
        household_id: props.currentHouseholdID,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log("Posted pet: ", data))

      .then((r) => {
        fetch(
          `http://localhost:9292/households/${props.currentHouseholdID}/pets`
        )
          .then((res) => res.json())
          .then((pets) => {
            props.setCurrentHouseholdPets(pets);
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
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control required placeholder="Enter pet's first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Enter pet's last name (optional)" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control required placeholder="Enter pet age" />
            </Form.Group>

            <Form.Group as={Col} controlId="species">
              <Form.Label>Species</Form.Label>
              <Form.Control required placeholder="Enter pet species" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Add a New Pet
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreatePet;
