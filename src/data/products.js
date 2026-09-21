import { product } from './product'

export const products = [
  product,
  {
    ...product,
    id: 2,
    name: 'Sony ULT Wear',
    price: 199,
    originalPrice: 229,
  },
  {
    ...product,
    id: 3,
    name: 'Sony WH-CH720N',
    price: 119,
    originalPrice: 149,
  },
]
