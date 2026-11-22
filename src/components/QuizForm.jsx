import QuestionList from './QuestionList.jsx';
import Result from './Result.jsx';

function QuizForm({
  userAnswers,
  handleSubmit,
  setUserAnswers,
  isResult,
  score,
  resetForm,
  questions,
  validationError,
}) {
  const answeredCount = questions.filter(
    (question) => userAnswers[question.name] !== undefined,
  ).length;

  return (
    <section className="max-w-3xl mx-auto">
      {!isResult && (
        <div className="sticky top-3 z-10 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm rounded-lg px-4 py-2.5">
          <div className="flex justify-between text-sm text-gray-500 mb-1.5">
            <span>
              Отвечено: {answeredCount} из {questions.length}
            </span>
            <span>{Math.round((100 * answeredCount) / questions.length)}%</span>
          </div>
          <div className="h-1.5 bg-blue-50 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(100 * answeredCount) / questions.length}%` }}
            />
          </div>
        </div>
      )}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">Пройдите тест</h2>
        </div>
        <form
          key={isResult ? 'result' : 'form'}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-8 p-6"
        >
          <QuestionList
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            questions={questions}
            isResult={isResult}
          />
          {validationError && !isResult && (
            <p className="text-center text-red-500 font-medium" role="alert">
              {validationError}
            </p>
          )}
          {!isResult && (
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium"
              >
                Завершить тест
              </button>
            </div>
          )}
          {isResult && <Result score={score} resetForm={resetForm} />}
        </form>
      </div>
    </section>
  );
}

export default QuizForm;
