import { useEffect, useRef } from 'react';

function Result({ score, resetForm }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section ref={sectionRef} className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
        <h2 className="text-2xl font-semibold mb-2">Ваши результаты</h2>
        <p className="mb-2">
          Правильные ответы: {score.correctCount} из {score.questionsCount}
        </p>
        <p className="mb-6">
          Процент: {Math.round((100 * score.correctCount) / score.questionsCount)}%
        </p>
        <button
          onClick={resetForm}
          className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium"
        >
          Пройти ещё раз
        </button>
      </div>
    </section>
  );
}

export default Result;
