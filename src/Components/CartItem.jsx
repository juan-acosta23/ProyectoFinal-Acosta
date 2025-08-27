import { useCart } from '../hooks/useCart'
import './CartItem.css'

function CartItem({ item }) {
  const { removeItem, addItem } = useCart()

  const handleIncrease = () => {
    if (item.quantity < item.stock) {
      addItem(item, 1)
    }
  }

  const handleDecrease = () => {
    if (item.quantity > 1) {
      addItem(item, -1)
    }
  }

  return (
    <div className="cart-item">
      <div className="item-image">
        <span className="item-placeholder">📦</span>
      </div>
      
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-price">
          <span className="unit-price">${item.price} c/u</span>
        </div>
      </div>

      <div className="quantity-controls">
        <button 
          className="quantity-button"
          onClick={handleDecrease}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button 
          className="quantity-button"
          onClick={handleIncrease}
          disabled={item.quantity >= item.stock}
        >
          +
        </button>
      </div>

      <div className="item-total">
        <span className="total-price">${item.price * item.quantity}</span>
        <button 
          className="remove-button"
          onClick={() => removeItem(item.id)}
          title="Eliminar del carrito"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default CartItem