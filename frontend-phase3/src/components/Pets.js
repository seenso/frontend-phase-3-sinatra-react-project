import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Pets({
  setShowCreatePet,
  currentHouseholdPets,
  currentHousehold
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {currentHouseholdPets
              ? `The Pets of ${currentHousehold}`
              : "Pets"}
          </h1>
        </Col>
        <Col>
          <Button onClick={() => setShowCreatePet(true)} className="create-btn">
            Create
          </Button>
        </Col>
      </Row>
      <Row>
        <Card id="pets">
          <Card.Body>
            <ListGroup variant="flush">
              {currentHouseholdPets
                ? currentHouseholdPets.map((p) => {
                    return (
                      <ListGroup.Item id="pets">{p.first_name}</ListGroup.Item>
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
