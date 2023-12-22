import "./BookingForm.css";
import React, {useState } from "react";

const BookingForm = ({ availableTimes, onFormSubmit, dispatchTimes }) => {
  // Define state variables for each field in the form
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ date, time, numGuests, occasion });
    // You can perform actions like submitting to an API here
  };

  // Event handler for date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
    // Call dispatchTimes with the updated date
      console.log("Dispatching action:", {
        type: "UPDATE_DATE",
        payload: e.target.value,
      });

    dispatchTimes({ type: 'UPDATE_DATE', payload: e.target.value });
  };

  return (
    <form className="app__booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numGuests}
        onChange={(e) => setNumGuests(parseInt(e.target.value, 10))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
