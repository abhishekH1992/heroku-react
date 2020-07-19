import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import ServiceList from "../elements/service/ServiceList";
import Header from "../component/header/Header";
import Country from "../elements/Country";
import Footer from "../component/footer/Footer";

class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" page={'service'}/>

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Service'}  page={'service-banner'}/>
                {/* End Breadcrump Area */}

                <div className="service-area creative-service-wrapper ptb--50 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--15">
                                    <h2 className="title">Our Services</h2>
                                    <p>Our design projects are fresh, creative and will help grow your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" type="service"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Region */}
                <div className="rn-about-area ptb--50 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-center mb--60">
                                        <h2 className="title">Digitising</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-12">
                                    <div className="about-inner inner">
                                        <p className="description">We'll build you an amazing website to accelerate your business and brand - stand out from the rest of the crowd. We specialise in the custom-built digital platforms giving you the keys to your data. </p>
                                        <div class="row mt--30">
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div class="about-us-list">
                                                    <h5 class="title">Pacific Businesses</h5>
                                                    <p>#short desc</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div class="about-us-list">
                                                    <h5 class="title">SME Businesses</h5>
                                                    <p>#short desc</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div class="about-us-list">
                                                    <h5 class="title">Government Agencys</h5>
                                                    <p>#short desc</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div class="about-us-list">
                                                    <h5 class="title">Non-Governmental Organisation</h5>
                                                    <p>#short desc</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Start Team Area  */}
                            <div className="rn-team-area ptb--120 bg_color--1" id="team">
                                <div className="container">
                                    <div className="row">
                                        <Country column="col-lg-4 col-md-6 col-sm-6 col-12" />
                                    </div>
                                </div>
                            </div>
                            {/* End Team Area  */}
                        </div>
                    </div>
                </div>
                {/* End Service Region */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default Service;