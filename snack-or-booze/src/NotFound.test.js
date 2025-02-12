import React from "react";
import {render} from "@testing-library/react";
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
