import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";

import NotFound from "./NotFound";

describe("Test <NotFound/> rendering", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the NotFound component", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Make sure NotFound component contains the correct content", function() {
  it("Make sure it contains the not found message and home link", function() {
    const {getByText} = render((
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    ));

    const notFoundMessage = getByText("Hmmm. I can't seem to find the page you're looking for.");
    expect(notFoundMessage).toBeInTheDocument();
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });
});
