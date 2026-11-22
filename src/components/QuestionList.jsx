function QuestionList({ userAnswers, setUserAnswers, questions, isResult }) {
  const handleChange = (questionName, answerValue) => {
    setUserAnswers((prev) => ({ ...prev, [questionName]: answerValue }));
  };

  return (
    <>
      {questions.map((question) => {
        const selected = userAnswers[question.name];

        return (
          <fieldset key={question.name} className="space-y-4 p-4 bg-blue-50 rounded-lg">
            <div className="text-lg font-semibold text-gray-800 px-2">{question.title}</div>
            <ul className="space-y-3">
              {question.answer.map((answer) => {
                const inputId = `${question.name}-${answer.value}`;
                const isSelected = selected === answer.value;

                let labelClass =
                  'flex items-center gap-3 p-3 rounded-lg transition-all duration-300 box-border border border-transparent';
                if (!isResult) {
                  labelClass += ' cursor-pointer hover:bg-blue-100';
                } else {
                  const isCorrect = answer.value === question.correct;
                  const isPicked = answer.value === selected;
                  if (isCorrect) labelClass += ' !border-green-500 bg-green-50';
                  if (isPicked && !isCorrect) labelClass += ' !border-red-500 bg-red-50';
                }

                return (
                  <li key={answer.value} className="bg-white rounded-lg">
                    <label htmlFor={inputId} className={labelClass}>
                      <input
                        id={inputId}
                        type="radio"
                        name={question.name}
                        value={answer.value}
                        checked={isSelected}
                        onChange={() => handleChange(question.name, answer.value)}
                        required
                        disabled={isResult}
                        className="h-5 w-5"
                      />
                      <span>{answer.text}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        );
      })}
    </>
  );
}

export default QuestionList;
