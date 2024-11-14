import { ProductCard } from '../components';

export interface ProductInterface {
  id    : string;
  name  : string;
  price : number;
  rating: number;
  image : string;
}

export const products:ProductInterface[] = [
  {
    id: 'UUID-ABC-1',
    name: 'Teslo Hoodie',
    price: 15,
    rating: 5,
    image: '/images/products/1623735-00-A_0_2000.jpg',
  },
  {
    id: 'UUID-ABC-2',
    name: 'Teslo Cap',
    price: 25,
    rating: 3,
    image: '/images/products/1657916-00-A_1.jpg',
  },
  {
    id: 'UUID-ABC-3',
    name: 'Let the sunshine',
    price: 36,
    rating: 2,
    image: '/images/products/1700280-00-A_1.jpg',
  },
  {
    id: 'UUID-ABC-4',
    name: 'Cybertruck Hoodie',
    price: 45,
    rating: 5,
    image: '/images/products/1742702-00-A_0_2000.jpg',
  },
]

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
       {products.map(product => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}