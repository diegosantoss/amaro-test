import React from "react";

export default props => {
  const { image, title } = props.product;
  return (
    <div className="product__item--image">
      <img src={image} title={title} alt={title} />
    </div>
  );
};
