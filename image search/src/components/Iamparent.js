import React from 'react';
import IamChild from './IamChild';
class IamParent extends React.Component {
  onChildSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <IamChild rtchs={this.onChildSubmit} />
      </div>
    );
  }
}

export default IamParent;
