import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";

function Household({
  currentHouseholdUsers,
  setShowCreateHousehold,
  currentHouseholdName,
  toggleShowAddNewHouseholdMember,
  showAddNewHouseholdMember,
}) {
  return (
    <Container>
      <Row>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col></Col>
            <Col className="d-flex justify-content-center">
              <Row>
                <Toast
                  show={showAddNewHouseholdMember}
                  onClose={toggleShowAddNewHouseholdMember}
                  delay={3000} autohide
                >
                  <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                  </Toast.Header>
                  <Toast.Body>
                    Woohoo, you added a new member to your household! 🎉
                  </Toast.Body>
                </Toast>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>

        <Col sm={10}>
          <h1>{currentHouseholdUsers ? currentHouseholdName : "Household"}</h1>
        </Col>
        <Col className="align-middle">
          <Button
            onClick={() => setShowCreateHousehold(true)}
            className="create-btn"
            style={{ backgroundColor: "#C71C81", borderColor: "#C71C81" }}
            className="align-middle"
          >
            +
          </Button>
        </Col>
      </Row>
      <Row
        xs={1}
        md={2}
        className="g-4"
        className="d-flex justify-content-center"
      >
        {currentHouseholdUsers
          ? currentHouseholdUsers.map((u) => {
              return (
                <Card
                  style={{ width: "10rem" }}
                  id="household"
                  key={u.id}
                  border="light"
                >
                  <Card.Img variant="top" src="./profile-pic.png" />
                  <Card.Body style={{ padding: ".5rem .5rem" }}>
                    <Card.Title className="d-flex justify-content-center">
                      <span style={{ color: "#C71C81", textAlign: "center" }}>
                        {u.first_name} {u.last_name}
                      </span>
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
