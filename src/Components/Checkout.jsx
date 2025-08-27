import { useState } from 'react'
import { useCart } from '../hooks/useCart.jsx'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import CheckoutForm from './CheckoutForm'
import './Checkout.css'

function Checkout() {
  const { cart, clear, getTotal, getTotalItems } = useCart()
  const [orderId, setOrderId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const createOrder = async (buyer) => {
    setLoading(true)
    setError('')
    
    try {
      const order = {
        buyer,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: getTotal(),
        date: Timestamp.fromDate(new Date())
      }

      const docRef = await addDoc(collection(db, 'orders'), order)
      setOrderId(docRef.id)
      clear()
    } catch (error) {
      console.error('Error creating order:', error)
      setError('Hubo un error al procesar tu pedido. Por favor, inténtalo nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  if (cart.length === 0 && !orderId) {
    return (
      <div className="checkout-container">
        <div className="empty-checkout">
          <h2>Tu carrito está vacío</h2>
          <p>Agrega algunos productos antes de proceder al checkout.</p>
        </div>
      </div>
    )
  }

  if (orderId) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <div className="success-icon">✅</div>
          <h2>¡Pedido realizado con éxito!</h2>
          <div className="order-details">
            <p>Tu número de pedido es:</p>
            <div className="order-id">{orderId}</div>
            <p>Guarda este número para hacer seguimiento de tu compra.</p>
            <p>Recibirás un email con los detalles de tu pedido.</p>
          </div>
          <button 
            className="continue-shopping-button"
            onClick={() => window.location.href = '/'}
          >
            Continuar comprando
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-form-section">
          <h2>Finalizar Compra</h2>
          
          {error && (
            <div className="error-message">
              <span className="error-icon">❌</span>
              <p>{error}</p>
            </div>
          )}
          
          <CheckoutForm onConfirm={createOrder} loading={loading} />
        </div>

        <div className="order-summary">
          <div className="summary-card">
            <h3>Resumen del Pedido</h3>
            
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">x{item.quantity}</span>
                  </div>
                  <span className="item-total">${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-line">
                <span>Subtotal ({getTotalItems()} artículos)</span>
                <span>${getTotal()}</span>
              </div>
              <div className="total-line">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="total-line final-total">
                <span>Total</span>
                <span>${getTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout