import React, { useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectCategory, selectFilter } from '../redux/slices/filterSlice';

import {
  fetchVareniki,
  selectVarenikiData,
} from '../redux/slices/varenikiSlice';

import Categorys from '../components/Categorys';
import Sort from '../components/Sort';

import VarenikBlock from '../components/VarenikBlock/VarenikBlock';

import Skeleton from '../components/VarenikBlock/Skeleton';

function Home() {
  const dispatch = useDispatch();

  const { selectCategory, selectCategorySort, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectVarenikiData);

  // стейт для все продуктов
  // const [items, setItems] = React.useState([]); -ушло в Redux

  // стейт лоадера
  // const [isLoading, setIsLoading] = React.useState(true); - перенесли в Redux

  // стейт выбора категории, передает индекс из массива с категориями товара "С мясом и т.д"
  // const [selectCategory, setSelectCategory] = React.useState(0); - переписали на redux

  // const [selectCategorySort, setSelectCategorySort] = React.useState({
  //   name: 'популярности',
  //   sortProperty: 'rating',
  // }); - переписали на redux

  const getPizzas = async () => {
    const sortBy = selectCategorySort.sortProperty.replace('-', '');
    const order = selectCategorySort.sortProperty.includes('-')
      ? 'asc'
      : 'desc';
    const category = selectCategory > 0 ? `category=${selectCategory}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchVareniki({
        sortBy,
        order,
        category,
        search,
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.scroll(0, 0);

    getPizzas();
  }, [selectCategory, selectCategorySort, searchValue]);

  // метод по клику выбора категории товара "С мясом и т.д"
  const onClickCategory = (index) => {
    dispatch(setSelectCategory(index));
  };

  const vareniki = items.map((element) => (
    <VarenikBlock key={element.id} {...element} />
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div>
      <div className="content">
        <div className="content__container">
          <div className="content__top">
            <Categorys
              onClickCategory={onClickCategory}
              selectCategory={selectCategory}
            />

            <Sort />
          </div>
          <h2 className="content__title">Все вареники</h2>
          {status === 'error' ? (
            <div className="content__error-info">
              <h2>
                Произошла ошибка <icon>😕</icon>
              </h2>
              <p>
                К сожалению не удалось получить вареники. Попробуйте повторить
                запрос позже.
              </p>
            </div>
          ) : (
            <div className="content__items">
              {status === 'loading' ? skeletons : vareniki}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
