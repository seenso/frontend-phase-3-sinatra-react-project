import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";

function CreateHousehold(props) {
  
  function handleFormSubmit(e) {
    e.preventDefault();
    const firstname = e.target[0].value;
    const lastname = e.target[1].value;

    fetch(props.url + "/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        household_id: props.currentHouseholdID
      })
    })
    .then((r) => r.json())
    .then((data) => console.log("Posted user: ", data))
    .then((r) => {
        fetch(`http://localhost:9292/households/${props.currentHouseholdID}/users`)
        .then((res) => res.json())
        .then((users) => {
          props.setCurrentHouseholdUsers(users);
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
      <Modal.Header>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Household Member
              </Modal.Title>
            </Col>
            <Col xs={6} md={4}>
              <CloseButton
                onClick={props.onHide}
                className="d-flex justify-content-between align-items-start"
              />
            </Col>
          </Row>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                name="first_name"
                placeholder="Enter first name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name="last_name"
                placeholder="Enter last name"
              />
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

export default CreateHousehold;
