import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { HiMenuAlt4, HiPlus } from "react-icons/hi";
import './style.css'
export class LayoutCst extends React.Component{
    toggleCodes(on) {
      let obj = document.getElementsByClassName('navigation-and-offcanvas')[0];
      // let obj2 = document.getElementsByClassName('navigation-overlay')[0];
      console.log(`on`, on)
      if (obj && on) {
        obj.className += ' display-flex';
        // obj2.className += ' display-block-opacity-1'
      } else if ( obj && !on) {
        obj.className = obj.className.replace(' display-flex', '');
        // obj2.className = obj.className.replace(' display-block-opacity-2', '');
      }
    }
    render(){
        return(
            <div>
                
                <header className="navigation-section position-absolute">
                    <div className="navigation-overlay"></div>
                    
                    <div className="navigation-and-offcanvas">
                    <div className="col no-margin-bottom lg-5 md-basis-uato">
                        <nav className="navigation-menu"><a onClick={()=>this.toggleCodes(false)} href="/" className="nav-link">Home</a><NavLink onClick={()=>this.toggleCodes(false)} to="/about" className="nav-link">About</NavLink>
                        <div data-hover="1" data-delay="0" data-w-id="83a36909-9554-440b-ec90-d232c2c0c83d" className="nav-dropdown w-dropdown">
                            <div className="nav-dropdown-toggle w-dropdown-toggle">
                            <Link to="/services" className="nav-link-block w-inline-block">
                                <div>Services</div>
                                <div className="dropdown-icon w-icon-dropdown-toggle"></div>
                            </Link>
                            </div>
                            <nav className="dropdown-list w-dropdown-list"><Link to="/finance-transformation.html" className="dropdown-link w-dropdown-link">Finance Transformation</Link><Link to="/lean-finance.html" className="dropdown-link w-dropdown-link">Lean finance</Link><Link to="/Finance-strategy.html" className="dropdown-link w-dropdown-link">Finance strategy</Link><Link to="/family-investment.html" className="dropdown-link w-dropdown-link">Family investment</Link></nav>
                        </div>
                        </nav>
                    </div>
                    <div className="col lg-2 md-basis-auto md-order-first no-margin-bottom-lg"><Link to="/#" className="brand w-inline-block"><img src="images/-asset-quaid-dark.svg" alt=""/></Link></div>
                    <div className="col no-margin-bottom lg-5">
                        <nav className="navigation-menu justify-end"><NavLink onClick={()=>this.toggleCodes(false)} to="/blog" className="nav-link w--current">Blog</NavLink><NavLink onClick={()=>this.toggleCodes(false)} to="/general-contact" className="nav-link">Contact</NavLink>
                        <Link data-w-id="e02ef0fd-d341-7eaf-5ed3-b53528c9af97" to="/subscribe" className="button-primary animated is-small alignself-center w-inline-block">
                            <div className="button-primary-text">get a review</div>
                            <div className="button-primary-text for-hover">let&#x27;s go <span className="fa margin-left"></span></div>
                        </Link>
                        </nav>
                    </div>
                    <Link  data-w-id="83a36909-9554-440b-ec90-d232c2c0c85f" to="/#" className="c-nav__close-button w-inline-block">
                        <div onClick={()=>this.toggleCodes(false)} className="plus-icon"><HiPlus size="2em"/></div>
                    </Link>
                    </div>

                    <div className="mobile-navigation-bar"><Link to="/#" className="brand w-inline-block"><img src="images/-asset-quaid-dark.svg" alt="" className="logo-image" /></Link>
                    <Link data-w-id="83a36909-9554-440b-ec90-d232c2c0c868" to="/#" className="burger-button w-inline-block">
                        <div onClick={()=>this.toggleCodes(true)}  className="menu-icon"><HiMenuAlt4 size="2em"/></div>                     
                    </Link>
                    </div>
                </header>
                {React.cloneElement(this.props.children)}
                <footer className="section section-footer-dark padding-bottom-16">
    <div className="container margin-bottom">
      <div className="col lg-2 md-12 md-order-first"><img src="images/-asset-quaid-light.svg" alt=""/></div>
      <div className="col lg-6 md-12 no-margin-bottom-lg">
        <div className="container container-nested">
          <div className="col lg-4 md-12 no-margin-bottom-lg">
            <h4 className="on-dark">Company</h4><Link to="/#" className="footer-nav-link on-dark">About</Link><Link to="/#" className="footer-nav-link on-dark">Services</Link><Link to="/#" className="footer-nav-link on-dark">Career</Link><Link to="/#" className="footer-nav-link on-dark">Sitemap</Link><Link to="/#" className="footer-nav-link on-dark">Terms of privacy</Link></div>
          <div className="col lg-4 md-12 no-margin-bottom-lg">
            <h4 className="on-dark">Finance services</h4><Link to="/#" className="footer-nav-link on-dark">Finance transformation</Link><Link to="/#" className="footer-nav-link on-dark">Lean finance</Link><Link to="/#" className="footer-nav-link on-dark">Finance strategy</Link><Link to="/#" className="footer-nav-link on-dark">Post—merger finance integration</Link></div>
          <div className="col lg-4 md-12 no-margin-bottom">
            <h4 className="on-dark">Industries</h4><Link to="/#" className="footer-nav-link on-dark">Building and Construction</Link><Link to="/#" className="footer-nav-link on-dark">Consumer Markets</Link><Link to="/#" className="footer-nav-link on-dark">Defence and Aerospace</Link><Link to="/#" className="footer-nav-link on-dark">Family enterprise</Link></div>
        </div>
      </div>
      <div className="col lg-4 md-12 no-margin-bottom">
        <div className="w-form">
          <Form id="email-form" name="email-form" data-name="Email Form" className="flexh-align-center xs-is-wrapping"><input type="email" className="form-input-text is-grey margin-right-small lg-md-sm-no-margin-bottom w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Enter your email address" id="email-2" required=""/><input type="submit" value="Subscribe" data-wait="Please wait..." className="button-primary is-small w-button"/></Form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div className="low-text-contrast text-xsmall margin-bottom-double">Join our newsletter to stay up to date on features and releases</div>
        <div className="flexh-space-between">
          <Link to="/#" className="c-social on-dark w-inline-block">
            <div className="fa-brand"></div>
          </Link>
          <Link to="/#" className="c-social on-dark w-inline-block">
            <div className="fa-brand"></div>
          </Link>
          <Link to="/#" className="c-social on-dark w-inline-block">
            <div className="fa-brand"></div>
          </Link>
          <Link to="/#" className="c-social on-dark w-inline-block">
            <div className="fa-brand"></div>
          </Link>
          <Link to="/#" className="c-social on-dark w-inline-block">
            <div className="fa-brand"></div>
          </Link>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="col lg-12 margin-bottom">
        <div className="hr on-dark"></div>
      </div>
    </div>
    <div className="container">
      <div className="col lg-6 no-margin-bottom md-12 md-order-last">
        <div className="low-text-contrast text-small flexh-space-between md-flex-vertical">
          <div className="md-order-last">©2019 Quaid by detheme. All rights reserved. </div><Link to="/#" className="footer-bottom-link">Privacy Policy</Link><Link to="/#" className="footer-bottom-link">Term Of Service</Link></div>
      </div>
      <div className="col lg-6 no-margin-bottom md-12">
        <div className="w100 text-align-right footer-bottom md-text-align-left margin-bottom">Made in Surabaja, Indonesia</div>
      </div>
    </div>
  </footer>
            </div>
        )
    }
}

export default LayoutCst