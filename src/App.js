import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Beans from './Beans.js';
import Learn from './Learn.js';
import Cart from './Cart.js';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"><Jumbotron>
  <h1>Coffee Town Roastery and Cafe</h1>
  <p>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Language
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">English</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Français</Dropdown.Item>
    <Dropdown.Item href="#/action-3">中文</Dropdown.Item>
    <Dropdown.Item href="#/action-4">हिन्दी</Dropdown.Item>
    <Dropdown.Item href="#/action-5">Español</Dropdown.Item>
    <Dropdown.Item href="#/action-6">عربى</Dropdown.Item>
    <Dropdown.Item href="#/action-7">اردو</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </p>
</Jumbotron>
	
	<Tabs defaultActiveKey="beans">
      <Tab eventKey="beans" title="Buy Beans">
		<Beans />
      </Tab>
      <Tab eventKey="accessories" title="Buy Accessories">
	     [Buy Accessories To Be Done]
      </Tab>
      <Tab eventKey="learn" title="Learn About Coffee">
		<Learn />
      </Tab>
      <Tab eventKey="brew" title="Learn To Brew">
		[Learn about brewing methods to be done]
      </Tab>
	  
      <Tab eventKey="cart" title="Cart">
		<Cart />
      </Tab>
    </Tabs>
    </div>
  );
}

export default App;
