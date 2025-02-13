import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";

import Menu from "./Menu";
import {snacks, drinks} from "./test_setup";


describe("Test <Menu/> rendering for snacks", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <Menu items={snacks} title="Snacks"/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the Snack Menu component", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <Menu items={snacks} title="Snacks"/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Test <Menu/> rendering for drinks", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <Menu items={drinks} title="Drinks"/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the Drink Menu component", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <Menu items={drinks} title="Drinks"/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Make sure the Menu component has the proper elments displayed", function() {
  it("Snack menu contains the correct links and elements with the correct text", function() {
    const {getByText} = render((
      <MemoryRouter>
        <Menu items={snacks} title="Snacks"/>
      </MemoryRouter>
    ));

    const cardTitle = getByText("Snack Menu");
    expect(cardTitle).toBeInTheDocument();
    const cardText = getByText("Here's the list of snacks that we currently offer:");
    expect(cardText).toBeInTheDocument();
    const snackLink = getByText("Nachos");
    expect(snackLink).toBeInTheDocument();
    const addSnackButton = getByText("Add a new snack");
    expect(addSnackButton).toBeInTheDocument();
  });
  it("Drinks menu contains the correct links and elements with the correct text", function() {
    const {getByText} = render((
      <MemoryRouter>
        <Menu items={drinks} title="Dnacks"/>
      </MemoryRouter>
    ));

    const cardTitle = getByText("Drinks Menu");
    expect(cardTitle).toBeInTheDocument();
    const cardText = getByText("Here's the list of drinks that we currently offer:");
    expect(cardText).toBeInTheDocument();
    const drinksLink = getByText("Martini");
    expect(drinksLink).toBeInTheDocument();
    const addDrinkButton = getByText("Add a new drink");
    expect(addDrinkButton).toBeInTheDocument();
  });
});