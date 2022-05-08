import { createContext, useContext } from 'react'

export interface CartContext {
  cart: CartItem[]
  setCart: Function
}




export const CartContext = createContext<CartContext>({
  cart: [],
  setCart: (articles: Article[]) => {},
})
export const useCartContext = () => useContext(CartContext)
