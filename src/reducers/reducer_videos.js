import { VIDEO_SEARCH } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case VIDEO_SEARCH:
            return _.mapKeys(action.payload.data.items, 'id.videoId');
        default: 
            return state;
    }   
}