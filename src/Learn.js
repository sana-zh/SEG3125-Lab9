import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class Learn extends React.Component {
  render() {
    return (
	<Tab.Container id="left-tabs-example" defaultActiveKey="regions">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="regions">Regions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="roast">Roast Types</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="flavour">Flavour Profiles</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="regions">
		<h3>Coffee-Growing Regions</h3>
		<p>Coffee is grown in tropical regions all around the world and every region has it's own unique characteristics.</p>
<Container fluid>
  <Row>
    <Col sm={4}>
		<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>East Africa</Card.Title>
    <Card.Text>
As the birthplace of coffee, East African coffee is world-renowned for it's unique flavour. The dominant flavour profile is fruity, with many coffee varieties from this region compared to blueberries, strawberries, and oranges. East African coffee is most often roasted to a light or medium roast, to preserve these acidic flavours. All of our coffee is fair-trade and organic, and we work directly with farmers in East Africa to help sustainable growth and development.
    </Card.Text>
    <Button variant="primary">Browse</Button>
  </Card.Body>
</Card>
</Col>
    <Col sm={4}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Central America</Card.Title>
    <Card.Text>
As the birthplace of coffee, East African coffee is world-renowned for it's unique flavour. The dominant flavour profile is fruity, with many coffee varieties from this region compared to blueberries, strawberries, and oranges. East African coffee is most often roasted to a light or medium roast, to preserve these acidic flavours. All of our coffee is fair-trade and organic, and we work directly with farmers in East Africa to help sustainable growth and development.
    </Card.Text>
    <Button variant="primary">Browse</Button>
  </Card.Body>
</Card>
</Col>
    <Col sm={4}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>South America</Card.Title>
    <Card.Text>
As the birthplace of coffee, East African coffee is world-renowned for it's unique flavour. The dominant flavour profile is fruity, with many coffee varieties from this region compared to blueberries, strawberries, and oranges. East African coffee is most often roasted to a light or medium roast, to preserve these acidic flavours. All of our coffee is fair-trade and organic, and we work directly with farmers in East Africa to help sustainable growth and development.
    </Card.Text>
    <Button variant="primary">Browse</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
        </Tab.Pane>
        <Tab.Pane eventKey="roast">
			[Roast placeholder]
        </Tab.Pane>
        <Tab.Pane eventKey="flavour">
			[Flavour placeholder]
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
);
}
}