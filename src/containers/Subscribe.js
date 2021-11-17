import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap'
import { fetchInitialData } from '../redux/global.actions';

export class Subscribe extends Component {
    state = {
        evaluate: false,
    }
    componentDidMount(){

    }
    handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
      const form = e.target;
      console.log('In handleSubmit :>> ', form);
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
        const liberation_dates = [{id:1, date:'12-01-2021', percentage_interest: 5}, {id: 2, date:'12-03-2021', percentage_interest: 15},{id:3, date:'12-06-2021', percentage_interest: 20}]
        const { share_price, deadlines, loading } = this.props
        return (
            <div className="subscriber_form_container">
                <h1>Subscription Form</h1>
                <p className="mb-5">lorem ipsum dolor sit amet, consectetur adip</p>
                <Form evaluate={this.state.evaluate.toString()} onSubmit={this.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name='first_name' type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name='last_name' type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name='phone_number' type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='address' placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control name='city' />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control name='state' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control name='zip_code'  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNbrShares">
                            <Form.Label>Number of Share</Form.Label>
                            <Form.Control  name='share_number' as="select" defaultValue="Select...">
                                <option>Choose...</option>
                                {nrb_of_shares.map(nrb_of_share=> (<option key={Math.floor(1000 + Math.random() * 9000)}>{nrb_of_share}</option>))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSharePrice">
                        <Form.Label>Share Price</Form.Label>
                        <Form.Control name='share_price' disabled type="text" defaultValue={`$ ${share_price}`} placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNbrShares">
                            <Form.Label>Subscription Date</Form.Label>
                            <Form.Control type="date" name='subscription_date' defaultValue={()=> new Date.now()} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNbrShares">
                            <Form.Label>Liberation date</Form.Label>
                            <Form.Control name='deadline_id' as="select" defaultValue="Select...">
                                <option key="none">Choose...</option>
                                {deadlines.map(liberation_date=> (<option key={liberation_date.id} value={liberation_date.id}>{liberation_date.date} - {`${liberation_date.percentage_interest}%`}</option>))}
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

const mapStateToProps = state => {
    // console.log(`state`, state);
    return {
        deadlines: state.global.deadlines,
        loading: state.global.loading,
        share_price: state.global.share_price,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchInitialData: () => dispatch(fetchInitialData()),
    };
  };
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default compose(withConnect, memo)(Subscribe);
