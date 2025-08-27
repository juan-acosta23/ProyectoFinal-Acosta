import Item from './Item'
import './ItemList.css'

function ItemList({ products }) {
  return (
    <div className="item-list">
      <div className="products-grid">
        {products.map(prod => (
          <Item key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  )
}

export default ItemList