import React from 'react';

const Question = ({ question, choices, onSelect, selectedChoice }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md md:min-w-[300px] transition-all duration-300">
        <h2 className="text-lg font-semibold mb-6">{question}</h2>
        <div className="space-y-4">
            {choices.map((choice, index) => (
            <label
                key={index}
                className={`block p-4 border ${
                selectedChoice === choice
                    ? 'bg-blue-100'
                    : 'border-gray-200 hover:bg-blue-100'
                } rounded cursor-pointer transition-all duration-300`}
            >
            <input
              type="radio"
              name="answer"
              value={choice}
              onChange={() => onSelect(choice)}
              checked={selectedChoice === choice}
              className="mr-2 leading-tight text-indigo-500"
            />
            <span className="text-gray-800">{choice}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
