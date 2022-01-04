import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateHousehold(props) {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [householdId, setHouseholdId] = useState();
  
  // useEffect(() => {
  //   fetch(props.url+"/users", {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       first_name: firstName,
  //       last_name: lastName,
  //       household_id: householdId
  //     })
  //   })
  //   .then(r => r.json())
  //   .then(data => console.log("Posted user: ", data))

  // }, [householdId])

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e);
    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const householdId = e.target[2].value;

    fetch(props.url+"/users", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        household_id: householdId
      })
    })
    .then(r => r.json())
    .then(data => console.log("Posted user: ", data))

    // setFirstName(e.target[0].value);
    // setLastName(e.target[1].value);
    // setHouseholdId(e.target[2].value);
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
          Add Household Member
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
                    <Form onSubmit={(e) => handleFormSubmit(e)}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name="first_name" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="last_name" placeholder="Enter last name" />
                </Form.Group>
              </Row>

              <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Household</Form.Label>
                  <Form.Select name="last_name">
                    <option>Choose household name</option>
                    {props.householdData.map(household => {
                      return (<option key={household.id} value={household.id}>{household.household_name}</option>)
                    })}
                  </Form.Select>
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}

export default CreateHousehold;