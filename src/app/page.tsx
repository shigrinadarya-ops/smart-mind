"use client";

import React, { useState } from "react";

type ModeId = "write" | "think" | "check";

interface ModeItem {
  id: ModeId;
  code: string;
  title: string;
  subtitle: string;
  sample: string;
}

const MODES: ModeItem[] = [
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

const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function HomePage() {
  const [grade, setGrade] = useState<number>(11);
  const [mode, setMode] = useState<ModeId>("write");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const activeMode = MODES.find((m) => m.id === mode) || MODES[0];

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
      className="relative min-h-screen antialiased"
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          style={{ backgroundColor: "rgba(14, 60, 45, 0.45)" }}
          className="animate-ambient-slow absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full blur-[130px]"
        />
        <div
          style={{ backgroundColor: "rgba(29, 117, 88, 0.22)" }}
          className="animate-ambient-reverse absolute -right-28 top-[22%] h-[460px] w-[460px] rounded-full blur-[150px]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
        <header className="animate-fade-rise glass-panel flex flex-col gap-5 rounded-3xl border border-emerald-800/35 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="space-y-2.5">
            <div
              style={{ backgroundColor: "rgba(14, 60, 45, 0.58)", color: "#a3d9b8" }}
              className="inline-flex items-center gap-2 rounded-full border border-[#a3d9b8]/25 px-3.5 py-1 text-xs font-medium tracking-wider"
            >
              <span
                style={{ backgroundColor: "#a3d9b8" }}
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

          <div
            style={{ backgroundColor: "rgba(9, 13, 11, 0.78)" }}
            className="flex shrink-0 items-center justify-between gap-4 rounded-2xl border border-[#a3d9b8]/15 px-4 py-3.5 sm:flex-col sm:items-start sm:gap-1.5"
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
              className="cursor-pointer rounded-xl border border-emerald-700/45 px-3.5 py-2 text-sm font-semibold focus:border-[#a3d9b8] focus:outline-none"
            >
              {GRADES.map((n) => (
                <option key={n} value={n}>
                  {n} класс
                </option>
              ))}
            </select>
          </div>
        </header>

        <section
          aria-label="Режимы работы"
          className="animate-fade-rise-delay-1 mt-5 grid gap-3.5 sm:grid-cols-3"
        >
          {MODES.map((item) => {
            const selected = item.id === mode;
            const cardClass = selected
              ? "glass-card-active -translate-y-0.5 border-[#a3d9b8]/55 rounded-2xl border p-4 text-left transition-all duration-300"
              : "glass-panel border-emerald-900/40 hover:-translate-y-0.5 hover:border-[#a3d9b8]/30 rounded-2xl border p-4 text-left transition-all duration-300";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setMode(item.id);
                  setError("");
                }}
                className={cardClass}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "#a6a093" }} className="font-mono text-[11px]">
                      {item.code}
                    </span>
                    <span
                      style={{ color: selected ? "#a3d9b8" : "#ede7da" }}
                      className="text-xs font-bold tracking-wider"
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    style={{ color: selected ? "#a3d9b8" : "#a6a093" }}
                    className="text-[10px] uppercase tracking-wider"
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

        <main className="animate-fade-rise-delay-2 mt-6 grid gap-6 lg:grid-cols-12">
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
                className="rounded-lg px-2 py-1 text-xs font-medium hover:bg-[#a3d9b8]/10"
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
              className="w-full rounded-2xl border border-emerald-900/50 p-4 text-sm leading-relaxed focus:border-[#a3d9b8]/65 focus:outline-none"
            />

            <div style={{ color: "#a6a093" }} className="flex items-center justify-between text-xs">
              <span>{grade} класс</span>
              <span>{input.length} символов</span>
            </div>

            {error && (
              <div className="rounded-2xl border border-amber-700/55 bg-amber-950/40 px-4 py-3 text-xs leading-relaxed text-amber-200">
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
                }}
                className="flex-1 rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110 disabled:opacity-50"
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
                  className="rounded-2xl border border-emerald-800/45 px-4 py-3.5 text-xs font-medium hover:text-[#ede7da]"
                >
                  Очистить
                </button>
              )}
            </div>
          </form>

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
                </span>
              </div>

              <div
                style={{ color: "rgba(237, 231, 218, 0.95)" }}
                className="mt-5 min-h-[250px] whitespace-pre-wrap text-sm leading-relaxed"
              >
                {loading ? (
                  <div className="space-y-3.5 pt-2">
                    <div className="shimmer-bar h-3.5 w-3/4 rounded-full" />
                    <div className="shimmer-bar h-3.5 w-full rounded-full" />
                    <div className="shimmer-bar h-3.5 w-5/6 rounded-full" />
                    <div className="shimmer-bar h-3.5 w-2/3 rounded-full" />
                  </div>
                ) : output ? (
                  <div className="animate-fade-rise">{output}</div>
                ) : (
                  <p style={{ color: "#a6a093" }}>
                    Выбери режим, подставь пример или введи свой текст слева. Здесь плавно появится разбор сильных сторон, зон роста и вопрос, который поможет продвинуть мысль дальше.
                  </p>
                )}
              </div>
            </div>

            <footer
              style={{ color: "#a6a093" }}
              className="mt-6 flex items-center justify-between border-t border-emerald-900/50 pt-4 text-xs"
            >
              <span>SMART MIND</span>
              <span>Глубина вместо шаблонов</span>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
