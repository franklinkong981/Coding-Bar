import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import SnackOrBoozeApi from "./Api";
import Home from "./Home";
import NavBar from "./NavBar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      let updatedSnacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks => updatedSnacks);
      let updatedDrinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks => updatedDrinks);
      setIsLoading(false);
    }
    getMenuItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
