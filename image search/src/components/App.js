import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    console.log(term + ' on SearchSubmit');
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID wfo8PhTbldieHlqRGL5Pi8D39JIuwLOv8PBXLZpoPo8',
      },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar ochs={this.onSearchSubmit} />
        Images Found : {this.state.images.length}
      </div>
    );
  }
}

export default App;
