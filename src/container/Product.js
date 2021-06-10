import React, { Component } from 'react';
import {connect} from 'react-redux';
import {latestNews} from '../actions';
import {bindActionCreators} from 'redux';

import ProductInfo from "../component/ProductInfo/ProductInfo";

export class Product extends Component {

    componentDidMount(){
        this.props.latestNews(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <ProductInfo product={this.props.oneProduct.latest}/>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log("state : ", state) 
    return {
        oneProduct : state.articles
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ latestNews },dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Product);
