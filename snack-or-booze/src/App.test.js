import React from "react";
import axios from "axios";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";

//We are importing App because this component requires a URL parameter.
import App from "./App";
import {snacks, drinks} from "./test_setup";

jest.mock(axios);

axios.get.mockImplementation((url) => {
  if (url === 'http://localhost:5000/snacks') {
      return Promise.resolve({ data: snacks });
  } else if (url === 'http://localhost:5000/snacks') {
      return Promise.resolve({ data: drinks });
  }
});

describe("Test <App /> component rendering", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the App component", function() {
    const {asFragment} = render((
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});
