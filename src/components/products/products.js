"use client";
/*
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Product from "./product/product";

const Products = ({ exclusive }) => {
  const [products, setProducts] = useState([]);
  const [isExclusive, setIsExclusive] = useState(exclusive);

  const [view, setView] = useState("card");

  const showAllProducts = () => {
    return products.length !== 0
      ? products.map((product, index) => (
          <div key={index} className={styles.product}>
            <Product key={index} product={product}></Product>
          </div>
        ))
      : null;
  };

  const showExclusiveProducts = () => {
    return products.length !== 0
      ? products
          .filter((p) => p.exclusive)
          .slice(0, 4)
          .map((product, index) => (
            <div key={index} className={styles.product}>
              <Product product={product}></Product>
            </div>
          ))
      : null;
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  //Update the state of isExclusive when exclusive prop changes
  useEffect(() => {
    setIsExclusive(exclusive);
  }, [exclusive]);

  return (
    <div className={styles.products} id="selected">
      <button onClick={() => setView(view === "card" ? "list" : "card")}>
        Toggle View
      </button>

      <div className={styles.list}>
        {isExclusive ? showExclusiveProducts() : showAllProducts()}
      </div>
    </div>
  );
};

export default Products;
*/

import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Product from "./product/product";

const Products = ({ exclusive }) => {
  const [products, setProducts] = useState([]);
  const [isExclusive, setIsExclusive] = useState(exclusive);

  const [view, setView] = useState("card");

  const showAllProducts = () => {
    return products.length !== 0
      ? products.map((product, index) => (
          <div key={index} className={styles.product}>
            <Product key={index} product={product} view={view}></Product>
          </div>
        ))
      : null;
  };

  const showExclusiveProducts = () => {
    return products.length !== 0
      ? products
          .filter((p) => p.exclusive)
          .slice(0, 4)
          .map((product, index) => (
            <div key={index} className={styles.product}>
              <Product product={product} view={view}></Product>
            </div>
          ))
      : null;
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  useEffect(() => {
    setIsExclusive(exclusive);
  }, [exclusive]);

  return (
    <div className={styles.products} id="selected">
      <button onClick={() => setView("card")}>
        <div>ICON CARD</div>
      </button>
      <button onClick={() => setView("list")}>
        <div>ICON LIST</div>
      </button>

      <div className={styles.list}>
        {isExclusive ? showExclusiveProducts() : showAllProducts()}
      </div>
    </div>
  );
};

export default Products;

