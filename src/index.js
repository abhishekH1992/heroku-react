// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";

import HomeParticles from './home/HomeParticles';

// Element Layout
import Service from "./elements/Service";
import About from "./elements/About";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";
import Term from "./elements/Term";
import Privacy from "./elements/Privacy";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeParticles}/>


                    {/* Element Layot */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/terms-of-services`} component={Term}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/privacy-policy`} component={Privacy}/>

                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();