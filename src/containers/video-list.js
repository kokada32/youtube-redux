import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../containers/video-list-item';
import { videoSelect } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';

class VideoList extends Component {    
    renderVideos() {
        return _.map(this.props.videos, video => {
            const imageUrl = video.snippet.thumbnails.default.url;
            const title = video.snippet.title;

            return (
                <div key={video.etag}>
                    <Link 
                        to={`/videos/${video.id.videoId}`} 
                        onClick={() => this.props.videoSelect(video.id.videoId)} >
                        <VideoListItem video={video}  />
                    </Link>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <ul className="col-md-4 list-group">
                    {this.renderVideos()}
                </ul> 
            </div>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps, { videoSelect })(VideoList);