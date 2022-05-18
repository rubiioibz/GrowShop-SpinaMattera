import React from "react";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

//Views
import Home from "./views/Home/Home";
import Semillas from "./views/Semillas/Semillas";
import Cbd from "./views/Cbd/Cbd";
import Aceites from "./views/Aceites/Aceites";
import Fertilizantes from "./views/Fertilizantes/Fertilizantes";

//Reac Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semillas" element={<Semillas />} />
        <Route path="/semillas/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/Cbd" element={<Cbd />} />
        <Route path="/Aceites" element={<Aceites />} />
        <Route path="/Fertilizantes" element={<Fertilizantes />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
