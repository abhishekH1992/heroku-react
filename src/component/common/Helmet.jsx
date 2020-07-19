import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Moana Digital Solutions </title>
                    <meta name="description" content="Moana Digital Solutions was birthed out of a desire to help small-medium enterprises grow and thrive in the digital age. The founders originally started an eCommerce in early 2017 servicing the Pacific. This provided an additional channel for local suppliers to sell their goods and services, opening their business to overseas customers, creating more revenue & sustainable growth." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
