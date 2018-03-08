import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import ActiveVideo from './reducer_active_video';

const rootReducer = combineReducers({
    videos: VideosReducer,
    activeVideo: ActiveVideo
});

export default rootReducer;

