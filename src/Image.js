import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
  let source = './images/' + props.source;
  
  let style = {
    height: '200px',
    width: '300px',
    margin: '10px 5px 0px 5px'
  };

  return (
    <img  src={require(`${source}`)} style={style} alt="img" />
  );
};

export default Image;