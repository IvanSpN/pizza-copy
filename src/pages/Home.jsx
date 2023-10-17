import React, { useContext } from 'react';
import { createContext } from 'react';

import Categorys from '../components/Categorys';
import Sort from '../components/Sort';

import VarenikBlock from '../components/VarenikBlock/VarenikBlock';
import { SearchContext } from '../App';

import vareniki from '../assets/vareniki.json';
import Skeleton from '../components/VarenikBlock/Skeleton';

export const SortContext = createContext('');

function Home() {
  // контекст для searchValue
  const { searchValue, onClickToFavorites } = useContext(SearchContext);

  // стейт лоадера
  const [isLoading, setIsLoading] = React.useState(true);

  // стейт выбора категории, передает индекс из массива с категориями товара "С мясом и т.д"
  const [selectCategory, setSelectCategory] = React.useState(0);

  // стейт сортировки и выбора пункта-категории сортировки по "цене и т.д", стейт открытия-закрытия попАпа
  const [selectCategorySort, setSelectCategorySort] = React.useState(0);
  const [openSortList, setOpenSortList] = React.useState(false);

  // функция имитации загрузки бэка
  const getDataFromBack = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // метод по клику выбора категории товара "С мясом и т.д"
  const onClickCategory = (index) => {
    setSelectCategory(index);
  };

  //   метод клика по категории сортировки по "цене и т.д", он же закрывает-открывает попАп
  const onClickSortCategory = (index) => {
    setSelectCategorySort(index);
    setOpenSortList(false);
  };

  // функция поиска вареников по названию
  const getSearchVarenikiTitle = (element, searchValue) => {
    return element.title.toLowerCase().includes(searchValue.toLowerCase());
  };

  // const filteredVareniki = vareniki.filter((element) => filterByTitle(element, searchValue));

  //   функция сортировки массива по категориям "цене и т.д"
  const getSortCategory = (selectCategorySort) => {
    switch (selectCategorySort) {
      case 0:
        return (a, b) => b.rating - a.rating;
      case 1:
        return (a, b) => a.price - b.price;
      case 2:
        return (a, b) =>
          a.title.localeCompare(b.title, 'ru', { sensitivity: 'base' });
      default:
        return (a, b) => a.id - b.id;
    }
  };

  React.useEffect(() => {
    getDataFromBack();
  }, []);

  return (
    <div>
      <div className="content">
        <div className="content__container">
          <div className="content__top">
            <Categorys
              onClickCategory={(index) => onClickCategory(index)}
              selectCategory={selectCategory}
            />
            <SortContext.Provider
              value={{
                selectCategorySort,
                setSelectCategorySort,
                openSortList,
                setOpenSortList,
                onClickSortCategory,
              }}
            >
              <Sort />
            </SortContext.Provider>
          </div>
          <h2 className="content__title">Все вареники</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : vareniki
                  .filter((vareniki) => {
                    return (
                      selectCategory === 0 ||
                      vareniki.category === selectCategory
                    );
                  })
                  .filter((vareniki) =>
                    getSearchVarenikiTitle(vareniki, searchValue)
                  )
                  .sort(getSortCategory(selectCategorySort))
                  .map((vareniki) => (
                    <VarenikBlock
                      key={vareniki.id}
                      {...vareniki}
                      onClickToFavorites={(id) => onClickToFavorites(id)}
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
