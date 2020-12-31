import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
  //   const images = props.images.map((img) => (
  //     <img alt={img.description} key={img.id} src={img.urls.regular} alt="" />
  //   ));

  /*
  destructuring properties

  const imagesArray = props.images.map(({ description, id, urls }) => (
    <img
   
      alt={description}
      key={id}
      src={urls.regular}
      alt=""
    />
  ));

  */

  // using image card

  const imagesArray = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{imagesArray}</div>;
};
export default ImageList;
