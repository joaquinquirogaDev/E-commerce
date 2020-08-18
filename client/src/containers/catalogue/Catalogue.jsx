import React, { useState, useEffect } from "react";
import s from "./Catalogue.module.css";
import Axios from "axios";
import CategoriesItem from "../../components/categories_item/CategoriesItem.jsx";

//componentes
import ProductCard from "../../components/product_card/ProductCard.jsx";

export default function Catalogue() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/products").then((res) =>
      setProducts(res.data)
    );
  });

  return (
    <div className={s.catalogue}>
      <div className={s.filters}></div>
      <div className={s.products}>
        <div className={s.listproducts}>
          {products.length > 0 ? (
            products.map(function (product) {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              );
            })
          ) : (
            <h1>No hay productos para mostrar</h1>
          )}
        </div>
      </div>
    </div>
  );
}
