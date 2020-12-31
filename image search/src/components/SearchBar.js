import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  /*
  to stop page from refreshing

  onFormSubmit(event) {
    event.preventDefault();

    console.log(this.state.term); // cannot read poperty state of undefined to fix this  we use arrow function instead onFormSubmit1
  }

   or we can just use onFormSubmit but passing it like below
    <form className="ui form" onSubmit = {event => this.onFormSubmit(event)}>   but remember to include paranthesis in this method
  */

  onFormSubmit1 = (event) => {
    event.preventDefault();
    this.props.ochs(this.state.term);
    // console.log(this.state.term);
  };

  state = { term: '' };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit1}>
          <div className="field">
            <label htmlFor="searchbar">Search</label>
            <input
              type="text"
              name=""
              id="searchbar"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
