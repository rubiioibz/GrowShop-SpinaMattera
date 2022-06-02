import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../../products";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  let { id } = useParams();

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const product = products.find((e) => e.id == id);
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(product);
      }, 1000);
    });

    getItem
      .then((data) => {
        setItem(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

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
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
