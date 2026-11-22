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
    <section className="mx-auto max-w-3xl">
      {!isResult && (
        <div
          className="sticky top-3 z-10 rounded-lg border
            border-gray-100 bg-white/90 px-4 py-2.5 shadow-sm
            backdrop-blur-sm"
        >
          <div
            className="mb-1.5 flex justify-between text-sm
              text-gray-500"
          >
            <span>
              Отвечено: {answeredCount} из {questions.length}
            </span>
            <span>
              {Math.round((100 * answeredCount) / questions.length)}%
            </span>
          </div>
          <div
            className="h-1.5 overflow-hidden rounded-full bg-blue-50"
          >
            <div
              className="h-full rounded-full bg-blue-600
                transition-all duration-300"
              style={{
                width: `${(100 * answeredCount) / questions.length}%`,
              }}
            />
          </div>
        </div>
      )}
      <div
        className="overflow-hidden rounded-xl border border-gray-100
          bg-white shadow-lg"
      >
        <div className="p-6">
          <h2 className="text-center text-2xl font-bold">
            Пройдите тест
          </h2>
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
            <p
              className="text-center font-medium text-red-500"
              role="alert"
            >
              {validationError}
            </p>
          )}
          {!isResult && (
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-8 py-3
                  font-medium text-white"
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
