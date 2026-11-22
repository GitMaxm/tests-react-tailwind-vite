function Header() {
  return (
    <header className="container mx-auto px-4 py-8">
      <h1
        className="text-center text-4xl font-bold text-blue-600
          md:text-5xl"
      >
        Тест на тему "React"
      </h1>
      <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
        Интересный и познавательный тест для проверки ваших знаний
      </p>
    </header>
  );
}

export default Header;
