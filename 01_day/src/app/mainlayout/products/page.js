"use client";

import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  getProduct();

  // console.log(products);

  return (
    <div>
      This is products page
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
