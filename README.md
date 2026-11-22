# Тест на тему "React"

Одностраничный квиз на 12 вопросов по HTML, CSS, JavaScript и React: выбираешь один вариант на каждый вопрос, после отправки видишь счёт, процент и подсветку правильных и ошибочных ответов. Данные вопросов лежат в `src/data/questions.json` — новые тесты добавляются без изменения кода.

## Стек

React 19, Vite, Tailwind CSS 4.

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
```

Команды: `npm run build` (сборка в `dist/`), `npm run preview` (проверка собранной версии).

## Структура

- `src/components/` — Header, Instruction, QuizForm, QuestionList, Result, Footer
- `src/data/questions.json` — вопросы, варианты ответов и правильные ответы
- `public/` — фавиконка и статические ассеты
