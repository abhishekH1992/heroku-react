import React, { Component } from "react";
import {FaPhone, FaEnvelope} from "react-icons/fa";

const SocialShare = [
    {Social: <FaEnvelope /> , link: 'mailTo:hello@moanadigitalsolutions.com'},
    {Social: <FaPhone /> , link: 'tel:+64 22 035 5872'},
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area tp-margin">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Ready To Do This</span>
                                        <h2>Let's get <br /> to work</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/">Home</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/service">Services</a></li>
                                                    <li><a href="/contact">Contact</a></li>
                                                    <li><a href="/terms-of-services">Terms of Services</a></li>
                                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hi</h4>
                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>© 2020-2022 Moana Digital Solutions.All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;