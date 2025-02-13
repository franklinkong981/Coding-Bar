import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";

import AddMenuItemForm from "./AddMenuItemForm";

const addItem = () => {
  console.log("Item added!");
};

describe("Test <AddMenuItemForm/> rendering for adding a snack", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <AddMenuItemForm addItemFunc={addItem} menuToAddTo="Snacks"/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the AddMenuItemForm component for adding snacks", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <AddMenuItemForm addItemFunc={addItem} menuToAddTo="Snacks"/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Test <AddMenuItemForm/> rendering for adding a drink", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <AddMenuItemForm addItemFunc={addItem} menuToAddTo="Drinks"/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the AddMenuItemForm component for adding drinks", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <AddMenuItemForm addItemFunc={addItem} menuToAddTo="Drinks"/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Make sure the AddMenuItemForm has the proper elements and text displayed", function() {
  it("makes sure the add menu item form for snacks contains the correct input forms and the correct text", function() {
    const {getByText, getByLabelText} = render((
      <MemoryRouter>
        <AddMenuItemForm addItemFunc={addItem} menuToAddTo="Snacks"/>
      </MemoryRouter>
    ));

    const formHeader = getByText("Add New Item to the Snacks Menu.");
    expect(formHeader).toBeInTheDocument();

    const nameInput = getByLabelText("Name:");
    expect(nameInput).toBeInTheDocument();
    const descriptionInput = getByLabelText("Description:");
    expect(descriptionInput).toBeInTheDocument();
    const recipeInput = getByLabelText("Recipe Instructions:");
    expect(recipeInput).toBeInTheDocument();
    const serveInput = getByLabelText("Serving Instructions:");
    expect(serveInput).toBeInTheDocument();

    const submitButton = getByText("Add Snack");
    expect(submitButton).toBeInTheDocument();
  });

  it("makes sure the add menu ite for drinks contains the correct text", function() {
    const {getByText} = render((
      <MemoryRouter>
        <AddMenuItemForm addItemFunc={addItem} menuToAddTo="Drinks"/>
      </MemoryRouter>
    ));

    const formHeader = getByText("Add New Item to the Drinks Menu.");
    expect(formHeader).toBeInTheDocument();

    const submitButton = getByText("Add Drink");
    expect(submitButton).toBeInTheDocument();
  });
});