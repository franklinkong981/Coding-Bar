/*File that contains SnackOrBoozeApi which contains the methods to fetch and add snack/drink menu items. Uses db.json as the backend database
for snack and drink menu items through the json-server library. */

import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async addSnack(newSnack) {
    await axios.post(`${BASE_API_URL}/snacks`, {
      id: newSnack.name.toLowerCase(),
      name: newSnack.name,
      description: newSnack.description,
      recipe: newSnack.recipe,
      serve: newSnack.serve
    });
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addDrink(newDrink) {
    await axios.post(`${BASE_API_URL}/drinks`, {
      id: newDrink.name.toLowerCase(),
      name: newDrink.name,
      description: newDrink.description,
      recipe: newDrink.recipe,
      serve: newDrink.serve
    });
  }

}

export default SnackOrBoozeApi;
