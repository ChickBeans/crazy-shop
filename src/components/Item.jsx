import React from "react";

const Item = (props) => {
  return (
    <div className="item">
        <h3>{props.name}</h3>
        <img src={props.img} alt=""/>
    </div>
  );
};

export default Item;
