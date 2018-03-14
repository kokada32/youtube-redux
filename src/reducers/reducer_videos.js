import { VIDEO_SEARCH, VIDEO_SELECT } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case VIDEO_SEARCH:
            return _.mapKeys(action.payload.data.items, 'id.videoId');
        case VIDEO_SELECT:
            return action.payload.data.items;
        default: 
            return state;
    }   
}