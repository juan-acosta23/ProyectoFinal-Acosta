import { createContext } from 'react'

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  isInCart: () => false,
  getTotal: () => 0,
  getTotalItems: () => 0
})