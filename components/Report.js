import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Report = ({ questions, userAnswers, onRestart }) => {
  const router = useRouter();

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions?.length; i++) {
      if (userAnswers[i] === questions[i]?.correct_answer) {
        score++;
      }
    }
    return score;
  };

  const score = calculateScore();
  const percentage = (score / questions?.length) * 100;

  let performanceMessage = '';
  let performanceColor = '';

  if (percentage < 50) {
    performanceMessage = 'Poor Performance: A lot more to improve';
    performanceColor = 'text-red-500 flex justify-center p-2';
  } else if (percentage >= 50 && percentage <= 80) {
    performanceMessage = 'Average Performance: Improve more';
    performanceColor = 'text-yellow-500 flex justify-center p-2';
  } else {
    performanceMessage = 'Excellent Work: Keep it up';
    performanceColor = 'text-green-500 flex justify-center p-2';
  }

  const handleRestartClick = () => {
    router.reload()
  };

  return (
    <div className="p-4 bg-gray-100 items-center relative">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md absolute top-4 right-4"
        onClick={handleRestartClick}
      >
        Start New Test
      </button>
      <h2 className="text-2xl font-bold mb-4 flex">Quiz Report</h2>
      <p className="mb-2 bg-slate-200 round-md flex justify-center">
        Your Score: {score} / {questions?.length}
      </p>
      <p className={performanceColor}>{performanceMessage}</p>
      {questions &&
        questions.map((question, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white mb-4 shadow-md">
            <p className="font-bold">Question {index + 1}: {question?.question}</p>
            <div className="mt-2 space-y-2">
              {question?.incorrect_answers.map((choice, choiceIndex) => {
                const isSelected = userAnswers[index] === choice;
                const isCorrect = question?.correct_answer === choice;
                const isUserSelected = isSelected && !isCorrect;
                return (
                  <div
                    key={choiceIndex}
                    className={`flex items-center p-2 rounded-md ${
                      isUserSelected ? 'bg-red-100 text-red-700' : 'bg-white text-black'
                    }`}
                  >
                    <span className="mr-2">
                      {isSelected ? (
                        isCorrect ? (
                          <FaCheck className="text-green-500" />
                        ) : (
                          <FaTimes className="text-red-500" />
                        )
                      ) : null}
                    </span>
                    {choice}
                    {isSelected ? (
                      <span className={`ml-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        : Your Answer ({isCorrect ? 'Correct' : 'Incorrect'})
                      </span>
                    ) : null}
                  </div>
                );
              })}
              <div
                className={`${
                  userAnswers[index] === question?.correct_answer
                    ? 'bg-green-100 text-green-700'
                    : 'bg-green-100 text-green-700'
                } p-2 rounded-md shadow-xs`}
              >
                <FaCheck className="text-green-500 mr-2" />
                {question?.correct_answer}
                {userAnswers[index] === question?.correct_answer ? (
                  <span className="text-green-500 ml-2"> : Correct Answer</span>
                ) : null}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Report;
