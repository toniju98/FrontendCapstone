import "./BookingMain.css";
import WineBar from "../assets/Wine bar.svg";
import Arrow from "../assets/Keyboard arrow down.svg";
import ArrowUp from "../assets/Keyboard arrow up.svg";

import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //const [isSelected, setSelected] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setSelectedOption(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="app__booking-dropdown">
      <button
        className={`app__booking-drop ${selectedOption ? "selected" : ""}`}
        onClick={toggleDropdown}
      >
        {!selectedOption && <img src={WineBar} alt="Wine Bar" />}
        <span
          className={`app__booking-drop-text ${
            selectedOption ? "selected" : ""
          }`}
        >
          {selectedOption || "Occasion"}
        </span>
        {!selectedOption && <img src={Arrow} />}
        {selectedOption && <img src={ArrowUp} />}
      </button>
      {isDropdownOpen && (
        <ul className="app__booking-dropdown-list">
          <li onClick={() => handleOptionClick("Birthday")}>Birthday</li>
          <li onClick={() => handleOptionClick("Engagement")}>Engagement</li>
          <li onClick={() => handleOptionClick("Anniversary")}>Anniversary</li>
        </ul>
      )}
    </div>
  );
};


function BookingMain() {
  return (
   <div className="app__booking">
    <h1 className="app__booking-title">Book your table</h1>
    <DropdownMenu/>

   </div>
  );
}

export default BookingMain;
