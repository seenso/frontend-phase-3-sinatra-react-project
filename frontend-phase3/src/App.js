import React, { useState, useEffect } from "react";
import './App.css';

// Bootstrap components
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Household from './components/Household';
import CreateHousehold from './components/CreateHousehold'
import Pets from './components/Pets';
import CreatePet from "./components/CreatePet";
import Tasks from './components/Tasks';
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";

function App() {
  const url = "http://localhost:9292";
  
  const [showCreateHousehold, setShowCreateHousehold] = useState(false); 
  const [showCreatePet, setShowCreatePet] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);

  const [householdData, sethouseholdData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [petData, setPetData] = useState([]);
  const [taskData, setTaskData] = useState([]);

  const [currentUser, setCurrentUser] = useState(1);

  useEffect(() => {
    fetch(url + "/households")
    .then(r => r.json())
    .then(data => sethouseholdData(data))
  }, []);

  useEffect(() => {
    fetch(url + "/users")
    .then(r => r.json())
    .then(data => setUserData(data))
  }, [showCreateHousehold]);

  useEffect(() => {
    fetch(url + "/pets")
    .then(r => r.json())
    .then(data => setPetData(data))
  }, [showCreatePet]);

  useEffect(() => {
    fetch(url + "/tasks")
    .then(r => r.json())
    .then(data => setTaskData(data))
  }, [showCreateTask]);
  
  function handleUserChange(e) {
    const userID = e.target.value;
    const userObj = userData.find(user => user.id === parseInt(userID))

    setCurrentUser(userObj);
  }

  return (
    <div >
      <div id="header-container">
        <Header />
    
        <Form.Select aria-label="user_select" id="user-dropdown" onChange={(e) => handleUserChange(e)}>
          <option>Which user are you?</option>
          {userData.map(user => {
                      return (<option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>)
                    })}
        </Form.Select>
      </div>
      
      <Container>
        <Row>
          <Col id="household" className="component">
            <Household showCreateHousehold={showCreateHousehold} setShowCreateHousehold={setShowCreateHousehold} householdData={householdData} currentUser={currentUser} userData={userData}/>
            <CreateHousehold show={showCreateHousehold} onHide={() => setShowCreateHousehold(false)} url={url} householdData={householdData}/>
          </Col>
          <Col id="pets" className="component">
            <Pets showCreatePet={showCreatePet} setShowCreatePet={setShowCreatePet} petData={petData}/>
            <CreatePet show={showCreatePet} onHide={() => setShowCreatePet(false)} />
          </Col>
        </Row>
        <Row>
          <Col id="tasks" className="component">
            <Tasks showCreateTask={showCreateTask} setShowCreateTask={setShowCreateTask} taskData={taskData}/>
            <CreateTask show={showCreateTask} onHide={() => setShowCreateTask(false)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;