import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../containers/video-list-item';
import { videoSearch } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';

class VideoList extends Component {    
    componentDidMount() {
        if (this.props.location) {
            const term = this.props.location.state.term;
            this.props.videoSearch(term);  
        }
    }

    renderVideos() {
        return _.map(this.props.videos, video => {
            const imageUrl = video.snippet.thumbnails.default.url;
            const title = video.snippet.title;

            return (
                <div key={video.etag}>
                    <Link to={{
                        pathname: `/videos/${video.id.videoId}`,
                        state: {video},
                    }}>
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

export default connect(mapStateToProps, { videoSearch })(VideoList);