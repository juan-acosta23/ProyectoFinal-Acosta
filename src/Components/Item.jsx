import { Link } from 'react-router-dom'
import './Item.css'

function Item({ product }) {
  return (
    <div className="item-card">
      <div className="item-image">
        {product.image ? (
          <img 
            src={`/images/${product.image}`}
            alt={product.name}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '8px'
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentNode.innerHTML += '<span class="item-placeholder">📦</span>'
            }}
          />
        ) : (
          <span className="item-placeholder">📦</span>
        )}
      </div>
      <div className="item-content">
        <h3 className="item-title">{product.name}</h3>
        <p className="item-description">{product.description}</p>
        <div className="item-price">
          <span className="price">${product.price}</span>
        </div>
        <div className="item-stock">
          <span className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
          </span>
        </div>
        <Link to={`/item/${product.id}`} className="item-link">
          Ver más
        </Link>
      </div>
    </div>
  )
}

export default Item