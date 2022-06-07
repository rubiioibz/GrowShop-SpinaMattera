import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
      if (category === undefined) {
        setItems(docs);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        setItems(docs.filter((elem) => elem.category === category));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    getItem();
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
