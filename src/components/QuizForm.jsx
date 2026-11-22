import QuestionList from './QuestionList.jsx';
import Result from './Result.jsx';

function QuizForm({ userAnswers, handleSubmit, setUserAnswers, isResult, score, resetForm, questions }) {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">Пройдите тест</h2>
        </div>
        <form
          key={isResult ? 'result' : 'form'}
          onSubmit={handleSubmit}
          className="space-y-8 p-6"
        >
          <QuestionList
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            questions={questions}
            isResult={isResult}
          />
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
