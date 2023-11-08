import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './scss/app.scss';

import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Izbranoe from './pages/Izbranoe';
import FullVareniki from './pages/FullVareniki';

function App() {
  // метод добавления товара в избранное по id
  // const onClickToFavorites = (id) => {
  //   const updatedProductData = items.map((items) => {
  //     if (items.id === id) {
  //       return {
  //         ...items,
  //         isFavorite: !items.isFavorite,
  //       };
  //     }
  //     return items;
  //   });

  //   setItems(updatedProductData);
  // };

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vareniki/:id" element={<FullVareniki />} />
          <Route path="Cart" element={<Cart />} />
          {/* <Route path="Izb" element={<Izbranoe items={items} />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
