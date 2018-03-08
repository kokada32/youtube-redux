import { VIDEO_SEARCH } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case VIDEO_SEARCH:
            return action.payload.data.items;
        default: 
            return state;
    }   
}