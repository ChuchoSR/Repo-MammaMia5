import React, { useState } from 'react';
import { pizzaCart } from '../data/pizzas';
import '../assets/css/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const updatePizzaCount = (id, action) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        if (action === "increase") {
          pizza.count += 1;
        } else if (action === "decrease" && pizza.count > 0) {
          pizza.count -= 1;
        }
        if (pizza.count === 0) {
          return null;
        }
      }
      return pizza;
    }).filter(Boolean);

    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">El carrito está vacío</p>
      ) : (
        <>
          <div className="table-header">
            <div>Imagen</div>
            <div>Producto</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Acciones</div>
          </div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} />
              <div>
                <h3>{pizza.name}</h3>
              </div>
              <div>${pizza.price}</div>
              <div>{pizza.count}</div>
              <div>
                <button onClick={() => updatePizzaCount(pizza.id, "increase")}>Agregar</button>
                <button onClick={() => updatePizzaCount(pizza.id, "decrease")}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="total-container">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
          <button>Realizar Pago</button>
        </>
      )}
    </div>
  );
};

export default Cart;
