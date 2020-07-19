import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class About extends Component{
    render(){
        let title = 'About',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" page={'about'}/>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'} page={'about-banner'}/>
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-12">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">Talofa Lava/Mālō e Lelei, </p>
                                            <p className="description">Moana Digital Solutions was birthed out of a desire to help small-medium enterprises grow and thrive in the digital age. The founders originally started an eCommerce in early 2017 servicing the Pacific. This provided an additional channel for local suppliers to sell their goods and services, opening their business to overseas customers, creating more revenue & sustainable growth.</p>
                                            <p className="description">Through years of experience, the founders soon realised the challenges faced by Pacific businesses to digitise due to high-cost provided by other agencies and the lack of technical skills in web design & development.</p>
                                            <p className="description">Moana Digital Solutions is on a mission to make it easy and provide an online platform to Pacific organisations to showcase their services and products attracting both local and international customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your Work Now</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                <a className="rn-btn btn-white" href="/contact">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about-us-1.png" alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

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
export default About