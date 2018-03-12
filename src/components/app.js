import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from '../containers/search-bar';
import VideoList from '../containers/video-list';
import VideoDetail from '../containers/video-detail';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/videos/:videoId" component={VideoDetail} />
                    <Route path="/videos" component={VideoList} />
                </Switch>
            </BrowserRouter>
        );
    }
}