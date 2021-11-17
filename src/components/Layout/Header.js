import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
export class Header extends Component {
    render() {
        return (

        <Navbar bg="light" variant="light" sticky="top" expand="lg">
            <Navbar.Brand><Link to="/">Site Name</Link></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link ><NavLink to="/about">About</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to="/subscribe">Subscribe</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)


// <nav className="navbar navbar-expand-sm navbar-light bg-light">
// <Link className="navbar-brand" to="/" > Subscription Manager</Link>
// <button className="navbar-toggler" type="button">
//     <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//     <li class="nav-item active">
//         <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
//     </li>
//     <li class="nav-item">
//         <NavLink class="nav-link" to="/about">About</NavLink>
//     </li>
//     <li class="nav-item">
//         <NavLink class="nav-link" to="/subscribe">Subscribe</NavLink>
//     </li>
//     </ul>
// </div>
// </nav>