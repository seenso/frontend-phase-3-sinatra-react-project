import React, { useState } from "react";
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
  const url = "http://localhost:9292/";
  
  const [showCreateHousehold, setShowCreateHousehold] = useState(false); 
  const [showCreatePet, setShowCreatePet] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);

  fetch(url)
  .then(r => r.json())
  .then(data => console.log("FETCH DATA", data));

  return (
    <div >

      <Header />
        
        <Form.Select aria-label="user_select" id="user-dropdown">
          <option>Which user are you?</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      
      <Container>
        <Row>
          <Col id="household" className="component">
            <Household showCreateHousehold={showCreateHousehold} setShowCreateHousehold={setShowCreateHousehold} />
            <CreateHousehold show={showCreateHousehold} onHide={() => setShowCreateHousehold(false)} />
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