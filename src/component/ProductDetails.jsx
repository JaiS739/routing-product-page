import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8025/products/${id}`)
        .then((r) => r.json())
        .then((d) => {
          setProduct(d);
        });
    }
  }, [id]);

  return (
    <div>
      <div>Type :{product.name}</div>
      <div>Price:{product.price}</div>
      <div>Brand:{product.Brand}</div>
      <div>{product.Model}</div>
    </div>
  );
};

export default ProductDetails;
