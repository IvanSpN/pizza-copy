import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, minusItem } from '../redux/slices/cartSlice';
const CartItem = ({ id, price, title, imageUrl, size, type, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(id));
    }
  };
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={imageUrl} alt="" width={240} />
      </div>
      <div className="cart-item__info">
        <h2>{title}</h2>
        <p>
          {type}, {size} см
        </p>
      </div>
      <div className="cart-item__counter">
        <button onClick={onClickMinus}>Отнять</button>
        <p>{count}</p>
        <button onClick={onClickPlus}>Прибавить</button>
      </div>
      <div className="cart-item__price">
        <p>{price * count} р</p>
      </div>
      <div className="cart-item__delete">
        <button onClick={onClickRemove}>Удалить</button>
      </div>
    </div>
  );
};

export default CartItem;
