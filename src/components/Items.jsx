import React from "react";
import { Item } from "./index";

const Items = (props) => {
  const datas = props.datas;

  return (
    <div className="items">
      {datas.map((value, index) => {
        return(
            <Item
              name={value.name}
              img={value.img}
              description={value.description}
              price={value.price}
              addCart={value.addCart}
              cartCount={value.cartCount}
              key={index.toString()}
             />
        )
      })}
    </div>
  );
};

export default Items;
