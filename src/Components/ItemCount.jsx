import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count)
    }
  }

  return (
    <div className="item-count">
      <div className="count-controls">
        <button 
          className="count-button" 
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="count-display">{count}</span>
        <button 
          className="count-button" 
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="add-to-cart-button" 
        onClick={handleAdd}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
      <p className="stock-info">Stock disponible: {stock}</p>
    </div>
  )
}

export default ItemCount