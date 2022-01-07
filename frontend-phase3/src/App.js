import React, { useState, useEffect } from "react";
import "./App.css";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Confetti from "react-confetti";

import Household from "./components/Household";
import CreateHousehold from "./components/CreateHousehold";
import Pets from "./components/Pets";
import CreatePet from "./components/CreatePet";
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import SplashPage from "./components/SplashPage";

function App() {
  const url = "http://localhost:9292";

  const [showCreateHousehold, setShowCreateHousehold] = useState(false);
  const [showCreatePet, setShowCreatePet] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(0);
  const [currentHouseholdID, setCurrentHouseholdID] = useState();
  const [currentHouseholdName, setCurrentHouseholdName] = useState();
  const [currentHouseholdUsers, setCurrentHouseholdUsers] = useState();
  const [currentHouseholdPets, setCurrentHouseholdPets] = useState();
  const [currentHouseholdTasks, setCurrentHouseholdTasks] = useState();
  const [showAddNewHouseholdPet, setShowAddNewHouseholdPet] = useState(false);
  const [showAddNewHouseholdMember, setShowAddNewHouseholdMember] =
    useState(false);

  function toggleShowAddNewHouseholdMember() {
    setShowAddNewHouseholdMember(!showAddNewHouseholdMember);
  }

  function toggleShowAddNewHouseholdPet() {
    setShowAddNewHouseholdPet(!showAddNewHouseholdPet);
  }

  useEffect(() => {
    fetch(`http://localhost:9292/households/${currentUser.household_id}`)
      .then((r) => r.json())
      .then((r) => {
        setCurrentHouseholdID(r.id);
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
      .then((tasks) => {
        setCurrentHouseholdName(tasks[0].household.household_name);
        setCurrentHouseholdTasks(tasks);
      });
  }, [currentUser]);

  useEffect(() => {
    fetch(url + "/users")
      .then((r) => r.json())
      .then((data) => setUserData(data));
  }, [showCreateHousehold]);

  function handleUserChange(e) {
    const userID = e.target.value;
    const userObj = userData.find((user) => user.id === parseInt(userID));

    setCurrentUser(userObj);
  }

  const [confetti, setConfetti] = useState(false);
  return (
    <div>
      <div id="header-container">
        <Header />
        {confetti ? <Confetti run={confetti} /> : null}

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

      {currentUser === 0 ? (
        <SplashPage />
      ) : (
        <Container>
          <Row>
            <Col id="household" className="component">
              <Household
                setShowCreateHousehold={setShowCreateHousehold}
                currentHouseholdUsers={currentHouseholdUsers}
                currentHouseholdName={currentHouseholdName}
                toggleShowAddNewHouseholdMember={
                  toggleShowAddNewHouseholdMember
                }
                showAddNewHouseholdMember={showAddNewHouseholdMember}
              />
              <CreateHousehold
                show={showCreateHousehold}
                onHide={() => setShowCreateHousehold(false)}
                url={url}
                currentHouseholdID={currentHouseholdID}
                currentHouseholdUsers={currentHouseholdUsers}
                setCurrentHouseholdUsers={setCurrentHouseholdUsers}
                toggleShowAddNewHouseholdMember={
                  toggleShowAddNewHouseholdMember
                }
              />
            </Col>
            <Col id="pets" className="component">
              <Pets
                setShowCreatePet={setShowCreatePet}
                currentHouseholdPets={currentHouseholdPets}
                currentHouseholdName={currentHouseholdName}
                toggleShowAddNewHouseholdPet={toggleShowAddNewHouseholdPet}
                showAddNewHouseholdPet={showAddNewHouseholdPet}
              />
              <CreatePet
                show={showCreatePet}
                onHide={() => setShowCreatePet(false)}
                currentHouseholdID={currentHouseholdID}
                currentHouseholdPets={currentHouseholdPets}
                setCurrentHouseholdPets={setCurrentHouseholdPets}
                toggleShowAddNewHouseholdPet={toggleShowAddNewHouseholdPet}
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
                currentHouseholdUsers={currentHouseholdUsers}
                currentHouseholdName={currentHouseholdName}
                confetti={confetti}
                setConfetti={setConfetti}
              />
              <CreateTask
                show={showCreateTask}
                onHide={() => setShowCreateTask(false)}
                currentHouseholdPets={currentHouseholdPets}
                currentHouseholdID={currentHouseholdID}
                currentHouseholdUsers={currentHouseholdUsers}
                setCurrentHouseholdTasks={setCurrentHouseholdTasks}
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
