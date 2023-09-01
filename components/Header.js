import React from 'react';
import Timer from '@/components/Timer';

const Header = ({ userData, minutes, seconds, handleSubmitQuiz }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      <div className="flex items-center space-x-2 p-3 bg-gray-200  rounded-lg shadow-md mb-4 md:mb-0 hover:text-white hover:bg-blue-500 min-w-[12%]">
            <div className="flex flex-col ">
                <span className="text-lg font-semibold ">{userData.name}</span>
                <span className="text-sm">{userData.email}</span>
            </div>
        </div>
        <div className="mb-4 md:mb-0">
        <Timer minutes={minutes} seconds={seconds} />
        </div>
      <div className="md:ml-4">
            <button
                className="bg-gray-200  px-6 py-3 rounded-lg mt-4 md:mt-0 drop-shadow-md transition-all duration-300 hover:text-white hover:bg-blue-500"
                onClick={handleSubmitQuiz}
            >
            Submit Quiz
            </button>
        </div>
    </div>
  );
};

export default Header;
