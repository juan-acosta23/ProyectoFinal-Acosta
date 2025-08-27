import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import ItemList from "../Components/ItemList.jsx";
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const productsRef = collection(db, 'products')
        let q = productsRef

        if (categoryId) {
          q = query(productsRef, where('category', '==', categoryId))
        }

        const querySnapshot = await getDocs(q)
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setProducts(productsData)
      } catch (error) {
        console.error('Error obteniendo productos:', error)
        setError('Error al cargar los productos')
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [categoryId])

  const getCategoryTitle = () => {
    if (categoryId === 'Gym') return 'Gym'
    if (categoryId === 'Suplementos') return 'Suplementos'
    if (categoryId === 'Boxeo') return 'Boxeo'
    return 'Todos los productos'
  }

  if (loading) {
    return (
      <main className="item-list-container">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Cargando productos...</p>
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="item-list-container">
        <div className="container">
          <div className="error">
            <h2>❌ {error}</h2>
            <p>No se pudieron cargar los productos. Inténtalo de nuevo más tarde.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="item-list-container">
      <div className="container">
        {greeting && (
          <div className="welcome-section">
            <h1 className="welcome-title">{greeting}</h1>
            <p className="welcome-message">
              Descubre nuestra selección de productos de alta calidad
            </p>
          </div>
        )}
        
        {!greeting && (
          <div className="category-header">
            <h2 className="category-title">{getCategoryTitle()}</h2>
            <p className="category-subtitle">
              {products.length} producto{products.length !== 1 ? 's' : ''} encontrado{products.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <div className="no-products">
            <div className="no-products-content">
              <span className="no-products-icon">📦</span>
              <h3>No hay productos disponibles</h3>
              <p>No se encontraron productos en esta categoría</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default ItemListContainer