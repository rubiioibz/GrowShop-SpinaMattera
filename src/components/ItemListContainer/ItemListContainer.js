import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { semillas } from "../../semillas";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = new Promise((resolve, reject) => {
        resolve(semillas);
      });

      data.then((data) => {
        setItems(data);
      });

      data.then(() => {
        setLoading(false);
      });

      data.catch((err) => {
        console.error(err);
      }, []);
    }, 2000);
  });

  return (
    <>
      {loading ? (
        <div className="container">
        <img
          className="mx-auto d-block"
          alt=""
          src="https://24.media.tumblr.com/3c2264156c68662537acb13764415d9d/tumblr_mrjgort4sR1sc50pho1_500.gif"
        ></img></div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
