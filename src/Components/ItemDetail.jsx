import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useCart()

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    addItem(product, quantity)
  }

  return (
    <div className="item-detail">
      <div className="item-detail-container">
        <div className="item-detail-image">
          {product.image ? (
            <img 
              src={`/images/${product.image}`}
              alt={product.name}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '12px'
              }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.innerHTML += '<span class="item-detail-placeholder">📦</span>'
              }}
            />
          ) : (
            <span className="item-detail-placeholder">📦</span>
          )}
        </div>
        <div className="item-detail-info">
          <h2 className="item-detail-title">{product.name}</h2>
          <p className="item-detail-description">{product.description}</p>
          <div className="item-detail-price">
            <span className="price">${product.price}</span>
          </div>
          <div className="item-detail-actions">
            {quantityAdded > 0 ? (
              <div className="added-to-cart">
                <p className="success-message">
                  ✅ Agregado al carrito ({quantityAdded} unidad{quantityAdded > 1 ? 'es' : ''})
                </p>
                <div className="cart-actions">
                  <Link to="/cart" className="go-to-cart-button">
                    Ir al carrito
                  </Link>
                  <Link to="/" className="continue-shopping-button">
                    Seguir comprando
                  </Link>
                </div>
              </div>
            ) : (
              <ItemCount 
                stock={product.stock} 
                initial={1} 
                onAdd={handleOnAdd}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail