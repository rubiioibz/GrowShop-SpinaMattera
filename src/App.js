import React from "react";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Views
import Home from "./views/Home/Home"

//Reac Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
