import "./BookingMain.css";
import BookingForm from "../BookingForm/BookingForm";
import React, { useReducer } from 'react';
import { fetchAPI,submitAPI } from "../api/api";


function BookingMain() {
  // Function to initialize available times
  const initializeTimes = () => {
  try {
    // Fetch available times for today's date
    const today= new Date()
    const times = fetchAPI(today)
    return times || [];
  } catch (error) {
    console.error('Error fetching available times:', error);
    // Handle error as needed
    return [];
  }
}
 const updateTimes = (state, action) => {
   const { type, payload } = action;

   switch (type) {
     case "UPDATE_DATE":
       // Assuming state is an array (availableTimes) that needs to be updated
       const updatedTimes = fetchAPI(new Date(payload));
       return updatedTimes;

     // Handle other action types if needed
     default:
       return state;
   }
 };

  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,[],
    initializeTimes
  );


  const handleFormSubmit = (formData) => {
    // Handle the form submission, you can access the form data here
    console.log("Form Data:", formData);
    submitAPI(formData);

  };
  return (
    <section className="app__booking">
      <h1 className="app__booking-title">Book your table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        onFormSubmit={handleFormSubmit}
      />
    </section>
  );
}

export default BookingMain;
