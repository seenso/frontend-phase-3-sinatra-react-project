import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Household({ showCreateHousehold, setShowCreateHousehold, householdData, currentUser, userData }) {

  let currentHousehold;
  
  useEffect(() =>
  {
    currentHousehold = householdData.filter(household => household.id === currentUser.household_id)
    console.log("CURRENT HOUSEHOLD", currentHousehold, currentHousehold.users)
  },[currentUser])
  

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
          <ul> {currentHousehold === [] ? 
          currentHousehold.users.map(user => {
                      return (<li key={user.id} value={user.id}>{user.first_name} {user.last_name}</li>)
                    })
          : null
          }
            {/* {currentHousehold.map(household => {
                      return (<li key={household.id} value={household.id}>{household.users.map(user => {
                        return(
                          <li>user.first_name</li>
                          )
                          })}</li>)
                    })} */}
          </ul>
          </Col>
        </Row>
      </Container>
  );
};

export default Household;