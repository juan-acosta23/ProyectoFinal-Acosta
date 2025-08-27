import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import './CartWidget.css'

const CartWidget = () => {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-button">
        <span className="cart-icon">🛒</span>
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>
    </div>
  )
}

export default CartWidget