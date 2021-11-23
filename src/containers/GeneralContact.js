import React from 'react'
import { Form } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

class GeneralContact extends React.Component{
    render(){
        return(
            <div>
                <div className="section is-hero has-gradient position-relative overflow-hidden is-subpage">
                    <div className="container position-relative">
                    <div className="col block-centered text-align-center lg-7 md-12">
                        <h1>Contact us</h1>
                    </div>
                    </div><img src="images/header2.svg" alt="" className="header-image style3"/></div>
                <div className="section">
                    <div className="container">
                    <div className="col text-align-center block-centered lg-8 md-12">
                        <h2>Thanks for your interest <br/>How can we help?</h2>
                        <div className="low-text-contrast text-large margin-bottom">Need to find a local office? We have 58 worldwide. Interested in working here? See what a career at Superly looks like or follow us on social media. Interested in working with us? Explore our consulting services and industry expertise. Need something else? See below for more ways to get in touch.</div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="col lg-12">
                        <div className="w-layout-grid c-grid-contact">
                        <div className="c-iconbox style2">
                            <h3 className="margin-bottom">Headquarters</h3>
                            <div>Virginia —1428  <br/>Callison Lane Building <br/>Virginia, VA 22902<br/><br/>Phone: +1 08123 123 800<br/>Fax: +1 08123 1516 7070</div>
                        </div>
                        <div className="c-iconbox style2">
                            <h3 className="margin-bottom">New business</h3><a href="#" className="cta-link"><span className="margin-right">Tell your interest</span> <span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                        <div className="c-iconbox style2">
                            <div>
                            <h3 className="margin-bottom">Social media</h3>
                            <div>Follow us on LinkedIn, Facebook, Twitter and YouTube.</div>
                            </div><a href="#" className="cta-link"><span className="margin-right">Follow us</span> <span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                        <div className="c-iconbox style2">
                            <div>
                            <h3 className="margin-bottom">Press</h3>
                            <div className="rich-text-block w-richtext">
                                <p>USA, Europe, and Africa <br/><a href="mailto:joshua@superly.com">Joshua Baliwerti</a> <br/>tel: +44 30 123 987</p>
                                <p>Middle East &amp; Asia<br/><a href="mailto:Poppo@superly.com">Poppo Hill</a> <br/>tel: +822 908 1234</p>
                            </div>
                            </div><a href="#" className="cta-link"><span className="margin-right">Visit our media center</span> <span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                        <div className="c-iconbox style2">
                            <div>
                            <h3 className="margin-bottom">Global career</h3>
                            <div className="margin-bottom-double">Take a bold step<br/><br/><a href="mailto:recruiting@superly.com">recruiting@superly.com</a></div>
                            </div><a href="#" className="cta-link">Visit our career site<span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                        <div className="c-iconbox style2">
                            <div>
                            <h3 className="margin-bottom">Alumni relations</h3>
                            <div className="margin-bottom-double">Get in touch or see what resources are available.<br/>‍<br/>‍<a href="mailto:alumni@superly.com">alumni@superly.com</a></div>
                            </div><a href="#" className="cta-link"><span className="margin-right">Visit our alumni site</span> <span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                        <div className="c-iconbox style2">
                            <div>
                            <h3 className="margin-bottom">Job posting</h3>
                            <div className="margin-bottom-double">For executive recruiters or hiring companies:</div>
                            </div><a href="#" className="cta-link"><span className="margin-right">Visit our alumni site</span> <span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                        <div className="c-iconbox style2">
                            <div>
                            <h3 className="margin-bottom">Website</h3>
                            <div className="margin-bottom-double">Questions or comments about superly.com?</div>
                            </div><a href="#" className="cta-link"><span className="margin-right">Email us</span><span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section no-padding-top-bottom">
                    <div className="container">
                    <div className="col lg-6 block-centered md-12 text-align-center no-margin-bottom">
                        <div className="pre-title">Follow us</div>
                        <div className="text-large margin-bottom">Join us on social media to hear our latest insights, get a peek at our culture and see how our unique approach helps clients achieve the extraordinary.</div>
                        <div className="iconfont"><a href="#"><em className="iconfont__no-italize"></em></a></div>
                    </div>
                    </div>
                </div>
                <div className="section xs-no-padding-bottom">
                    <div className="container">
                    <div className="col xs-no-padding">
                        <a href="#" className="c-imageblock-link w-inline-block">
                        <div className="container container-nested">
                            <div className="col no-margin-bottom lg-7 md-12">
                            <div className="c-imageblock-link__text">We work as one global team to help you achieve the extraordinary</div>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="section has-bg-accent">
                    <div className="container is-narrow">
                    <div className="col lg-12">
                        <div className="c-cta1 style2">
                        <div className="md-margin-bottom cta-text">
                            <div className="w-form">
                            <Form id="email-form" name="email-form" data-name="Email Form">
                                <div className="container container-nested">
                                <div className="col lg-6 sm-12">
                                    <div className="pre-title">Let work together</div>
                                    <div className="size-h2 max-width-650px margin-bottom">Ready to talk?<br/></div>
                                    <div>We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.</div>
                                </div>
                                <div className="col lg-1"></div>
                                <div className="col no-margin-bottom lg-5 sm-12">
                                    <div className="margin-bottom">I want to talk to your experts in:</div><select id="field-2" name="field-2" className="form-select w-select"><option value="Consumer markets">Consumer markets</option><option value="Agribisnis">Agribisnis</option><option value="Automotive">Automotive</option><option value="Third Choice">Third Choice</option></select><input type="email" className="form-input-text w-input" maxlength="256" name="Email" data-name="Email" placeholder="Your email" id="Email-4" required=""/><input type="submit" value="Contact us" data-wait="Please wait..." className="button-primary w-button"/></div>
                                </div>
                            </Form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralContact