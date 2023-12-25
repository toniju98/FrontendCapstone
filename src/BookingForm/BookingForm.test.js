import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

// Mock the dispatchTimes and onFormSubmit functions
const mockDispatchTimes = jest.fn();
const mockOnFormSubmit = jest.fn();
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test('Renders the BookingForm heading', () => {

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={mockDispatchTimes}
        onFormSubmit={mockOnFormSubmit}/>);

    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})


 test("date input has required attribute", () => {
   const { getByLabelText } = render(
     <BookingForm
       availableTimes={availableTimes}
       dispatchTimes={mockDispatchTimes}
       onFormSubmit={mockOnFormSubmit}
     />
   );
   const dateInput = getByLabelText("Choose date");

   expect(dateInput).toHaveAttribute("required");
 });


//test for valid case

test('handleSubmit is called on valid form submission', () => {
  const { getByLabelText, getByText } = render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchTimes={mockDispatchTimes}
      onFormSubmit={mockOnFormSubmit}
    />
  );

  // Simulate valid form input
  fireEvent.change(getByLabelText('Choose date'), { target: { value: '2024-01-01' } });
  fireEvent.change(getByLabelText('Choose time'), { target: { value: '17:00' } });
  fireEvent.change(getByLabelText('Number of guests'), { target: { value: "5" } });

  expect(getByLabelText("Choose date").value).toBe("2024-01-01");
  expect(getByLabelText("Choose time").value).toBe("17:00");
  expect(getByLabelText("Number of guests").value).toBe("5");
  // Submit the form
  fireEvent.click(getByText('Make Your reservation'));

  // Expect handleSubmit to be called
  expect(mockOnFormSubmit).toHaveBeenCalledWith({
    date: '2024-01-01',
    time: '17:00',
    numGuests: 5,
    occasion: '',
  });
});


test("handleSubmit is called on valid form submission", () => {
  const { getByLabelText, getByText } = render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchTimes={mockDispatchTimes}
      onFormSubmit={mockOnFormSubmit}
    />
  );

  // Simulate valid form input
  fireEvent.change(getByLabelText("Choose date"), {
    target: { value: "2024-01-01" },
  });
  fireEvent.change(getByLabelText("Choose time"), {
    target: { value: "12:00" },
  });
  fireEvent.change(getByLabelText("Number of guests"), {
    target: { value: "20" },
  });


  // Submit the form
  fireEvent.click(getByText("Make Your reservation"));

  // Expect handleSubmit to be called
   expect(mockOnFormSubmit).not.toHaveBeenCalled();

});

// Add similar tests for invalid cases, e.g., submitting with empty fields


