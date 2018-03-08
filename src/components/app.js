import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import VideoList from '../containers/video-list';
import VideoDetail from '../containers/video-detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList />
                <VideoDetail />
            </div>
        );
    }
}