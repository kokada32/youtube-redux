import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search-bar';
import VideoList from './video-list';

class VideoDetail extends Component {
    render() {
        if(!this.props.video) {
            return <div></div>;
        }

        const id = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${id}`;
    
        return (
            <div>
                <VideoList />
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={url}></iframe>
                    </div>
                    <div className="details">
                        <div>{this.props.video.snippet.title}</div>
                        <div>{this.props.video.snippet.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ videos }, ownProps) {
    return { video: videos[ownProps.match.params.videoId]};
}

export default connect(mapStateToProps)(VideoDetail);