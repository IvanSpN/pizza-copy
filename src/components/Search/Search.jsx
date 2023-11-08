import React from 'react';
import closeIcon from '../../assets/img/close.svg';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск вареников..."
        value={value}
        onChange={onChangeInput}
      />
      {value.length > 0 ? (
        <img
          onClick={onClickClear}
          src={closeIcon}
          alt=""
          width={10}
          height={10}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default Search;
