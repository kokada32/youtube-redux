import axios from 'axios';

export const VIDEO_SEARCH = 'video_search';

const API_KEY = 'AIzaSyBRAL9Nlu3nfR9HMaDKIBUGUxPIJXQHvDM';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&chart=mostPopular';

export function videoSearch(term) {
    const request = axios.get(`${ROOT_URL}&q=${term}&key=${API_KEY}`);
    
    return {
        type: VIDEO_SEARCH,
        payload: request
    }
}