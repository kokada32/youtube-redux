import { VIDEO_SELECT } from "../actions";

export default function (state = null, action) {
    switch(action.type) {
        case VIDEO_SELECT:
            return action.payload.data.items;
        default:
            return state;
    }
}