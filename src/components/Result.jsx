import { useEffect, useRef } from 'react';

function Result({ score, resetForm }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-3xl space-y-8">
      <div
        className="rounded-xl border border-gray-100 bg-white p-8
          text-center shadow-lg"
      >
        <h2 className="mb-2 text-2xl font-semibold">
          Ваши результаты
        </h2>
        <p className="mb-2">
          Правильные ответы: {score.correctCount} из{' '}
          {score.questionsCount}
        </p>
        <p className="mb-6">
          Процент:{' '}
          {Math.round(
            (100 * score.correctCount) / score.questionsCount,
          )}
          %
        </p>
        <button
          onClick={resetForm}
          className="rounded-lg bg-green-500 px-6 py-2 font-medium
            text-white"
        >
          Пройти ещё раз
        </button>
      </div>
    </section>
  );
}

export default Result;
