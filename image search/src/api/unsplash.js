import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID wfo8PhTbldieHlqRGL5Pi8D39JIuwLOv8PBXLZpoPo8',
  },
});
