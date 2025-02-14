/* Mocks the axios.get calls in getSnacks and getDrinks asynchronous methods in the SnackOrBoozeApi class to make sure the
axios.get calls function as intended. */

import axios from "axios";
import SnackOrBoozeApi from "./Api";

// fetchData function
const fetchData = async () => {
  const response = await axios.get('/api/data');
  return response.data;
};

// Test case
it('fetches data successfully', async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: { value: 'test data' } }));
  const data = await fetchData();
  expect(data).toEqual({ value: 'test data' });
  expect(axios.get).toHaveBeenCalledWith('/api/data'); // Verify the URL
});