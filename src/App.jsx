import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Instruction from './components/Instruction.jsx';
import QuizForm from './components/QuizForm.jsx';
import questions from './data/questions.json';

function App() {
  const [isResult, setIsResult] = useState(false);
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [validationError, setValidationError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Кнопка сабмита удаляется при remount формы; снятие фокуса заранее предотвращает автоскролл, отменяющий скролл к результатам
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    const unanswered = questions.filter(
      (question) => userAnswers[question.name] === undefined,
    );

    if (unanswered.length > 0) {
      setValidationError(
        unanswered.length === questions.length
          ? 'Все вопросы обязательны для ответа'
          : `Осталось ответить на ${unanswered.length} ${unanswered.length === 1 ? 'вопрос' : unanswered.length < 5 ? 'вопроса' : 'вопросов'}`,
      );
      return;
    }

    setValidationError(null);
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
    setValidationError(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main
        className="container mx-auto flex-grow space-y-8 px-4 pb-12"
      >
        <Instruction />
        <QuizForm
          handleSubmit={handleSubmit}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isResult={isResult}
          score={score}
          resetForm={resetForm}
          questions={questions}
          validationError={validationError}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
