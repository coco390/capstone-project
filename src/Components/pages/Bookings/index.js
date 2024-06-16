import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { fetchAPI, submitAPI } from "../../utilities/fakeAPI";
import pages from "../../utilities/pages";
import BookingForm from "./BookingForm";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
  };

  const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];

  const Bookings = () => {
    const [
      availableTimes,
      dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitData = formData => {
      const response = submitAPI(formData);
      if (response) navigate(pages.get('confirmedBooking').path);
    };

    return (
      <div className="bookings">
        <h2>Table reservation</h2>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      </div>
    );
  };

  export default Bookings;