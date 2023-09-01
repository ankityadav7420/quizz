import React from 'react';
import { BiSolidTimer } from 'react-icons/bi';

const Timer = ({ minutes, seconds }) => {
  const timeRemaining = minutes * 60 + seconds;

  return (
    <div className={`text-center mb-4 rounded-md ${timeRemaining < 300 ? 'bg-red-500' : 'bg-blue-400'}`}>
      <div className="flex items-center justify-center p-3 text-white rounded-lg shadow-md">
            <BiSolidTimer className="text-white mx-4 h-9 w-9" />
            <span className="text-xl font-bold">
                {minutes < 10 ? '0' + minutes : minutes}:
                {seconds < 10 ? '0' + seconds : seconds}
            </span>
            <span className="text-sm ml-2">Minutes left</span>
        </div>
    </div>
  );
};

export default Timer;
