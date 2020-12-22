import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import 'semantic-ui-css/semantic.min.css';
import Spinner from './Spinner';
/*
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos);
    },
    (err) => console.log(err)
  );
  return <div>:atitude: </div>;
};
*/

class App extends React.Component {
  //we defined constructor so that we could initalize our state object
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
        console.log(err);
      }
    );
  }

  renderContent() {
    if (!this.state.errorMessage && this.state.lat) {
      console.log(this.state.lat);
      return (
        <div>
          <SeasonDisplay latitude={this.state.lat} />
        </div>
      );
    } else if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    } else return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
