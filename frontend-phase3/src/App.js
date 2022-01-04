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
  }, []);

  useEffect(() => {
    fetch(url + "/tasks")
    .then(r => r.json())
    .then(data => setTaskData(data))
  }, []);

  return (
    <div >

      <Header />
        
        <Form.Select aria-label="user_select" id="user-dropdown">
          <option>Which user are you?</option>
          {userData.map(user => {
                      return (<option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>)
                    })}
        </Form.Select>
      
      <Container>
        <Row>
          <Col id="household" className="component">
            <Household showCreateHousehold={showCreateHousehold} setShowCreateHousehold={setShowCreateHousehold} householdData={householdData}/>
            <CreateHousehold show={showCreateHousehold} onHide={() => setShowCreateHousehold(false)} url={url} householdData={householdData}/>
          </Col>
          <Col id="pets" className="component">
            <Pets showCreatePet={showCreatePet} setShowCreatePet={setShowCreatePet} />
            <CreatePet show={showCreatePet} onHide={() => setShowCreatePet(false)} />
          </Col>
        </Row>
        <Row>
          <Col id="tasks" className="component">
            <Tasks showCreateTask={showCreateTask} setShowCreateTask={setShowCreateTask} />
            <CreateTask show={showCreateTask} onHide={() => setShowCreateTask(false)} />
          </Col>
        </Row>
      </Container>

      {/* Below commented out code is the old App.js version for React components.
      
      <div id="household">
        <Household showCreateHousehold={showCreateHousehold} setShowCreateHousehold={setShowCreateHousehold} />
        <CreateHousehold
        show={showCreateHousehold}
        onHide={() => setShowCreateHousehold(false)}
      />
      </div>
      <div id="pets">
        <Pets />
      </div>
      <div id="tasks">
        <Tasks />
      </div> */}
    </div>
  );
}

export default App;