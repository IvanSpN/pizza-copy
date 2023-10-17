import React, { useContext } from 'react';
import { SearchContext } from '../App';

function Sort({}) {
  const sortList = ['популярности', 'цене', 'алфавиту'];

  const {
    selectCategorySort,
    openSortList,
    setOpenSortList,
    onClickSortCategory,
  } = useContext(SearchContext);

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировать по:</b>
        <span onClick={() => setOpenSortList(!openSortList)}>
          {sortList[selectCategorySort]}
        </span>
      </div>
      <div className="sort__popup">
        {openSortList && (
          <ul>
            {sortList.map((sortOnCategory, index) => (
              <li
                className={selectCategorySort === index ? 'active' : ''}
                key={index}
                onClick={() => onClickSortCategory(index)}
              >
                {sortOnCategory}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sort;
