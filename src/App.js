import React, { useEffect, useState } from "react";

//PROVIDER HOC (HIGH ORDER COMPONENT) PARA ENVOLVER TODA LA APP
import { CartProvider } from "./Context/CartContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";

//Views
import Home from "./views/Home/Home";

//Reac Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Firebase
//import { collection, query, where getDocs } from "firebase/firestore";

//import { db } from "../src/firebase/firebaseConfig"
//import { async } from "@firebase/util";

function App() {

  //const [products, setProducts] = useState ([])

  /* useEffect(() => {
      const getProducts = async () => {

        const q = query(collection(db, "productos"), where("category", "==", semillas))
        const docs = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          docs.push({...doc.data(), id: doc.id})
        });
        //console.log(docs);
        setProducts(docs)
      }
      getProducts()
  }, []) */

  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
