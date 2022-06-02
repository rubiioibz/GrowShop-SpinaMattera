import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { products } from "../../products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const prodFiltrados = products.filter((prod) => prod.category === category);
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (category === undefined) {
          resolve(products);
        } else {
          resolve(prodFiltrados);
        }
      }, 1000);
    });

    data
      .then((data) => {
        setItems(data);
      })

      .then(() => {
        setLoading(false);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  return (
    <>
      {loading ? (
        <div className="container">
          <img
            className="mx-auto d-block"
            alt=""
            src="https://24.media.tumblr.com/3c2264156c68662537acb13764415d9d/tumblr_mrjgort4sR1sc50pho1_500.gif"
          ></img>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
