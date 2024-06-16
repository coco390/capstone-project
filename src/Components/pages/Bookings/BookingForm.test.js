import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock props for testing
const mockAvailableTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
const mockDispatchOnDateChange = jest.fn();
const mockSubmitData = jest.fn();

describe('BookingForm Component', () => {
  test('renders BookingForm component correctly', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
        submitData={mockSubmitData}
      />
    );

    // Assert Date input
    const dateInput = screen.getByLabelText('Date');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');

    // Assert Time select
    const timeSelect = screen.getByLabelText('Time');
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('name', 'booking-time');

    // Assert Number of guests input
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');

    // Assert Occasion select
    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('name', 'booking-occasion');

    // Assert Submit button
    const submitButton = screen.getByText('Make your reservation');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('submits the form with correct data', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
        submitData={mockSubmitData}
      />
    );

    // Fill form fields
    const dateInput = screen.getByLabelText('Date');
    fireEvent.change(dateInput, { target: { value: '2024-06-18' } });

    const timeSelect = screen.getByLabelText('Time');
    fireEvent.change(timeSelect, { target: { value: '11:00 AM' } });

    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '5' } });

    const occasionSelect = screen.getByLabelText('Occasion');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Submit form
    const submitButton = screen.getByText('Make your reservation');
    fireEvent.click(submitButton);

    // Assert submitData function was called with correct data
    expect(mockSubmitData).toHaveBeenCalledWith({
      date: '2024-06-18',
      time: '11:00 AM',
      numberOfGuests: '5',
      occasion: 'Birthday'
    });
  });

  test('validates form fields correctly', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
        submitData={mockSubmitData}
      />
    );

    // Submit without filling fields
    const submitButton = screen.getByText('Make your reservation');
    fireEvent.click(submitButton);

    // Assert error messages
    expect(screen.getByText('Please choose a valid date')).toBeInTheDocument();
    expect(screen.getByText('Please choose a valid time')).toBeInTheDocument();
    expect(screen.getByText('Please enter a number between 1 and 10')).toBeInTheDocument();
    expect(screen.getByText('Please choose a valid occasion')).toBeInTheDocument();
  });
});