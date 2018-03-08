import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../containers/video-list-item';
import { videoSelect } from '../actions';

class VideoList extends Component {    
    renderVideos() {
        return _.map(this.props.videos, video => {
            const imageUrl = video.snippet.thumbnails.default.url;
            const title = video.snippet.title;

            return (
                <div onClick={() => this.props.videoSelect(video.id.videoId)} key={video.id.videoId}>
                    <VideoListItem video={video} />
                </div>
            );
        });
    }
    
    render() {
        return (
            <div>
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