import React from "react";

export default props => {
  return (
    <div className="product__item--name">
      <h1>{props.product.name}</h1>
    </div>
  );
};
