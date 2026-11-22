function Instruction() {
  return (
    <section className="mx-auto max-w-4xl">
      <div
        className="rounded-xl border border-gray-100 bg-white p-6
          shadow-lg"
      >
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          📋 Инструкция к тесту
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Этот тест состоит из нескольких вопросов с вариантами
            ответов.
          </p>
          <p>Для прохождения теста:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Выберите один вариант ответа на каждый вопрос</li>
            <li>Все вопросы обязательны для ответа</li>
            <li>После завершения вы увидите свои результаты</li>
          </ul>
          <p className="pt-2 font-medium">Удачи!</p>
        </div>
      </div>
    </section>
  );
}

export default Instruction;
