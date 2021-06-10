import React, { Component } from 'react';
import {connect} from 'react-redux';
import {articleNews} from '../actions';
import {bindActionCreators} from 'redux';

import HomeProduct from '../component/Home/HomeProduct';

export class Home extends Component {

    componentDidMount(){
        this.props.articleNews();
    }

    render() {
        return (
            <div>
                <HomeProduct articles={this.props.fullproduct.articles}/>
            </div>
        )
    }
}

// Mapping states
const mapStateToProps = (state) => {
    console.log("state : ", state) 
    return {
        fullproduct : state.articles
    };
}

// Will Dispatch Action binds
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ articleNews },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
