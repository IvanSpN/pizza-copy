import React from 'react';

import VarenikBlock from '../components/VarenikBlock/VarenikBlock';
// import { SearchContext } from '../App';

function Izbranoe() {
  // const { onClickToFavorites, items } = React.useContext(SearchContext);

  // const favoriteProducts = items.filter((items) => items.isFavorite);

  return (
    <div className="izb-wrapper">
      <div className="izb-top">
        <h2>Избранные товары</h2>
        <div className="izb-items">
          {/* {favoriteProducts.map((items) => (
            <li key={items.id}></li>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Izbranoe;
