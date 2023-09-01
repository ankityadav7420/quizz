import React, { useState } from 'react';

const StartPage = ({ onStart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleStartClick = () => {
    if (name.trim() !== '' && isValidEmail(email)) {
      onStart(name, email);
    } else {
      setIsNameValid(name.trim() !== '');
      setIsEmailValid(isValidEmail(email));
    }
  };

  const isValidEmail = (input) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold mb-4">Welcome to the Quiz!</h1>
      <div className={`mb-4 transition rounded-md ${isNameValid ? 'border' : 'border-red-500'} focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-50`}>
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 w-72 border outline-none shadow-md"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setIsNameValid(true);
          }}
        />
      </div>
      {!isNameValid && (
        <p className="text-red-500 text-sm mb-2">Please enter a valid name.</p>
      )}
      <div className={`mb-4 transition rounded-lg ${isEmailValid ? 'border' : 'border-red-500'} focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-50`}>
        <input
          type="text"
          placeholder="Email"
          className="px-4 py-2 w-72 border outline-none"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(true);
          }}
        />
      </div>
      {!isEmailValid && (
        <p className="text-red-500 text-sm mb-2">Please enter a valid email.</p>
      )}
      <button
        className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={handleStartClick}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;
