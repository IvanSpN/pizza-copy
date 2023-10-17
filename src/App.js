import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import './App.scss';
import './scss/app.scss';
import vareniki from './assets/vareniki.json';

import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Izbranoe from './pages/Izbranoe';

export const SearchContext = createContext('');

function App() {
  // стейт для поиска
  const [searchValue, setSearchValue] = React.useState('');

  // стейт для избранного
  const [products, setProducts] = React.useState(vareniki);

  const onClickToFavorites = (id) => {
    const updatedProductData = products.map((vareniki) => {
      if (vareniki.id === id) {
        return {
          ...vareniki,
          isFavorite: !vareniki.isFavorite,
        };
      }
      return vareniki;
    });

    setProducts(updatedProductData);
  };

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, onClickToFavorites, setProducts }}
    >
      <div className="App">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="Cart" element={<Cart />} />
            <Route path="Izb" element={<Izbranoe products={products} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
