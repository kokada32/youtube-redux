import axios from 'axios';

export const VIDEO_SEARCH = 'video_search';
export const VIDEO_SELECT = 'video_select';

const API_KEY = 'AIzaSyBRAL9Nlu3nfR9HMaDKIBUGUxPIJXQHvDM';
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=5';
const SELECT_URL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet'

export function videoSearch(term) {
    const request = axios.get(`${SEARCH_URL}&q=${term}&key=${API_KEY}`);
    
    return {
        type: VIDEO_SEARCH,
        payload: request
    }
}

export function videoSelect(videoId) {
    const request = axios.get(`${SELECT_URL}&key=${API_KEY}&id=${videoId}`);

    return {
        type: VIDEO_SELECT,
        payload: request
    }
}