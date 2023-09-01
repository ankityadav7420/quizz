import Image from 'next/image'
import React, { useState } from 'react';
import StartPage from '../components/StartPage';
import Quiz from './quiz';

const Home = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handleStartQuiz = (name, email) => {
    setUserData({ name, email });
    setQuizStarted(true);
  };

  return (
    <div>
      {!quizStarted ? (
        <StartPage onStart={handleStartQuiz} />
      ) : (
        <Quiz userData={userData} />
      )}
    </div>
  );
};

export default Home;
