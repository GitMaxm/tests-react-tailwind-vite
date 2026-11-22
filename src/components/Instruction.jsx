function Instruction() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-2xl mb-4 text-gray-800 font-bold">📋 Инструкция к тесту</h2>
        <div className="space-y-3 text-gray-700">
          <p>Этот тест состоит из нескольких вопросов с вариантами ответов.</p>
          <p>Для прохождения теста:</p>
          <ul className="list-disc pl-5 space-y-1">
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
