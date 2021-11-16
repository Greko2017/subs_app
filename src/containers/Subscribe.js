import React, { Component } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'

export class Subscribe extends Component {
    state = {
        evaluate: false,
    }
    handleSubmit = e => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.setState(previousState=>{
          return {...previousState, evaluate: true}
      })
    };
    render() {
        const nrb_of_shares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const liberation_dates = [{date:'12-01-2021', percentage_interest: 5}, {date:'12-03-2021', percentage_interest: 15},{date:'12-06-2021', percentage_interest: 20}]
        return (
            <div className="subscriber_form_container">
                <h1>Subscription Form</h1>
                <p className="mb-5">lorem ipsum dolor sit amet, consectetur adip</p>
                <Form evaluate={this.state.evaluate} onSubmit={this.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNbrShares">
                            <Form.Label>Number of Share Taken</Form.Label>
                            <Form.Control as="select" defaultValue="Select...">
                                <option>Choose...</option>
                                {nrb_of_shares.map(nrb_of_share=> (<option>{nrb_of_share}</option>))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSharePrice">
                        <Form.Label>Share's Price</Form.Label>
                        <Form.Control disabled type="text" defaultValue={`$ ${5000}`} placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNbrShares">
                            <Form.Label>Subscription Date</Form.Label>
                            <Form.Control type="date" name='date_of_birth' defaultValue={()=> new Date.now()} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNbrShares">
                            <Form.Label>Number of Share Taken</Form.Label>
                            <Form.Control as="select" defaultValue="Select...">
                                <option>Choose...</option>
                                {liberation_dates.map(liberation_date=> (<option>{liberation_date.date} - {`${liberation_date.percentage_interest}%`}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Subscribe
