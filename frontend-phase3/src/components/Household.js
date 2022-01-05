import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Household({
  currentHouseholdUsers,
  setShowCreateHousehold,
  currentHouseholdName
}) {
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {currentHouseholdUsers
              ? currentHouseholdName
              : "Household"}
          </h1>
        </Col>
        <Col>
          <Button
            onClick={() => setShowCreateHousehold(true)}
            className="create-btn"
          >
            Create
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card id="household">
            <Card.Body>
              <ListGroup variant="flush">
                {currentHouseholdUsers
                  ? currentHouseholdUsers.map((u) => {
                      return (
                        <ListGroup.Item id="household" key={u.id}>
                          {u.first_name}
                        </ListGroup.Item>
                      );
                    })
                  : "Please select your user from the dropdown on the top right."}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Household;

// currentHousehold[0].users.map(user => {
//     return (<li key={user.id} value={user.id}>{user.first_name} {user.last_name}</li>)
//       })

  /* {currentHousehold.map(household => {
                      return (<li key={household.id} value={household.id}>{household.users.map(user => {
                        return(
                          <li>user.first_name</li>
                          )
                          })}</li>)
                    })} */


// let currentHousehold

// const [currentHouseholdUsers, setCurrentHouseholdUsers] = useState();
// useEffect(() =>
// {
//   currentHousehold = (householdData.filter(household => household.id === currentUser.household_id))
//   console.log("CURRENT HOUSEHOLD", currentHousehold,
//   //"CURRENT USERS IN HOUSEHOLD: ", currentHousehold[0].users
//   )

//   fetch(`http://localhost:9292/households/${currentUser.household_id}`)
//   .then(r => r.json())
//   .then(r => {
//     setCurrentHouseholdUsers(r)
//     console.log(r)
//   })

// },[currentUser])
