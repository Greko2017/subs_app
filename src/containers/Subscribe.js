import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { memo } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap'
import { fetchInitialData, postSubscription } from '../redux/global.actions';
import Message from '../components/message';
// import Alert from 'react-bootstrap/Alert'
// import moment from 'moment';

import "./style.css"

export class Subscribe extends Component {
    state = {
        evaluate: false,
        share_amount: 0,
        selected_deadline: {},
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',

    }
    componentDidMount(){
        const { fetchInitialData } = this.props
        fetchInitialData()
    }
    handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
    //   const form = e.currentTarget;

      let params = {
        share_amount: this.state.share_amount,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zip_code,
        selected_deadline: this.state.selected_deadline,
    }
    //   console.log('In handleSubmit :>> ', 'params', params);
      this.props.postSubscription(params);
    //   if (form.checkValidity() === false) {
    //     form.preventDefault();
    //     form.stopPropagation();
    //   }
      this.setState(previousState=>{
          return {...previousState, evaluate: true}
      })
    };
    
    handleOnChange = (event) => {
        let id_deadline = event.target.value;
        let selected_deadline = (this.props.deadlines.filter((deadline)=> deadline.ID_DEADLINE === id_deadline))[0]
        if (selected_deadline && selected_deadline instanceof Object) {
            this.setState(previousState=>{
              return {...previousState, share_amount: selected_deadline.SHARE_AMOUNT || 0, selected_deadline:selected_deadline}
          })
        }
    }

    render() {
        const nrb_of_shares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const { deadlines, loading } = this.props
        return (
                <div>
                     <div className="section is-hero has-gradient position-relative overflow-hidden is-subpage">
    <div className="container position-relative">
      <div className="col block-centered text-align-center lg-7 md-12">
        <div className="pre-title is-dark-with-low-opacity">Our service</div>
        <h1>Subscription Form</h1>
      </div>
    </div><img src="images/header2.svg" alt="" className="header-image style2"/></div>
  <div className="section padding-bottom-extra">
    <div className="container flex-horizontal">
      <div className="col lg-7 md-12 no-margin-bottom-lg">
        <div target="_blank" className="rich-text-block no-margin-bottom-lg w-richtext">
        <Message />
        <Form evaluate={this.state.evaluate.toString()} onSubmit={this.handleSubmit}>
                    <Row className="mb-1">
                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={e => this.setState({ first_name: e?.target?.value })} name='first_name' type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={e => this.setState({ last_name: e?.target?.value })} name='last_name' type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => this.setState({ email: e?.target?.value })} name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={e => this.setState({ phone_number: e?.target?.value })} name='phone_number' type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-1" controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={e => this.setState({ address: e?.target?.value })} name='address' placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control  onChange={e => this.setState({ city: e?.target?.value })} name='city' />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control  onChange={e => this.setState({ state: e?.target?.value })} name='state' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control  onChange={e => this.setState({ zip_code: e?.target?.value })} name='zip_code'  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridLiberationDate">
                            <Form.Label>Liberation date</Form.Label>
                            <Form.Control name="liberation_date" onChange={(e)=> this.handleOnChange(e)}  as="select" defaultValue="Select...">
                                <option key="none">Choose...</option>
                                {deadlines?.map(liberation_date=> (<option key={liberation_date.ID_DEADLINE} value={liberation_date.ID_DEADLINE}>{liberation_date.DATE_DUE.toString().substring(0,11)} - {`${liberation_date.INTEREST_RATE}%`}</option>))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSharePrice">
                        <Form.Label>Share Amount</Form.Label>
                        <Form.Control  onChange={e => this.setState({ share_price: e?.target?.value })} name='share_price' disabled type="text" value={`$ ${this.state.share_amount}`} placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-5">
                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridNbrShares">
                            <Form.Label>Number of Share</Form.Label>
                            <Form.Control  name='share_number' as="select" defaultValue="Select...">
                                <option>Choose...</option>
                                {nrb_of_shares.map(nrb_of_share=> (<option key={Math.floor(1000 + Math.random() * 9000)}>{nrb_of_share}</option>))}
                            </Form.Control>
                        </Form.Group>

                    </Row>

                    <Button className="button-primary w-inline-block" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
      </div>
      <div className="col lg-1 no-margin-bottom">
        <div className="vertical-divider"></div>
      </div>
      <div className="col lg-4 md-12 no-margin-bottom-lg">
        <h3>Financial management advisory services</h3>
        <ul className="c-checklist margin-bottom-double">
          <li className="c-checklist_item style2"><a href="#">Finance transformation</a></li>
          <li className="c-checklist_item style2"><a href="#">Post-merger finance integration</a></li>
          <li className="c-checklist_item style2"><a href="#">Finance strategy</a></li>
          <li className="c-checklist_item style2"><a href="#">Target operating model</a></li>
          <li className="c-checklist_item style2"><a href="#">Working capital enhancement</a></li>
          <li className="c-checklist_item style2"><a href="#">Cost accounting and management</a></li>
          <li className="c-checklist_item style2"><a href="#">Business partnering and decision support</a></li>
          <li className="c-checklist_item style2"><a href="#">Planning budgeting and forecasting</a></li>
          <li className="c-checklist_item style2"><a href="#">Quality close Lean finance</a></li>
          <li className="c-checklist_item style2"><a href="#">Finance function benchmarking</a></li>
        </ul>
        <div className="box has-bg-color style2">
          <div className="size-h3 on-dark margin-bottom">Has any doubt in choosing the suitable financial service?</div>
          <a data-w-id="f3148f6d-7ea6-e2cb-3fad-4a08782987c6" href="#" className="button-primary animated block-centered is-dark w100 w-inline-block">
            <div style={{WebkitTransform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MsTransform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "1"}} className="button-primary-text">contact us</div>
            <div style={{opacity: "0", display: "block", WebkitTransform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MsTransform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="button-primary-text for-hover">let&#x27;s go <span className="fa margin-left"></span></div>
          </a>
        </div>
      </div>
    </div>
  </div>
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
      postSubscription: (subscription) => dispatch(postSubscription(subscription)),
    };
  };
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default compose(withConnect, memo)(Subscribe);


{/* 
  
                <h1>Subscription Form</h1>
                <p className="mb-5">lorem ipsum dolor sit amet, consectetur adip</p>
                <Form evaluate={this.state.evaluate.toString()} onSubmit={this.handleSubmit}>
                    <Row className="mb-1">
                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={e => this.setState({ first_name: e?.target?.value })} name='first_name' type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={e => this.setState({ last_name: e?.target?.value })} name='last_name' type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => this.setState({ email: e?.target?.value })} name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={e => this.setState({ phone_number: e?.target?.value })} name='phone_number' type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-1" controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={e => this.setState({ address: e?.target?.value })} name='address' placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control  onChange={e => this.setState({ city: e?.target?.value })} name='city' />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control  onChange={e => this.setState({ state: e?.target?.value })} name='state' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control  onChange={e => this.setState({ zip_code: e?.target?.value })} name='zip_code'  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridLiberationDate">
                            <Form.Label>Liberation date</Form.Label>
                            <Form.Control name="liberation_date" onChange={(e)=> this.handleOnChange(e)}  as="select" defaultValue="Select...">
                                <option key="none">Choose...</option>
                                {deadlines?.map(liberation_date=> (<option key={liberation_date.ID_DEADLINE} value={liberation_date.ID_DEADLINE}>{liberation_date.DATE_DUE.toString().substring(0,11)} - {`${liberation_date.INTEREST_RATE}%`}</option>))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSharePrice">
                        <Form.Label>Share Amount</Form.Label>
                        <Form.Control  onChange={e => this.setState({ share_price: e?.target?.value })} name='share_price' disabled type="text" value={`$ ${this.state.share_amount}`} placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-1">
                        <Form.Group as={Col} lg="6" sm="12" controlId="formGridNbrShares">
                            <Form.Label>Number of Share</Form.Label>
                            <Form.Control  name='share_number' as="select" defaultValue="Select...">
                                <option>Choose...</option>
                                {nrb_of_shares.map(nrb_of_share=> (<option key={Math.floor(1000 + Math.random() * 9000)}>{nrb_of_share}</option>))}
                            </Form.Control>
                        </Form.Group>

                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> */}