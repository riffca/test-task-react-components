// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import Header from '../Header/Header';
import  Explore  from '../pages/Explore/Explore.js';



// COMPONENT


export default class AppRouter extends React.Component {

    render(){
        return <BrowserRouter>
            <Fragment>
                <Header />          
                <Switch>
                    <Route path='/' component={Explore} exact={true} />
                    <Route path='/about' component={Explore} />
                    <Redirect to="/" />
                </Switch>
            </Fragment>
        </BrowserRouter>
    }

}

