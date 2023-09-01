import React from 'react';
import { PiExamBold } from 'react-icons/pi';

const OverviewPanel = ({ questions, currentQuestion, onQuestionClick, userAnswers }) => {

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md position-fixed ">
        <div className="flex items-center mb-4">
            <h2 className="w-11 h-10 text-2xl flex items-center justify-center text-blue-500 rounded-full bg-white mr-2">
            <PiExamBold />
             </h2>
        </div>
        <ul className="space-y-2">
            {questions.map((question, index) => {
                const isCurrent = currentQuestion === index;
                const isVisited = userAnswers[index] === null;
                const isAttempted = userAnswers[index] !== null;

                const listItemClasses = `
                    cursor-pointer py-4 px-4 rounded-full
                    ${isCurrent ? 'bg-blue-800 text-white' : ''}
                    ${isVisited && !isCurrent? 'bg-white-200' : ''}
                    ${isAttempted && !isVisited ? 'bg-green-200' : ''}
                    ${isCurrent && isAttempted ? 'bg-gray-600' : ''}  
                `;
            return (
                <li
                key={index}
                onClick={() => onQuestionClick(index)}
                className={listItemClasses}
                >
                {`${index + 1}`}
                </li>
            );
        })}
      </ul>
    </div>
  );
};

export default OverviewPanel;
