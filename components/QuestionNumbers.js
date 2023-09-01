import React from 'react';

const QuestionNumbers = ({ questions, currentQuestion, userAnswers }) => {
  const numberOfRows = Math.ceil(questions.length / 5);

  return (
    <div className="border rounded-md p-4 bg-white shadow-md">
        <p className="text-center text-2xl font-semibold mb-4">Questions Summary</p>
        <div className="text-right text-sm font-light mb-2 space-x-2">
            <span className="bg-green-300 px-2 py-1 rounded-full">
                Attempted
            </span>
            <span className="bg-gray-300 px-2 py-1 rounded-full">
                To Be Solved
            </span>
        </div>
        {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-between mb-4">
            {questions.slice(rowIndex * 5, rowIndex * 5 + 5).map((question, index) => {
                const questionIndex = rowIndex * 5 + index;
                const isCurrent = currentQuestion === questionIndex;
                const isVisited = userAnswers[questionIndex] !== null;
                const isAttempted = userAnswers[questionIndex] !== null && userAnswers[questionIndex] !== '';

                const listItemClasses = `
                cursor-pointer py-2 px-3 rounded-full
                ${isCurrent ? 'bg-blue-600' : ''}
                ${isVisited ? (isAttempted ? 'bg-green-300' : 'bg-gray-300') : ''}
                ${!isVisited && !isAttempted ? 'text-gray-400' : ''}
                `;

            return (
              <div
                    key={questionIndex}
                    className={`flex items-center justify-center min-w-[12%] bg-gray-200 ${listItemClasses} w-17 h-12 rounded-full`}
                >
                    {`${questionIndex + 1}`}
                </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default QuestionNumbers;
