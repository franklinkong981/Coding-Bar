import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";

import NavBar from "./NavBar";

describe("Test <NavBar/> rendering", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the NavBar component", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Make sure NotFound component contains the correct content", function() {
  it("Make sure it contains the correct navlinks", function() {
    const {getByText} = render((
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    ));

    const navbarBrandLink = getByText("Snack or Booze");
    expect(navbarBrandLink).toBeInTheDocument();
    const snacksLink = getByText("Snacks");
    expect(snacksLink).toBeInTheDocument();
    const drinksLink = getByText("Drinks");
    expect(drinksLink).toBeInTheDocument();
  });
});
