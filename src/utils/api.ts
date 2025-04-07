export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }
  
  export async function getDrinks(filter: string): Promise<Drink[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`, {
      cache: 'no-store', // Ensure fresh data on each request
    });
    const data = await res.json();
    // console.log(data); // Log the response for debugging
    return data.drinks || [];
  }

  export async function getDrinkByIngredient(filter: string): Promise<Drink[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter}`, {
      cache: 'no-store', // Ensure fresh data on each request
    });
    const data = await res.json();
    // console.log(data); // Log the response for debugging
    return data.drinks || [];
  }
