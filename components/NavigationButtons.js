import React from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

const NavigationButtons = ({ handlePrevious, handleNext, isPreviousDisabled, isNextDisabled }) => {
  return (
    <div className="flex justify-between mt-4 m-4">
      <button
            className={`border px-6 py-3 m-6 rounded-lg flex items-center space-x-2 transition-transform transform hover:bg-gray-400 hover:scale-105 ${
            isPreviousDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
        >
        <FaLessThan />
        Previous
      </button>
      <button
            className={`border px-6 py-3 rounded-lg m-6 flex items-center space-x-2 transition-transform transform hover:bg-gray-400 hover:scale-105 ${
            isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={handleNext}
            disabled={isNextDisabled}
        >
        Next
        <FaGreaterThan />
      </button>
    </div>
  );
};

export default NavigationButtons;
