import React, { useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSelectCategorySort } from '../redux/slices/filterSlice';

function Sort() {
  const dispatch = useDispatch();
  const sortRef = React.useRef();

  const selectCategorySort = useSelector(selectSort);

  const sortList = [
    { name: 'популярности (desc)', sortProperty: 'rating' },
    { name: 'популярности (asc)', sortProperty: '-rating' },
    { name: 'цене (desc)', sortProperty: 'price' },
    { name: 'цене (asc)', sortProperty: '-price' },
    { name: 'алфавиту (desc)', sortProperty: 'title' },
    { name: 'алфавиту (asc)', sortProperty: '-title' },
  ];

  // стейт сортировки и выбора пункта-категории сортировки по "цене и т.д", стейт открытия-закрытия попАпа
  const [openSortList, setOpenSortList] = React.useState(false);
  //   метод клика по категории сортировки по "цене и т.д", он же закрывает-открывает попАп
  const onClickSortCategory = (obj) => {
    dispatch(setSelectCategorySort(obj));
    setOpenSortList(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpenSortList(false);
        console.log('jjj');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировать по:</b>
        <span onClick={() => setOpenSortList(!openSortList)}>
          {selectCategorySort.name}
        </span>
      </div>
      <div className="sort__popup">
        {openSortList && (
          <ul>
            {sortList.map((obj, index) => (
              <li
                className={
                  selectCategorySort.sortProperty === obj.sortProperty
                    ? 'active'
                    : ''
                }
                key={index}
                onClick={() => onClickSortCategory(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sort;
