import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Pets({ showCreatePet, setShowCreatePet, petData }) {

  return (
    <Container>
        <Row>
          <Col>
            <h1>Pets</h1>
          </Col>
          <Col>
          <Button onClick={() => setShowCreatePet(true)} className="create-btn">
            Create
          </Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <ul>
            {petData.map(pet => {
                      return (<li key={pet.id} value={pet.id}>{pet.first_name}</li>)
                    })}
          </ul>
          </Col>
        </Row>
      </Container>
  );
};

export default Pets;