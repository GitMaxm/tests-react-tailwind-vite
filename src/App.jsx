import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Instruction from './components/Instruction.jsx';
import QuizForm from './components/QuizForm.jsx';
import questions from './data/questions.js';

function App() {
  const [isResult, setIsResult] = useState(false);
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let correctCount = 0;
    questions.forEach((question) => {
      if (userAnswers[question.name] === question.correct) {
        correctCount += 1;
      }
    });
    setScore({ correctCount, questionsCount: questions.length });
    setIsResult(true);
  };

  const resetForm = () => {
    setIsResult(false);
    setUserAnswers({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="space-y-8 flex-grow container mx-auto px-4 pb-12">
        <Instruction />
        <QuizForm
          handleSubmit={handleSubmit}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isResult={isResult}
          score={score}
          resetForm={resetForm}
          questions={questions}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
