import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Componentes
import Navbar from "./containers/navbar/Navbar.jsx";
import Product from "./components/view_product/Product.jsx";
import Catalogue from "./containers/catalogue/Catalogue.jsx";
import AdminPage from "./containers/admin_page/AdminPage.jsx";
import AddUser from "./components/users/AddUser.jsx";
import Footer from './components/footer/Footer.jsx';

import { useSelector, useDispatch } from "react-redux";
//importamos la accion a dispatchear
import { getProducts } from "./actions/products.js";
import TrolleyTable from "./components/trolley_table/TrolleyTable";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts]);
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route exact path="/catalogo" component={Catalogue} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/carrito" component={TrolleyTable} />
        <Route
          exact
          path="/product/:id"
          render={({ match }) => <Product id={match.params.id} />}
        />
        <Route path="/" component={Footer}/>
      </div>
    </Router>
  );
}

export default App;
