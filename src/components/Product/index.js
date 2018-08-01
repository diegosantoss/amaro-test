import React from "react";

import ProductItem from "./ProductItem";

export default props => {
  return (
    <section className="product">
      {props.products.map((product, index) => {
        return <ProductItem key={index} product={product} />;
      })}
    </section>
  );
};
