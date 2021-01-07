import axios from 'axios';
const KEY = 'AIzaSyBM-2wfSEuItHEY5WEYFD02lVH9ycT7_9g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
