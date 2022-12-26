import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ViewShop from './View Services/View Shop/ViewShop';
import WishlistScreen from "./View Services/View Shop/WishlistScreen/WishlistScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<ViewShop />} exact />
          <Route path='/wishlist' element={<WishlistScreen />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
