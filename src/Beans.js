import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Beans extends React.Component {
  render() {
    return (<Container fluid>
  <Row>
    <Col sm={2}>
  <Form.Group controlId="formBasicCheckbox">
	<Form.Label>Roast Type</Form.Label>
    <Form.Check type="checkbox" label="Light Roast" />
    <Form.Check type="checkbox" label="Medium Roast" />
    <Form.Check type="checkbox" label="Dark Roast" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
	<Form.Label>Flavor Profile</Form.Label>
    <Form.Check type="checkbox" label="Acidic" />
    <Form.Check type="checkbox" label="Earthy" />
    <Form.Check type="checkbox" label="Fruity" />
    <Form.Check type="checkbox" label="Nutty" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
	<Form.Label>Region</Form.Label>
    <Form.Check type="checkbox" label="Brazil" />
    <Form.Check type="checkbox" label="Colombia" />
    <Form.Check type="checkbox" label="Costa Rica" />
    <Form.Check type="checkbox" label="El Salvador" />
    <Form.Check type="checkbox" label="Ethiopia" />
    <Form.Check type="checkbox" label="Guatemala" />
    <Form.Check type="checkbox" label="Nicaragua" />
    <Form.Check type="checkbox" label="Kenya" />
    <Form.Check type="checkbox" label="Indonesia" />
    <Form.Check type="checkbox" label="Peru" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
	<Form.Label>Origin</Form.Label>
    <Form.Check type="checkbox" label="Single Origin" />
    <Form.Check type="checkbox" label="Blend" />
  </Form.Group>
  </Col>
    <Col sm={2}>
	<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Costa Rica Monteverde</Card.Title>
    <Card.Text>
      Grown high in the mountains of Central America, this acidic medium roast is sure to be a crowd pleaser.
    </Card.Text>
    <Button variant="primary">Add To Cart</Button>
  </Card.Body>
</Card>
</Col>
    <Col sm={2}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>El Salvador Pacas</Card.Title>
    <Card.Text>
      Grown high in the mountains of Central America, this acidic medium roast is sure to be a crowd pleaser.
    </Card.Text>
    <Button variant="primary">Add To Cart</Button>
  </Card.Body>
</Card>
</Col>
    <Col sm={2}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Nicaragua Catimor</Card.Title>
    <Card.Text>
      Grown high in the mountains of Central America, this acidic medium roast is sure to be a crowd pleaser.
    </Card.Text>
    <Button variant="primary">Add To Cart</Button>
  </Card.Body>
</Card>
</Col>
    <Col sm={2}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Guatemala Huehuetenango</Card.Title>
    <Card.Text>
      Grown high in the mountains of Central America, this acidic medium roast is sure to be a crowd pleaser.
    </Card.Text>
    <Button variant="primary">Add To Cart</Button>
  </Card.Body>
</Card>
</Col>
  </Row>
  </Container>);
  }
}