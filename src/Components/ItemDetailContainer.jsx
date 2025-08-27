import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true)
        const docRef = doc(db, 'products', itemId)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() })
        } else {
          setError('Producto no encontrado')
        }
      } catch (error) {
        console.error('Error obteniendo producto:', error)
        setError('Error al cargar el producto')
      } finally {
        setLoading(false)
      }
    }

    getProduct()
  }, [itemId])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="spinner"></div>
          <p>Cargando producto...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <h2>❌ {error}</h2>
          <p>El producto que buscas no existe o no se pudo cargar.</p>
        </div>
      </div>
    )
  }

  return product ? <ItemDetail product={product} /> : null
}

export default ItemDetailContainer