import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
    render() {
        if(!this.props.video) {
            return <div></div>;
        }
        const id = this.props.video.id;
        const url = `https://www.youtube.com/embed/${id}`;
    
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{this.props.video.snippet.title}</div>
                    <div>{this.props.video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        video: state.activeVideo
    };
}

export default connect(mapStateToProps)(VideoDetail);