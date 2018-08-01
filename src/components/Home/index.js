import React from "react";

import Product from "../Product";

export default props => {
  return (
    <Product
      ClicktoChangeStateProduct={props.ClicktoChangeStateProduct}
      products={props.products}
    />
  );
};
