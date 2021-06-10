import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Product from '../container/Product';

export class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/product:id" component={Product}/>
                    {/* <Footer/> */}
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing
