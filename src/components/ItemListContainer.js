import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { semillas } from "../semillas.js";

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
        <img
          className="mx-auto"
          alt=""
          src="https://24.media.tumblr.com/3c2264156c68662537acb13764415d9d/tumblr_mrjgort4sR1sc50pho1_500.gif"
        ></img>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
