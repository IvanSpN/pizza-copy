import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import './App.scss';
import './scss/app.scss';

import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Izbranoe from './pages/Izbranoe';

export const SearchContext = createContext('');

function App() {
  // стейт для все продуктов
  const [items, setItems] = React.useState([]);
  // стейт лоадера
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://652806e5931d71583df1c236.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, []);
  // стейт для поиска
  const [searchValue, setSearchValue] = React.useState('');

  // метод добавления товара в избранное по id
  const onClickToFavorites = (id) => {
    const updatedProductData = items.map((items) => {
      if (items.id === id) {
        return {
          ...items,
          isFavorite: !items.isFavorite,
        };
      }
      return items;
    });

    setItems(updatedProductData);
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        onClickToFavorites,
        setItems,
        items,
        setItems,
        isLoading,
        setIsLoading,
      }}
    >
      <div className="App">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="Cart" element={<Cart />} />
            <Route path="Izb" element={<Izbranoe items={items} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
