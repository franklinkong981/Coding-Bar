import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";

//We are importing App because this component requires a URL parameter.
import App from "./App";

describe("Test <MenuItem/> rendering for nachos", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter initialEntries={['/snacks/nachos']}>
        <App/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the MenuItem component for nachos", function() {
    const {asFragment} = render((
      <MemoryRouter initialEntries={['/snacks/nachos']}>
        <App/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

