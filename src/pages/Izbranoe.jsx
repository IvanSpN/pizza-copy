import React from 'react';

import vareniki from '../assets/vareniki.json';
import VarenikBlock from '../components/VarenikBlock/VarenikBlock';
import { SearchContext } from '../App';

function Izbranoe({ products }) {
  const { onClickToFavorites } = React.useContext(SearchContext);

  const favoriteProducts = products.filter((product) => product.isFavorite);

  return (
    <div className="izb-wrapper">
      <div className="izb-top">
        <h2>Избранные товары</h2>
        <div className="izb-items">
          {favoriteProducts.map((product) => (
            <li key={product.id}>
              <VarenikBlock
                {...product}
                onClickToFavorites={onClickToFavorites}
              />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Izbranoe;
