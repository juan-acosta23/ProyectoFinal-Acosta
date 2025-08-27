import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
  const { cart, clear, getTotal, getTotalItems } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <div className="empty-cart-content">
            <span className="empty-cart-icon">🛒</span>
            <h2>Tu carrito está vacío</h2>
            <p>¡Agrega algunos productos para comenzar a comprar!</p>
            <Link to="/" className="continue-shopping-button">
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <p className="items-count">
          {getTotalItems()} artículo{getTotalItems() !== 1 ? 's' : ''} en tu carrito
        </p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Resumen del pedido</h3>
            <div className="summary-line">
              <span>Subtotal ({getTotalItems()} artículos)</span>
              <span className="summary-price">${getTotal()}</span>
            </div>
            <div className="summary-line">
              <span>Envío</span>
              <span className="summary-price">Gratis</span>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <span className="summary-price">${getTotal()}</span>
            </div>
            
            <div className="cart-actions">
              <Link to="/checkout" className="checkout-button">
                Finalizar Compra
              </Link>
              <button onClick={clear} className="clear-cart-button">
                Vaciar Carrito
              </button>
            </div>
          </div>
          
          <Link to="/" className="continue-shopping-link">
            ← Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart