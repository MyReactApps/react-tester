import React from 'react';
import Image from './Image';
import './Card.css';

let Card = function statelessFunctionComponentClass(props) {
   let title = props.title;
   let paragraph = props.paragraph;
   let image = props.image;

  return (
    <div className="col-sm-6 text-center">
        <div className="image" >
            <Image source={image} key={image} />;
        </div>
        <h1 className="title">{ title }</h1>
        <p>{ paragraph }</p>
    </div>
  );
};

export default Card;