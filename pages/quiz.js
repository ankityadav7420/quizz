import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Report from '../components/Report';
import { fetchQuizData } from '../utils/api';
import OverviewPanel from '../components/OverviewPanel';
import Question from '@/components/Question';
import NavigationButtons from '../components/NavigationButtons';
import QuestionNumbers from '../components/QuestionNumbers';
import Header from '../components/Header'


const Quiz = ({ userData }) => {
  const quiz_time = process.env.NEXT_PUBLIC_QUIZ_TIME_COUNT || 1800;
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(quiz_time);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchQuizData();
      setQuestions(data);
      setUserAnswers(Array(data.length).fill(null));
    }

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      handleSubmitQuiz();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleQuestionClick = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };

  const handleQuestionSelect = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };



  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {submitted ? (
        <Report questions={questions} userAnswers={userAnswers} />
      ) : (
        <>
          <div className={`p-1 overflow-y-auto hidden md:block`}>
            <OverviewPanel
              questions={questions}
              currentQuestion={currentQuestion}
              onQuestionClick={handleQuestionClick}
              userAnswers={userAnswers}
            />
          </div>
          <div className="w-full  p-4 overflow-y-auto">
            <div className="px-4">
              <div className="w-95%">

              <Header
                  userData={userData}
                  minutes={minutes}
                  seconds={seconds}
                  handleSubmitQuiz={handleSubmitQuiz}
                />
                <Question
                  question={questions[currentQuestion]?.question || ''}
                  choices={[
                    ...questions[currentQuestion]?.incorrect_answers || [],
                    questions[currentQuestion]?.correct_answer || '',
                  ]}
                  onSelect={handleQuestionSelect}
                  selectedChoice={userAnswers[currentQuestion]}
                />
                <div className="flex justify-between mt-4">
                  <NavigationButtons
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    isPreviousDisabled={currentQuestion === 0}
                    isNextDisabled={currentQuestion === questions.length - 1}
                  />
                </div>
                <div className="mt-4">
                  <QuestionNumbers
                    questions={questions}
                    currentQuestion={currentQuestion}
                    userAnswers={userAnswers}
                    onQuestionClick={handleQuestionClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
