import React from 'react';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItem, selectCart } from '../redux/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItem());
    }
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-top">
        <h2>Корзина</h2>
        <button onClick={onClickClear} className="cart-clear">
          Очистить корзину
        </button>
      </div>
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="cart-bottom">
        <div className="cart-bottom__all">
          <p>Всего пицц: {totalCount} шт</p>
        </div>
        <div className="cart-bottom__sum">
          <p>Сумма заказа: {totalPrice} р</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
