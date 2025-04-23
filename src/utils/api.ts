export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }
  
  export async function getDrinks(filter: string): Promise<Drink[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`, {
      cache: 'force-cache', // Store the response in cache for 1 day
    });
    const data = await res.json();
    // console.log(data); // Log the response for debugging
    return data.drinks || [];
  }

  export async function getDrinkByIngredient(filter: string): Promise<Drink[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter}`, {
      cache: 'force-cache', // Store the response in cache for 1 day
      // cache: 'no-store', // Ensure fresh data on each request
    });
    const data = await res.json();
    // console.log(data); // Log the response for debugging
    return data.drinks || [];
  }
/*
export interface Category {
    catId: string;
    catName: string;
  }

export interface ProductImage {
    imgId: string;
    imgUrl: string;
    imgAlt: string; // bør være med
  }

export interface Drink {
    productId: string;
    productName: string;
    productDesc: string;
    productImage: ProductImage;
    productCategory: Category;
    productPrice: number;
  }


export async function getCoffee(filter: string): Promise<Drink[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter}`, {
    // const res = await fetch(`http://localhost:3000/api/drinks?filter=${filter}`, { //localhost
      cache: 'force-cache', // Store the response in cache for 1 day
      // cache: 'no-store', // Ensure fresh data on each request
    });
    const data = await res.json();
    // console.log(data); // Log the response for debugging
    return data.drinks || [];

*/

// TODO: Update E/R diagram
// TODO: Update API to macth E/R diagram

// Prompt for chat: This comes from a different table, so it is a foreign key, how do i do this with api?
// Use option 2