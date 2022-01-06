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
  currentHouseholdName,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{currentHouseholdUsers ? currentHouseholdName : "Household"}</h1>
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
              {currentHouseholdUsers
                ? currentHouseholdUsers.map((u) => {
                    return (
                      <Card
                        style={{ width: "10rem" }}
                        border="primary"
                        id="household"
                        key={u.id}
                        
                      >
                        <Card.Img variant="top" src="./profile-pic.png" />
                        <Card.Body>
                          <Card.Title className="d-flex justify-content-center">
                            <span style={{color:"#C71C81"}}>{u.first_name} {u.last_name}</span>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    );
                  })
                : "Please select your user from the dropdown on the top right."}
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
