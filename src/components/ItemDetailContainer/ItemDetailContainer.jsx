import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Firebase
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  let { id } = useParams();

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs[0]);
      setLoading(false);
    };
    getItem();
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
