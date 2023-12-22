import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

// Mock the dispatchTimes and onFormSubmit functions
const mockDispatchTimes = jest.fn();
const mockOnFormSubmit = jest.fn();

test('Renders the BookingForm heading', () => {
      const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={mockDispatchTimes}
        onFormSubmit={mockOnFormSubmit}/>);

    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

