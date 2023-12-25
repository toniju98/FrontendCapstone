import { render, fireEvent } from "@testing-library/react";
import BookingMain from "./BookingMain";
import * as api from "../api/api";

// Mock the fetchAPI function
jest.mock("../api/api");

test("initializeTimes fetches and displays available times", async() => {
  const { findByLabelText } = render(<BookingMain />);

  // Wait for the component to fetch and render
  const timeSelect = await findByLabelText("Choose time");

  // Check if the available times are displayed in the dropdown
  expect(timeSelect).toBeInTheDocument();
});

test("updateTimes updates available times on date change", () => {
  api.fetchAPI.mockReturnValue(["17:00", "18:00"]);
  const { getByLabelText } = render(<BookingMain />);

  // Simulate a date change
  const dateInput = getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: "2024-01-01" } });

  // Access the availableTimes state after the date change
  // Access the availableTimes state after the date change
  const availableTimesElement = getByLabelText("Choose time");
  const availableTimes = Array.from(availableTimesElement.options).map(
    (option) => option.value
  );

  // Check if the times are updated
  expect(availableTimes).toEqual(["17:00", "18:00"]);
});
