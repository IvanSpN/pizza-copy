import React from 'react';

import styles from './Search.module.scss';

function Search({ searchValue, setSearchValue }) {
  console.log(searchValue);
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Поиск вареников..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
