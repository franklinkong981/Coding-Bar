import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import SnackOrBoozeApi from "./Api";
import Home from "./Home";
import NavBar from "./NavBar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AddMenuItemForm from "./AddMenuItemForm";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    //upon initial loading, fetch current list of snacks and drinks from db.json using SnackOrBoozeApi class methods.
    async function getMenuItems() {
      let updatedSnacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(updatedSnacks);
      let updatedDrinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(updatedDrinks);
      setIsLoading(false);
    }
    getMenuItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const addSnack = async (newSnack) => {
    await SnackOrBoozeApi.addSnack(newSnack);
    let updatedSnacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(updatedSnacks);
  };

  const addDrink = async (newDrink) => {
    await SnackOrBoozeApi.addDrink(newDrink);
    let updatedDrinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(updatedDrinks);
  };

  return (
    <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home numberSnacks={snacks.length} numberDrinks={drinks.length} />
            </Route>

            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>

            <Route exact path="/snacks/add">
              <AddMenuItemForm addItemFunc={addSnack} menuToAddTo="Snacks" />
            </Route>
            <Route exact path="/drinks/add">
              <AddMenuItemForm addItemFunc={addDrink} menuToAddTo="Drinks" />
            </Route>

            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem items={drinks} cantFind="/drinks" />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
