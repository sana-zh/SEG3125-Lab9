import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Delivery from './Delivery.js';

export default class Cart extends React.Component {
  render() {
    return (
	<Tab.Container id="left-tabs-example" defaultActiveKey="cart">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="cart">1. Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="delivery">2. Delivery Options</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="billing">3. Billing Information</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="confirmation">4. Confirm and Submit</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="cart">
		<h3>Your Choices</h3>
		<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Costa Rica Monteverde</Card.Title>
    <Card.Text>
      3 bags at $15 each<br />
	  $45
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Add Another</Card.Link>
    <Card.Link href="#">Remove One</Card.Link>
  </Card.Body>
</Card>
		<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>El Salvador Pacas</Card.Title>
    <Card.Text>
      2 bags at $15 each<br />
	  $30
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Add Another</Card.Link>
    <Card.Link href="#">Remove One</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Subtotal</Card.Title>
    <Card.Text>
		$75
    </Card.Text>
    <Card.Title>Sales Tax</Card.Title>
    <Card.Text>
		$9.75
    </Card.Text>
    <Card.Title>Total</Card.Title>
    <Card.Text>
		$84.75
    </Card.Text>
  </Card.Body>
</Card>
        </Tab.Pane>
        <Tab.Pane eventKey="delivery">
			<Delivery />
        </Tab.Pane>
        <Tab.Pane eventKey="billing">
			[Billing placeholder]
        </Tab.Pane>
        <Tab.Pane eventKey="confirmation">
			[Confirmation placeholder]
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
);
}
}