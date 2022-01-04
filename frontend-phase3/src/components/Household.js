import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Household({ showCreateHousehold, setShowCreateHousehold, householdData, currentUser, userData }) {
  const currentHousehold = householdData.filter(household => household.id === currentUser.household_id)
  // iterate over householdData and find data where householdID = currentUser.household.id
  // return array of people in household
  console.log("CURRENT HOUSEHOLD", currentHousehold)

  return (
      <Container>
        <Row>
          <Col>
            <h1>Household</h1>
          </Col>
          <Col>
          <Button onClick={() => setShowCreateHousehold(true)} className="create-btn">
            Create
          </Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <ul>
            {currentHousehold.map(household => {
                      return (<li key={household.id} value={household.id}>{household.household_name}</li>)
                    })}
          </ul>
          </Col>
        </Row>
      </Container>
  );
};

export default Household;