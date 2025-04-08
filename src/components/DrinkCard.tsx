'use client';

import { useShop } from '@/context/ShopContext';
import Image from 'next/image';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const price = 10; // default price

export default function DrinkCard({ drink }: { drink: Drink }) {
  const { addToCart } = useShop();

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-bold">{drink.strDrink}</h3>
      <Image
        src= {`${drink.strDrinkThumb}/small`} // small image size from the API
        alt={drink.strDrink}
        width={200}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={() => addToCart({ id: drink.idDrink, name: drink.strDrink, price: price })} // Add item to cart
      >
        Add to Cart ($ {price})
      </button>
    </div>
  );
}