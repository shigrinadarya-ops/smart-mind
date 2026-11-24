
"use client";

import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "SMART WRITE",
    subtitle: "Грамотность и работа с текстом",
    description: "Чтение, орфография, пунктуация и письменная речь.",
    href: "/modules/write",
  },
  {
    number: "02",
    title: "SMART THINK",
    subtitle: "Логика и развитие мышления",
    description: "Закономерности, головоломки, анализ и решение задач.",
    href: "/modules/think",
  },
  {
    number: "03",
    title: "SMART CHECK",
    subtitle: "Критическое мышление",
    description: "Проверка информации, аргументы и поиск противоречий.",
    href: "/modules/check",
  },
];

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-[#172119] text-[#eee9d8] px-5 py-10 md:px-12">
      <header className="max-w-6xl mx-auto flex justify-between items-center border-b border-[#65745f]/40 pb-6">
        <Link href="/" className="tracking-[0.25em] text-[#d4d5b5]">
          SMART MIND
        </Link>

        <Link href="/dashboard" className="text-sm text-[#c6cba9]">
          Личный кабинет
        </Link>
      </header>

      <section className="max-w-6xl mx-auto pt-16 pb-10">
        <p className="text-xs tracking-[0.3em] text-[#b6c39e]">
          НАПРАВЛЕНИЯ ОБУЧЕНИЯ
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mt-5">
          Исследуй. Думай. Анализируй.
        </h1>

        <p className="mt-5 max-w-2xl text-[#c1c9b5] leading-7">
          Выбирай направление, развивай навыки и отслеживай собственный
          прогресс в SMART MIND.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {modules.map((item) => (
          <Link
            href={item.href}
            key={item.number}
            className="group rounded-2xl border border-[#65745f]/50 bg-[#26372b] p-7 transition hover:bg-[#304333]"
          >
            <p className="text-sm tracking-[0.25em] text-[#aeb99b]">
              {item.number}
            </p>

            <h2 className="text-2xl font-serif mt-12">
              {item.title}
            </h2>

            <p className="text-[#d0d5bd] mt-3">{item.subtitle}</p>

            <p className="text-sm text-[#aeb99b] mt-5 leading-6">
              {item.description}
            </p>

            <p className="mt-10 text-sm text-[#d4d5b5] group-hover:underline">
              Перейти к модулю →
            </p>
          </Link>
        ))}
      </section>

      <footer className="max-w-6xl mx-auto mt-20 border-t border-[#65745f]/40 pt-6 text-sm text-[#aeb99b]">
        SMART MIND · Развитие интеллектуальных навыков
      </footer>
    </main>
  );
}
