import "./BookingForm.css";
import React, {useState} from "react";

const BookingForm = ({ availableTimes, onFormSubmit, dispatchTimes }) => {
  // Define state variables for each field in the form
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(availableTimes[0]);
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const isFormValid = date !== "" && time !== "" && numGuests >= 1 && numGuests <= 10;
  const [confirmationMessage, setConfirmationMessage] = useState("");



  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid){
      onFormSubmit({ date, time, numGuests, occasion });
      setConfirmationMessage("Reservation successful!"); // Set confirmation message
    }
    else{
      setConfirmationMessage(""); // Clear confirmation message if form is not valid
    }
    // You can perform actions like submitting to an API here
  };

  // Event handler for date change
  const handleDateChange = (e) => {
    const updatedDate = e.target.value;
    setDate(updatedDate);
    // Call dispatchTimes with the updated date
    dispatchTimes({ type: 'UPDATE_DATE', payload: updatedDate});
  };

  return (
    <form className="app__booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {console.log("Available Times:", availableTimes)} {/* Log here */}
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numGuests}
          onChange={(e) => setNumGuests(parseInt(e.target.value, 10))}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <input
        type="submit"
        aria-label="On Click"
        value="Make Your reservation"
        disabled={!isFormValid}
      />
      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
    </form>
  );
}

export default BookingForm;
