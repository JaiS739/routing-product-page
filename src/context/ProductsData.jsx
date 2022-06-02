import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  let getData = async () => {
    let r = await fetch("http://localhost:8025/products");
    let d = await r.json();
    setDatas(d);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ useEffect, datas }}>
      {children}
    </ProductContext.Provider>
  );
};
