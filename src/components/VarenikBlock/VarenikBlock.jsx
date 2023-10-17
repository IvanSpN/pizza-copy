import React from 'react';
import unliked from '../../assets/img/heart-unliked-icon.svg';
import liked from '../../assets/img/heart-liked-icon.svg';

function VarenikBlock({
  title,
  price,
  imageUrl,
  sizes,
  isFavorite,
  id,
  onClickToFavorites,
}) {
  // стейт выбора типа теста товара
  const [activeType, setActiveType] = React.useState(0);

  // стейт выбора размера товара
  const [activeSize, setActiveSize] = React.useState(0);

  const typeList = ['дрожжевое', 'без дрозжевое'];
  return (
    <div>
      <div className="varenik-block">
        <img
          className="varenik-block__image"
          src={imageUrl}
          alt=""
          width={240}
        />
        <div className="varenik-block__title">{title}</div>
        <div className="varenik-block__selector">
          <ul>
            {typeList.map((el, index) => {
              return (
                <li
                  key={el.id}
                  className={activeType === index ? 'active' : ''}
                  onClick={() => setActiveType(index)}
                >
                  {el}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((el, index) => (
              <li
                key={el.id}
                className={activeSize === index ? 'active' : ''}
                onClick={() => setActiveSize(index)}
              >
                {el} гр
              </li>
            ))}
          </ul>
        </div>
        <div className="varenik-block__bottom">
          <div className="varenik-block__price">от {price} р.</div>
          <div className="button">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E"
              />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
        <div onClick={() => onClickToFavorites(id)}>
          <img src={isFavorite ? liked : unliked} alt="like" />
        </div>
      </div>
    </div>
  );
}

export default VarenikBlock;
