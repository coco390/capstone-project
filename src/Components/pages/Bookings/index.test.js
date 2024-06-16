import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Bookings from './Bookings';

jest.mock('../../utilities/fakeAPI', () => ({
  fetchAPI: jest.fn(() => []),
  submitAPI: jest.fn(() => true),
}));

describe('Bookings Component', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    jest.clearAllMocks();
  });

  test('renders bookings form with available times', async () => {
    const { getByText } = render(
      <Router>
        <Bookings />
      </Router>
    );

    // Check if the title of the form is rendered
    expect(getByText('Table reservation')).toBeInTheDocument();
  });

  test('submits data and navigates to confirmed booking page on successful response', async () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <Bookings />
      </Router>
    );

    // Simulate filling out the form
    fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2024-06-17' } });
    fireEvent.change(getByLabelText('Time'), { target: { value: '18:00' } });

    // Simulate form submission
    fireEvent.click(getByText('Submit'));

    // Wait for the submission process to finish
    await waitFor(() => {
      // Check if submitAPI was called
      expect(submitAPI).toHaveBeenCalledWith({
        name: 'John Doe',
        date: '2024-06-17',
        time: '18:00',
      });

      // Check if navigation to confirmed booking page happened
      expect(window.location.pathname).toBe('/confirmed-booking');
    });
  });
});
