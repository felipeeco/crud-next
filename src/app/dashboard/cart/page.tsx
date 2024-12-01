import { cookies } from 'next/headers';
import { ItemCard } from './components/ItemCard';
import type { Product } from '../interfaces';
import { products } from '../products/products';

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = ( cart: { [id: string]:number } ): ProductInCart[] => {
 const productsInCart: ProductInCart[] = [];
 for(const id of Object.keys(cart)) {
    const product = products.find(product => product.id === id);
    if(product) productsInCart.push({ product:product, quantity: cart[id]})
 }
return productsInCart;
};

export default function cartPage() {
  
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');
  const productsInCart = getProductsInCart(cart);

  return (
    <div>
      <h1 className="text-5xl">Cart Page</h1>
      <hr className="mb-2" />
      <div className="flex flex-col sm:flex-rpw gap-2 w-full">
        <div className='flex flex-col gap-2 w-full sm:w-8/12'>
          {productsInCart.map(product => (
            <ItemCard 
              product={product.product} 
              quantity={product.quantity} 
              key={product.product.id} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}