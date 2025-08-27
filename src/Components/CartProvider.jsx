import { useState } from 'react'
import { CartContext } from '../Context/CartContext'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }])
    } else {
      setCart(prev => 
        prev.map(product => 
          product.id === item.id 
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      )
    }
  }

  const removeItem = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId))
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId)
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    cart,
    addItem,
    removeItem,
    clear,
    isInCart,
    getTotal,
    getTotalItems
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider