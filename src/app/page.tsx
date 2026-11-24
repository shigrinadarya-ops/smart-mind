"use client";

import { useState } from "react";

type ModeId = "write" | "think" | "check";

const MODES: {
  id: ModeId;
  code: string;
  title: string;
  subtitle: string;
  sample: string;
}[] = [
  {
    id: "write",
    code: "01",
    title: "SMART WRITE",
    subtitle: "Речь, структура и выразительность текста",
    sample:
      "Сильный текст начинается не со сложных слов, а с ясной мысли. Когда автор сам выстраивает переходы между идеями, читатель чувствует уверенность и логику.",
  },
  {
    id: "think",
    code: "02",
    title: "SMART THINK",
    subtitle: "Логика, связь причин и следствий",
    sample:
      "Если мы повторяем шаблон без понимания, почему он работает, любая новая деталь сбивает с толку. Настоящее понимание проверяется на изменённом условии.",
  },
  {
    id: "check",
    code: "03",
    title: "SMART CHECK",
    subtitle: "Факты, источники и проверка доводов",
    sample:
      "Утверждение кажется убедительным, когда звучит уверенно и опирается на популярный миф — но важно отделить проверяемый факт от красивой формулировки.",
  },
];

export default function HomePage() {
  const [grade, setGrade] = useState<number>(11);
  const [mode, setMode] = useState<ModeId>("write");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const activeMode = MODES.find((m) => m.id === mode) ?? MODES[0];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setOutput("");

    if (!input.trim()) {
      setError("Напиши черновик, рассуждение или тезис — наставнику нужен текст для разбора.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input,
          grade: `${grade} класс`,
          mode,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Не удалось получить разбор.");
      } else {
        setOutput(data.reply);
      }
    } catch {
      setError("Ошибка сети. Проверь подключение и попробуй снова.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{ backgroundColor: "#090d0b", color: "#ede7da" }}
      className="relative min-h-screen antialiased selection:bg-[#1d7558]/40 selection:text-[#a3d9b8]"
    >
      {/* Объёмное фоновое свечение */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          style={{ backgroundColor: "rgba(14, 60, 45, 0.45)" }}
          className="animate-ambient-slow absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full blur-[130px]"
        />
        <div
          style={{ backgroundColor: "rgba(29, 117, 88, 0.22)" }}
          className="animate-ambient-reverse absolute -right-28 top-[22%] h-[460px] w-[460px] rounded-full blur-[150px]"
        />
        <div
          style={{ backgroundColor: "rgba(163, 217, 184, 0.1)" }}
          className="animate-ambient-slow absolute bottom-[-160px] left-[28%] h-[380px] w-[520px] rounded-full blur-[140px]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
        {/* Шапка в стиле приглашения */}
        <header className="animate-fade-rise glass-panel flex flex-col gap-5 rounded-3xl border border-emerald-800/35 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="space-y-2.5">
            <div
              style={{ backgroundColor: "rgba(14, 60, 45, 0.58)", color: "#a3d9b8" }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#a3d9b8]/25 px-3.5 py-1 text-xs font-medium tracking-wider"
            >
              <span
                style={{
                  backgroundColor: "#a3d9b8",
                  boxShadow: "0 0 10px rgba(163, 217, 184, 0.85)",
                }}
                className="h-2 w-2 rounded-full"
              />
              SMART MIND • ПРИВАТНАЯ СТУДИЯ • 1–11 КЛАССЫ
            </div>
            <h1 style={{ color: "#ede7da" }} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Пространство, куда заходят думать
            </h1>
            <p style={{ color: "#a6a093" }} className="max-w-2xl text-sm leading-relaxed">
              Никаких готовых шпаргалок и суеты. Спокойный разбор твоих мыслей, аргументов и текстов с точными подсказками и живым откликом.
            </p>
          </div>

          {/* Выбор класса */}
          <div
            style={{ backgroundColor: "rgba(9, 13, 11, 0.78)" }}
            className="flex shrink-0 items-center justify-between gap-4 rounded-2xl border border-[#a3d9b8]/15 px-4 py-3.5 transition duration-300 hover:border-[#a3d9b8]/35 sm:flex-col sm:items-start sm:gap-1.5"
          >
            <label
              htmlFor="grade"
              style={{ color: "#a6a093" }}
              className="text-[11px] font-semibold uppercase tracking-widest"
            >
              Уровень
            </label>
            <select
              id="grade"
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
              style={{ backgroundColor: "#101613", color: "#a3d9b8" }}
              className="cursor-pointer rounded-xl border border-emerald-700/45 px-3.5 py-2 text-sm font-semibold transition duration-200 hover:border-[#a3d9b8]/60 focus:border-[#a3d9b8] focus:outline-none"
            >
              {Array.from({ length: 11 }, (_, idx) => idx + 1).map((n) => (
                <option key={n} value={n}>
                  {n} класс
                </option>
              ))}
            </select>
          </div>
        </header>

        {/* Режимы с плавным откликом */}
        <section
          aria-label="Режимы работы"
          className="animate-fade-rise-delay-1 mt-5 grid gap-3.5 sm:grid-cols-3"
        >
          {MODES.map((item) => {
            const selected = item.id === mode;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setMode(item.id);
                  setError("");
                }}
                className={`group rounded-2xl border p-4 text-left transition-all duration-300 ease-out active:scale-[0.985] ${
                  selected
                    ? "glass-card-active -translate-y-0.5 border-[#a3d9b8]/55"
                    : "glass-panel border-emerald-900/40 hover:-translate-y-0.5 hover:border-[#a3d9b8]/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "rgba(166, 160, 147, 0.8)" }} className="font-mono text-[11px]">
                      {item.code}
                    </span>
                    <span
                      style={{ color: selected ? "#a3d9b8" : "#ede7da" }}
                      className="text-xs font-bold tracking-wider transition-colors duration-300 group-hover:text-[#a3d9b8]"
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    style={{
                      backgroundColor: selected ? "rgba(163, 217, 184, 0.15)" : "transparent",
                      color: selected ? "#a3d9b8" : "rgba(166, 160, 147, 0.75)",
                    }}
                    className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider transition-colors duration-300"
                  >
                    {selected ? "Активен" : "Открыть"}
                  </span>
                </div>
                <p style={{ color: "#a6a093" }} className="mt-2 text-xs leading-relaxed">
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </section>

        {/* Основной рабочий блок */}
        <main className="animate-fade-rise-delay-2 mt-6 grid gap-6 lg:grid-cols-12">
          {/* Ввод */}
          <form
            onSubmit={handleSubmit}
            className="glass-panel space-y-4 rounded-3xl border border-emerald-800/35 p-6 lg:col-span-6"
          >
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="prompt"
                style={{ color: "#a6a093" }}
                className="text-xs font-semibold uppercase tracking-widest"
              >
                {activeMode.title} • Твой материал
              </label>
              <button
                type="button"
                onClick={() => {
                  setInput(activeMode.sample);
                  setError("");
                }}
                style={{ color: "#a3d9b8" }}
                className="rounded-lg px-2 py-1 text-xs font-medium transition duration-200 hover:bg-[#a3d9b8]/10 active:scale-95"
              >
                Подставить пример
              </button>
            </div>

            <textarea
              id="prompt"
              rows={8}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напиши черновик текста, аргумент или утверждение..."
              style={{ backgroundColor: "rgba(9, 13, 11, 0.82)", color: "#ede7da" }}
              className="w-full rounded-2xl border border-emerald-900/50 p-4 text-sm leading-relaxed placeholder-[#a6a093]/45 transition duration-300 focus:border-[#a3d9b8]/65 focus:outline-none focus:ring-2 focus:ring-[#a3d9b8]/15"
            />

            <div style={{ color: "#a6a093" }} className="flex items-center justify-between text-xs">
              <span>{grade} класс</span>
              <span>{input.length} символов</span>
            </div>

            {error && (
              <div className="animate-fade-rise rounded-2xl border border-amber-700/55 bg-amber-950/40 px-4 py-3 text-xs leading-relaxed text-amber-200">
                {error}
              </div>
            )}

            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "linear-gradient(90deg, #1d7558 0%, #0e3c2d 100%)",
                  color: "#ede7da",
                  boxShadow: "0 12px 30px -10px rgba(29, 117, 88, 0.8)",
                }}
                className="flex-1 rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Наставник вникает..." : "Разобрать мысль"}
              </button>
              {input && (
                <button
                  type="button"
                  onClick={() => {
                    setInput("");
                    setOutput("");
                    setError("");
                  }}
                  style={{ backgroundColor: "rgba(22, 31, 26, 0.85)", color: "#a6a093" }}
                  className="rounded-2xl border border-emerald-800/45 px-4 py-3.5 text-xs font-medium transition duration-200 hover:border-[#a3d9b8]/35 hover:text-[#ede7da] active:scale-95"
                >
                  Очистить
                </button>
              )}
            </div>
          </form>

          {/* Вывод разбора */}
          <section className="glass-panel flex flex-col justify-between rounded-3xl border border-emerald-800/35 p-6 lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/50 pb-4">
                <div>
                  <span style={{ color: "#a3d9b8" }} className="text-[11px] font-semibold uppercase tracking-widest">
                    Разбор наставника
                  </span>
                  <h2 style={{ color: "#ede7da" }} className="mt-0.5 text-base font-semibold">
                    {activeMode.title}
                  </h2>
                </div>
                <span
                  style={{ backgroundColor: "rgba(9, 13, 11, 0.78)", color: "#a6a093" }}
                  className="rounded-full border border-[#a3d9b8]/20 px-3 py-1 text-xs"
                >
                  {grade} класс
                
