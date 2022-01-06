import React, { useState, useEffect } from "react";
import "./App.css";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Household from "./components/Household";
import CreateHousehold from "./components/CreateHousehold";
import Pets from "./components/Pets";
import CreatePet from "./components/CreatePet";
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";

function App() {
  const url = "http://localhost:9292";

  const [showCreateHousehold, setShowCreateHousehold] = useState(false);
  const [showCreatePet, setShowCreatePet] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);

  const [userData, setUserData] = useState([]);
  const [petData, setPetData] = useState([]);
  // const [taskData, setTaskData] = useState([]);

  //Added state for the CURRENT user's household, householder members(users), household pets, and household tasks
  const [currentUser, setCurrentUser] = useState(0);
  const [currentHouseholdID, setCurrentHouseholdID] = useState();
  const [currentHouseholdName, setCurrentHouseholdName] = useState();
  const [currentHouseholdUsers, setCurrentHouseholdUsers] = useState();
  const [currentHouseholdPets, setCurrentHouseholdPets] = useState();
  const [currentHouseholdTasks, setCurrentHouseholdTasks] = useState();

  useEffect(() => {
    fetch(`http://localhost:9292/households/${currentUser.household_id}`)
      .then((r) => r.json())
      .then((r) => {
        setCurrentHouseholdID(r.id)
        setCurrentHouseholdUsers(r.users);
      });
  }, [currentUser]);

  useEffect(() => {
    fetch(`http://localhost:9292/households/${currentUser.household_id}/pets`)
      .then((r) => r.json())
      .then((pets) => {
        setCurrentHouseholdPets(pets);
      });
  }, [currentUser]);

  useEffect(() => {
    fetch(`http://localhost:9292/households/${currentUser.household_id}/tasks`)
      .then((r) => r.json())
      .then((r) => {
        setCurrentHouseholdName(r.household_name)
        setCurrentHouseholdTasks(r.tasks);
      });
  }, [currentUser]);

  // These are needed to populate the user dropdown and the household dropdown(in CreateHousehold).
  // Need to configure the useState & useEffect to populate the pet dropdown in CreateTasks.
  // The taskData, setTaskData is probably unnescessary???
  
  // useEffect(() => {
  //   fetch(url + "/households")
  //     .then((r) => r.json())
  //     .then((data) => sethouseholdData(data));
  // }, []);

  useEffect(() => {
    fetch(url + "/users")
      .then((r) => r.json())
      .then((data) => setUserData(data));
  }, [showCreateHousehold]);

  useEffect(() => {
    fetch(url + "/pets")
    .then(r => r.json())
    .then(data => setPetData(data))
  }, [showCreatePet]);

  function handleUserChange(e) {
    const userID = e.target.value;
    const userObj = userData.find((user) => user.id === parseInt(userID));

    setCurrentUser(userObj);
  }

  return (
    <div>
      <div id="header-container">
        <Header />

        <Form.Select
          aria-label="user_select"
          id="user-dropdown"
          onChange={(e) => handleUserChange(e)}
        >
          <option>Which user are you?</option>
          {userData.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.first_name} {user.last_name}
              </option>
            );
          })}
        </Form.Select>
      </div>

      {currentUser === 0 ? <h1>Please select user.</h1> : 
      
      <Container>
        <Row>
          <Col id="household" className="component">
            <Household
              setShowCreateHousehold={setShowCreateHousehold}
              currentHouseholdUsers={currentHouseholdUsers}
              currentHouseholdName={currentHouseholdName}
            />
            <CreateHousehold
              show={showCreateHousehold}
              onHide={() => setShowCreateHousehold(false)}
              url={url}
              currentHouseholdID={currentHouseholdID}
              currentHouseholdUsers={currentHouseholdUsers}
              setCurrentHouseholdUsers={setCurrentHouseholdUsers}
            />
          </Col>
          <Col id="pets" className="component">
            <Pets
              setShowCreatePet={setShowCreatePet}
              currentHouseholdPets={currentHouseholdPets}
              currentHouseholdName={currentHouseholdName}
            />
            <CreatePet
              show={showCreatePet}
              onHide={() => setShowCreatePet(false)}
              currentHouseholdID={currentHouseholdID}
              currentHouseholdPets={currentHouseholdPets}
              setCurrentHouseholdPets={setCurrentHouseholdPets}
            />
          </Col>
        </Row>
        <Row>
          <Col id="tasks" className="component">
            <Tasks
              setShowCreateTask={setShowCreateTask}
              currentHouseholdTasks={currentHouseholdTasks}
              setCurrentHouseholdTasks={setCurrentHouseholdTasks}
              currentUser={currentUser}
              currentHouseholdName={currentHouseholdName}
            />
            <CreateTask
              show={showCreateTask}
              onHide={() => setShowCreateTask(false)}
              petData={petData}
              currentHouseholdID={currentHouseholdID}
            />
          </Col>
        </Row>
      </Container> }
    </div>
  );
}

export default App;
