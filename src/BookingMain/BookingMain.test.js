import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { initializeTimes, updateTimes } from "./yourBookingUtils"; // Update with the correct import path
import { fetchAPI } from "./api"; // Update with the correct import path

//TODO: create Extra file with the functions

// Mock the fetchAPI function to return a non-empty array for testing purposes
jest.mock("./api", () => ({
  fetchAPI: jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]),
}));

describe("Booking Utils", () => {
  // Update the test for initializeTimes
  test("initializeTimes returns non-empty array", async () => {
    const times = await initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });

  // Update the test for updateTimes
  test("updateTimes returns non-empty array with selected date", async () => {
    const selectedDate = new Date("2023-12-27");
    const times = await updateTimes({
      type: "UPDATE_DATE",
      payload: selectedDate,
    });
    expect(times.length).toBeGreaterThan(0);
  });
});
