import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";

function Pets({
  setShowCreatePet,
  currentHouseholdPets,
  currentHouseholdName,
  toggleShowAddNewHouseholdPet,
  showAddNewHouseholdPet,
}) {
  return (
    <Container>
      <Container>
          <Row className="d-flex justify-content-center">
            <Col></Col>
            <Col className="d-flex justify-content-center">
              <Row>
                <Toast
                  show={showAddNewHouseholdPet}
                  onClose={toggleShowAddNewHouseholdPet}
                  delay={3000} autohide
                >
                  <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                  </Toast.Header>
                  <Toast.Body>
                    Woohoo, you added a new pet to your household! 🎉
                  </Toast.Body>
                </Toast>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      <Row>
        <Col sm={10}>
          <h1>
            {currentHouseholdPets
              ? `The Pets of ${currentHouseholdName}`
              : "Pets"}
          </h1>
        </Col>
        <Col>
          <Button
            onClick={() => setShowCreatePet(true)}
            className="create-btn"
            style={{ backgroundColor: "#C71C81", borderColor: "#C71C81" }}
            className="align-middle"
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Card id="pets">
          <Card.Body>
            <ListGroup variant="flush" my-auto>
              {currentHouseholdPets
                ? currentHouseholdPets.map((p) => {
                    return (
                      <ListGroup.Item
                        id="pet-item"
                        key={p.id}
                        className="d-flex justify-content-between align-items-start"
                      >
                        <h4>{p.first_name}</h4>
                        <p id="pet-description">
                          {p.species.charAt(0).toUpperCase() +
                            p.species.slice(1)}
                          , {p.age}
                        </p>
                      </ListGroup.Item>
                    );
                  })
                : "Please select your user from the dropdown on the top right."}
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Pets;
