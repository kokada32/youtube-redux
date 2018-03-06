import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../containers/video-list-item';

class VideoList extends Component {
    renderVideos(data) {
        data.items.map((video) => {
            return (
                <VideoListItem video={video}/>
            );
        });
    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.map(this.renderVideos)}
            </ul>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps)(VideoList);