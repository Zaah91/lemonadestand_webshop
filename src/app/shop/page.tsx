import DrinkCard from '@/components/DrinkCard';

// Define the type for the drinks
interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

// Fetch data directly on the server
async function getDrinks(): Promise<Drink[]> {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemonade', {
    cache: 'no-store', // Ensure fresh data on each request
  });
  const data = await res.json();
  return data.drinks || [];
}

export default async function ShopPage() {
  const drinks = await getDrinks();

  return (
    <div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Lemonade's with and without alcohol</h1>
        </header>
         
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      </div>
    </div>
  );
}

/*
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Shop Lemonade Drinks</h1>
        <p className="text-lg mt-2">Choose your favorite lemonade drinks.</p>
      </header>
      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mt-4">{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full object-cover mt-4" />
            <p className="text-lg font-bold mt-2">$10</p>
            <button
              className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
*/