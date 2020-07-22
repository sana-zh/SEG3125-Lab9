import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Learn from './Learn.js';

// Form validation code adapted from https://www.telerik.com/blogs/up-and-running-with-react-form-validation
// Postal code regex from https://stackoverflow.com/a/46761018
const validPostCodeRegex = RegExp(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i);
const validPhoneNumberRegex = RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i);

export default class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
		phoneNumber: '',
        postCode: '',
      }
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'postCode': 
        errors.postCode = 
          validPostCodeRegex.test(value)
            ? ''
            : 'Invalid Postal Code!';
        break;
      case 'phoneNumber': 
        errors.phoneNumber = 
          validPhoneNumberRegex.test(value)
            ? ''
            : 'Invalid Phone Number!';
        break;
      default:
        break;
    }
	console.log(errors);
    this.setState({errors, [name]: value});
  }
  render() {
    const {errors, formValid} = this.state;
    return (
<Form>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridProvince">
      <Form.Label>Province</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Alberta</option>
        <option>British Columbia</option>
        <option>Manitoba</option>
        <option>New Brunswick</option>
        <option>Newfoundland and Labrador</option>
        <option>Nova Scotia</option>
        <option>Ontario</option>
        <option>Prince Edward Island</option>
        <option>Quebec</option>
        <option>Saskatchewan</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>	

    <Form.Group controlId="formGridZip">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control name='postCode' onChange={this.handleChange} />
              {errors.postCode.length > 0 && 
  <span style={{color: 'red'}}>{errors.postCode}</span>}
    </Form.Group>
  
		<Form.Group controlId="formGridPhone">
	  
      <Form.Label>Phone Number</Form.Label><br />
	<OverlayTrigger 
	placement='right'
	overlay={<Tooltip id="tooltip-disabled">We will call upon arrival</Tooltip>}>
		<span className="d-inline-block">
      <Form.Control name='phoneNumber' onChange={this.handleChange} />
              {errors.phoneNumber.length > 0 && 
  <span style={{color: 'red'}}>{errors.phoneNumber}</span>}
		</span>
	</OverlayTrigger>
    </Form.Group>

    <Form.Group controlId="formGridInstructions">
      <Form.Label>Delivery Instructions</Form.Label><br />
	<OverlayTrigger 
	placement='right'
	overlay={<Tooltip id="tooltip-disabled">Please specify what hours of day work best, as well as specific delivery instructions if the address is an apartment</Tooltip>}>
		<span className="d-inline-block">
      <Form.Control as="textarea" rows="3" />
		</span>
	</OverlayTrigger>
    </Form.Group>
  
</Form>
);
}
}