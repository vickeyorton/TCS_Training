import React, { Component } from 'react';
import ArticleNews from '../component/Home/ArticleNews';
import GalleryNews from '../component/Home/GalleryNews';
import LatestNews from '../component/Home/LatestNews';

export class Home extends Component {
    render() {
        return (
            <div>
                <ArticleNews/>
                <GalleryNews/>
                <LatestNews/>
            </div>
        )
    }
}

export default Home
