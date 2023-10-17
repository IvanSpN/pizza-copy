import React from 'react';

function Categorys({ onClickCategory, selectCategory }) {
  const categoryList = ['Все', 'С мясом', 'С овощами', 'С ягодами', 'С сыром'];

  return (
    <div className="category">
      <ul>
        {categoryList.map((category, index) => (
          <li
            className={selectCategory === index ? 'active' : ''}
            key={index}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorys;
