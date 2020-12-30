import React from 'react';

class IamChild extends React.Component {
  // onChange={e => this.setState({term : e.target.value })}

  /*
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });         //cannot read property setState of undefined
  }
  onChange={this.onInputChange}

  solution convert to arrow function 
  or 
  onChange = {(event) => this.onInputChange(event) }       // notice we have to pass curly braces
  */

  onInputChange1 = (event) => {
    console.log(event.target.value + ' on InputChange');
    this.setState({ term: event.target.value });
  };

  onFormSubmit(event) {
    // console.log(this.state.term + 'on FormSubmit');
    event.preventDefault();
    this.props.rtchs(this.state.term + 'on FormSubmit'); // invoking callback in children
  }

  state = { term: '' };
  render() {
    return (
      <div>
        <form action="" onSubmit={(event) => this.onFormSubmit(event)}>
          <label htmlFor="input1">first input</label>
          <input
            id="input1"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange1}
          />
        </form>
      </div>
    );
  }
}

export default IamChild;
