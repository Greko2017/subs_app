import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import './style.css'

export class About extends Component {
    render() {
        return (
            <div>
  <div className="section is-hero has-gradient position-relative overflow-hidden is-subpage">
    <div className="container position-relative">
      <div className="col block-centered text-align-center lg-7 md-12">
        <h1>Welcome</h1>
        <div className="padding-left padding-right margin-bottom is-heading-color">Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent business owners from making a website.</div>
      </div>
    </div><img src="images/header2.svg" alt="" className="header-image style2" /></div>
  <div className="section no-padding-bottom">
    <div className="container">
      <div className="col lg-5 alignself-center md-12">
        <h2>Founder story</h2>
        <div className="text-medium margin-bottom">Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</div>
        <div className="w-richtext">
          <p>Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis.</p>
          <p>Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        </div><img src="https://uploads-ssl.webflow.com/5d88346b08e53e18bbf88072/5d8ae8313cb74727962359c4_Benigno_Aquino_Jr._Signature.svg" width="200" alt="" />
        <div className="is-bold">Jason Calia</div>
      </div>
      <div className="col lg-1 no-margin-bottom"></div>
      <div className="col lg-6 md-12 order-first md-text-align-center"><img src="images/647.jpg" alt="" /></div>
    </div>
  </div>
  <div className="section no-padding-bottom">
    <div className="container flex-horizontal">
      <div className="col lg-4 md-6 block-centered sm-12">
        <div className="box has-bg-color">
          <div className="size-h2 text-align-center margin-bottom on-dark">Download our  Mac and Windows app</div>
          <Link data-w-id="5597e307-e204-df18-79a2-5a831e1ea092" to="/#" className="button-primary animated block-centered is-white w-inline-block">
            <div style={{WebkitTransform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MsTransform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "1"}} className="button-primary-text">free download</div>
            <div style={{opacity: "0", display: "block", WebkitTransform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MsTransform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="button-primary-text for-hover">let&#x27;s go <span className="fa margin-left"></span></div>
          </Link>
        </div>
      </div>
      <div className="col lg-4 md-6 sm-12">
        <div className="box">
          <h4 className="margin-bottom">Vision</h4>
          <div>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
        </div>
      </div>
      <div className="col lg-4 md-6 sm-12">
        <div className="box">
          <h4 className="margin-bottom">Mission</h4>
          <div>Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="col block-centered text-align-center lg-6 md-12">
        <h2>Why choose us</h2>
        <div className="text-medium low-text-contrast margin-bottom">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet </div>
      </div>
    </div>
    <div className="container is-wrapping">
      <div className="col lg-4 md-6 sm-12">
        <div className="flex-horizontal"><img src="images/number-1_1.svg" width="64" alt="" className="alignself-top" />
          <div className="margin-left">
            <h3>Reliable, Vetted Provider Network</h3>
            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris </div>
          </div>
        </div>
      </div>
      <div className="col lg-4 md-6 sm-12">
        <div className="flex-horizontal"><img src="images/icon13.svg" width="64" alt="" className="alignself-top"/>
          <div className="margin-left">
            <h3>Extensive Hands-On Experience</h3>
            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris </div>
          </div>
        </div>
      </div>
      <div className="col lg-4 md-6 sm-12">
        <div className="flex-horizontal"><img src="images/people.svg" width="64" alt="" className="alignself-top"/>
          <div className="margin-left">
            <h3>Trusted Partner</h3>
            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris Vestibulum id ligula porta felis </div>
          </div>
        </div>
      </div>
      <div className="col lg-4 md-6 sm-12">
        <div className="flex-horizontal"><img src="images/icon11_1.svg" width="64" alt="" className="alignself-top"/>
          <div className="margin-left">
            <h3>Wide array of industry verticals</h3>
            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris </div>
          </div>
        </div>
      </div>
      <div className="col lg-4 md-6 sm-12">
        <div className="flex-horizontal"><img src="images/icon5_1.svg" width="64" alt="" className="alignself-top"/>
          <div className="margin-left">
            <h3>High-Touch, Responsive Service</h3>
            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris </div>
          </div>
        </div>
      </div>
      <div className="col lg-4 md-6 sm-12">
        <div className="flex-horizontal"><img src="images/icon6_1.svg" width="64" alt="" className="alignself-top"/>
          <div className="margin-left">
            <h3>Helpdesk &amp; Technical Support</h3>
            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section no-padding-bottom has-bg-accent">
    <div className="container flexh-align-center">
      <div className="col no-margin-bottom lg-6 md-12 order-last"><img src="images/27969.png" width="310" alt=""/></div>
      <div className="col lg-1"></div>
      <div className="col no-margin-bottom lg-5 position-relative md-12">
        <div className="text-large weight-is-thin margin-bottom">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
        <div className="is-bold">Johny Baldon</div>
        <div className="text-small">CEO at Turus Berkarya</div>
        <div className="c-quote__marker">“</div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="col lg-6 md-12 block-centered text-align-center">
        <h2>Meet the Financia dream team </h2>
        <div className="text-medium low-text-contrast margin-bottom">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet </div>
      </div>
    </div>
    <div className="container flex-horizontal">
      <div className="col lg-3 shift-down-double md-6 xs-12">
        <div className="c-team2"><img src="images/pexels-photo-1080243.jpg" alt="" className="margin-bottom"/>
          <div><strong>Patrick Bob</strong><br/>CEO</div>
        </div>
        <div className="c-team2"><img src="images/pexels-photo-733500.jpg" alt="" className="margin-bottom"/>
          <div><strong>Quiki Mboala</strong><br/>Digital Marketer</div>
        </div>
      </div>
      <div className="col lg-3 md-6 xs-12">
        <div className="c-team2"><img src="images/6.jpg" alt="" className="margin-bottom"/>
          <div><strong>Howard Clarke</strong><br/>Customer happiness</div>
        </div>
        <div className="c-team2"><img src="images/5.jpg" alt="" className="margin-bottom"/>
          <div><strong>Richard Tinoko</strong><br/>Designer</div>
        </div>
      </div>
      <div className="col lg-3 shift-down-double md-6 xs-12">
        <div className="c-team2"><img src="images/4.jpg" alt="" className="margin-bottom"/>
          <div><strong>Brad Brookes</strong><br/>Developer</div>
        </div>
        <div className="c-team2"><img src="images/2.jpg" alt="" className="margin-bottom"/>
          <div><strong>Woodland McCormack</strong><br/>System Analyst</div>
        </div>
      </div>
      <div className="col lg-3 md-6 xs-12">
        <div className="c-team2"><img src="images/photo-1491528323818-fdd1faba62cc.jpg" alt="" className="margin-bottom"/>
          <div><strong>Oliver Leeds</strong><br/>Developer</div>
        </div>
        <div className="c-team2"><img src="images/pexels-photo-2379004.jpg" alt="" className="margin-bottom"/>
          <div><strong>Bobby Shah</strong><br/>Digital Marketer</div>
        </div>
      </div>
    </div>
  </div>
  <div className="section has-bg-image2 position-relative overflow-hidden">
    <div className="container">
      <div className="col lg-12">
        <div className="c-cta1 on-dark">
          <div className="md-margin-bottom cta-text">
            <div className="size-h2 on-dark">Unlock the digital world and begin your organization’s transformation</div>
            <div>Get in touch with a sales professional.</div>
          </div>
          <div className="basis400">
            <Link to="/#" className="button-primary margin-right is-white w-inline-block">
              <div className="button-primary-text">Let&#x27;s talk</div>
            </Link>
            <Link to="/#" className="button-primary is-ghost on-dark w-inline-block">
              <div className="button-primary-text">learn more</div>
            </Link>
          </div>
        </div>
      </div>
    </div><img src="images/header2.svg" alt="" className="header-image position2"/></div>
            </div>
        )
    }
}

export default About
