import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    //ref is jsx attribute not html attribute
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    /*
    console.log(this.imageRef); // an object with current property which has the image object
    console.log(this.imageRef.current.clientHeight) // will give 0 because the image isn't loaded yet
    */
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
