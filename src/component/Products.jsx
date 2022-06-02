import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "../context/ProductsData";

const Products = () => {
  const { useEffect, datas } = useContext(ProductContext);
  return (
    <div>
      Products :
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>

                  <td>
                    <button>
                      <Link to={`/products/${e.id}`}>More Details</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
