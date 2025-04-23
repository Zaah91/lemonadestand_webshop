import DrinkCard from '@/components/DrinkCard';
import { getDrinkByIngredient, Drink } from '@/utils/api';

export default async function ShopPage() {
  const drinks:Drink[] = await getDrinkByIngredient('lemonade');

  return (
    <div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Lemonade's with and without alcohol</h1>
        </header>
         
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      </div>
    </div>
  );
}