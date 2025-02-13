import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";

import Home from "./Home";

describe("Test <Home/> rendering", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <Home numberSnacks={3} numberDrinks={4}/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the Home component", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <Home numberSnacks={3} numberDrinks={4}/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Test the <Home /> component content rendered", function() {
  it("displays the correct text and elements", function() {
    const {getByText} = render((
      <MemoryRouter>
        <Home numberSnacks={3} numberDrinks={4}/>
      </MemoryRouter>
    ));

    const homeHeader = getByText("Welcome to Silicon Valley's Premier Coding Cafe/Bar: Snack or Booze!");
    expect(homeHeader).toBeInTheDocument();
    const numberSnacksDrinks = getByText("We currently have 3 snacks and 4 drinks on our menu!");
    expect(numberSnacksDrinks).toBeInTheDocument();
    const snackMenuLink = getByText("Snack Menu");
    expect(snackMenuLink).toBeInTheDocument();
    const drinkMenuLink = getByText("Drinks Menu");
    expect(drinkMenuLink).toBeInTheDocument();
  });
});