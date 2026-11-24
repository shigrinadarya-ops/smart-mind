
"use client";

import React, { useState } from "react";

const modules = [
  {
    id: "write",
    number: "01",
    title: "SMART WRITE",
    subtitle: "Грамотность и работа с текстом",
    color: "#c9d8b6",
  },
  {
    id: "think",
    number: "02",
    title: "SMART THINK",
    subtitle: "Логика и развитие мышления",
    color: "#c5d2d9",
  },
  {
    id: "check",
    number: "03",
    title: "SMART CHECK",
    subtitle: "Критическое мышление и анализ",
    color: "#d8c6a5",
  },
];

export default function HomePage() {
  const [mode, setMode] = useState("write");
  const [grade, setGrade] = useState("11");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [workspace, setWorkspace] = useState(false);

  const active = modules.find((m) => m.id === mode)!;

  async function analyze(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setOutput("");

    if (!input.trim()) {
      setError("Добавь текст для анализа.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input,
          grade: grade + " класс",
          mode,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ошибка сервера.");
      }

      if (typeof data.reply !== "string") {
        throw new Error("Некорректный ответ наставника.");
      }

      setOutput(data.reply);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ошибка соединения."
      );
    } finally {
      setLoading(false);
    }
  }

  const glass: React.CSSProperties = {
    background: "rgba(25, 32, 25, 0.65)",
    border: "1px solid rgba(223, 229, 202, 0.2)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "22px",
  };

  const button: React.CSSProperties = {
    background: "#e8e2cf",
    color: "#263126",
    border: "none",
    padding: "16px 34px",
    borderRadius: "40px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "2px",
    transition: "all .3s ease",
  };

  return (
    <main className="site">

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #172119;
        }

        .site {
          min-height: 100vh;
          background: #172119;
          color: #f1efdf;
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        /* HERO */

        .hero {
          position: relative;
          min-height: 720px;
          height: 100svh;
          max-height: 1100px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30px 6%;
          isolation: isolate;
          overflow: hidden;
          background: #172119;
        }

        .hero-art {
          position: absolute;
          inset: -5%;
          z-index: -3;
          background-image: url("/IMG_6655.jpeg");
          background-size: cover;
          background-position: center;
          animation: paintingZoom 42s ease-in-out infinite alternate;
          will-change: transform;
        }

        .hero-shade {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(
              180deg,
              rgba(15, 20, 14, .48),
              rgba(15, 20, 14, .12) 42%,
              rgba(18, 27, 19, .72) 82%,
              #172119 100%
            );
        }

        .fog {
          position: absolute;
          inset: -30%;
          z-index: -1;
          pointer-events: none;
          filter: blur(42px);
          opacity: .75;
          background:
            radial-gradient(
              ellipse at 20% 60%,
              rgba(229, 226, 205, .35),
              transparent 42%
            ),
            radial-gradient(
              ellipse at 70% 40%,
              rgba(207, 218, 192, .27),
              transparent 44%
            ),
            radial-gradient(
              ellipse at 48% 78%,
              rgba(229, 221, 200, .23),
              transparent 38%
            );
          animation: fogDrift 34s ease-in-out infinite alternate;
        }

        .fog-two {
          opacity: .55;
          filter: blur(60px);
          background:
            radial-gradient(
              ellipse at 75% 70%,
              rgba(226, 225, 207, .3),
              transparent 42%
            ),
            radial-gradient(
              ellipse at 25% 35%,
              rgba(190, 207, 177, .25),
              transparent 43%
            );
          animation: fogDriftTwo 45s ease-in-out infinite alternate;
        }

        .fog-three {
          opacity: .35;
          filter: blur(75px);
          background:
            radial-gradient(
              ellipse at 50% 50%,
              rgba(235, 230, 210, .25),
              transparent 50%
            );
          animation: fogDrift 55s ease-in-out infinite alternate-reverse;
        }

        @keyframes paintingZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.14);
          }
        }

        @keyframes fogDrift {
          from {
            transform: translate(-5%, 2%) scale(1);
          }
          to {
            transform: translate(7%, -4%) scale(1.13);
          }
        }

        @keyframes fogDriftTwo {
          from {
            transform: translate(7%, -3%) scale(1.1);
          }
          to {
            transform: translate(-8%, 5%) scale(1);
          }
        }

        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-nav,
        .hero-bottom,
        .hero-center {
          position: relative;
          z-index: 2;
        }

        .hero-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          animation: appear 1.4s ease both;
        }

        .brand {
          font-size: 19px;
          font-weight: 700;
          letter-spacing: 4px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          color: #f1efdf;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 1px;
          transition: opacity .3s;
        }

        .nav-links a:hover {
          opacity: .65;
        }

        .hero-center {
          max-width: 900px;
          width: 100%;
          margin: auto;
          text-align: center;
          padding: 50px 0;
          animation: appear 2s ease both;
        }

        .hero-eyebrow {
          color: #e6e0c9;
          font-size: 11px;
          letter-spacing: 5px;
          margin-bottom: 25px;
        }

        .hero-title {
          margin: 0;
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(52px, 10vw, 112px);
          line-height: 1.05;
          letter-spacing: 5px;
          color: #f2edda;
          text-shadow: 0 5px 35px rgba(0,0,0,.25);
        }

        .hero-description {
          max-width: 490px;
          margin: 28px auto 35px;
          color: #e6e3d4;
          font-size: 14px;
          line-height: 1.9;
          letter-spacing: .4px;
        }

        .start-button {
          background: #e8e2cf;
          color: #293328;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 40px;
          padding: 17px 48px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          cursor: pointer;
          transition: all .35s ease;
        }

        .start-button:hover {
          background: #f4efdf;
          transform: translateY(-3px);
          box-shadow: 0 10px 35px rgba(0,0,0,.2);
        }

        .hero-bottom {
          display: flex;
          justify-content: space-between;
          color: #e1dfc8;
          font-size: 10px;
          letter-spacing: 3px;
        }

        /* ABOUT */

        .about {
          padding: 110px 7%;
          background: #172119;
        }

        .about-inner {
          max-width: 1050px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .eyebrow {
          color: #aab99a;
          font-size: 11px;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: clamp(30px, 5vw, 48px);
          line-height: 1.2;
          font-weight: 400;
          margin: 0;
        }

        .about-text {
          color: #c0c5b5;
          line-height: 2;
          font-size: 14px;
          margin: 0;
        }

        /* MODULES */

        .modules {
          padding: 85px 6%;
          background: #202b22;
        }

        .section-inner {
          max-width: 1100px;
          margin: auto;
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .module-card {
          text-align: left;
          padding: 30px 25px;
          min-height: 220px;
          color: #f1efdf;
          cursor: pointer;
          transition: transform .3s, background .3s;
        }

        .module-card:hover {
          transform: translateY(-6px);
          background: rgba(45, 58, 44, .8);
        }

        .module-number {
          font-size: 12px;
          letter-spacing: 3px;
          margin-bottom: 42px;
        }

        .module-title {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .module-subtitle {
          color: #bfc4b6;
          font-size: 13px;
          line-height: 1.7;
        }

        /* WORKSPACE */

        .workspace {
          padding: 85px 6%;
          background: #172119;
        }

        .workspace-panel {
          padding: 30px;
          margin-top: 30px;
        }

        .field-label {
          display: block;
          margin-bottom: 12px;
          font-size: 13px;
          color: #e1e3d5;
        }

        .grade-select,
        .text-input {
          width: 100%;
          background: rgba(8,15,10,.7);
          color: #f1efdf;
          border: 1px solid #617354;
          border-radius: 12px;
          padding: 14px;
          font: inherit;
          margin-bottom: 22px;
        }

        .text-input {
          resize: vertical;
          min-height: 170px;
          line-height: 1.7;
        }

        .analyze-button {
          background: #dfe3d0;
          color: #263529;
          border: none;
          padding: 15px 24px;
          border-radius: 30px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .analyze-button:disabled {
          opacity: .6;
          cursor: wait;
        }

        .error {
          color: #e5b48c;
          margin-top: 18px;
        }

        .result {
          margin-top: 25px;
          border-top: 1px solid #52624b;
          padding-top: 20px;
          white-space: pre-wrap;
          line-height: 1.8;
          color: #e2e5d7;
        }

        /* FOOTER */

        .footer {
          background: #111a14;
          padding: 38px 6%;
          text-align: center;
          color: #aab19e;
          font-size: 11px;
          letter-spacing: 2px;
        }

        @media (max-width: 700px) {
          .hero {
            min-height: 650px;
            height: 94svh;
            padding: 24px 6%;
          }

          .hero-art {
            background-position: 55% center;
          }

          .brand {
            font-size: 15px;
            letter-spacing: 2px;
          }

          .nav-links {
            gap: 13px;
          }

          .nav-links a {
            font-size: 10px;
          }

          .hero-title {
            font-size: clamp(42px, 12vw, 72px);
            letter-spacing: 2px;
          }

          .hero-description {
            font-size: 13px;
            padding: 0 8px;
          }

          .hero-bottom {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .about {
            padding: 75px 7%;
          }

          .about-inner {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .modules {
            padding: 70px 6%;
          }

          .module-grid {
            grid-template-columns: 1fr;
          }

          .module-card {
            min-height: 180px;
          }

          .workspace {
            padding: 70px 6%;
          }

          .workspace-panel {
            padding: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="fog" aria-hidden="true" />
        <div className="fog fog-two" aria-hidden="true" />
        <div className="fog fog-three" aria-hidden="true" />

        <nav className="hero-nav">
          <div className="brand">SMART MIND</div>

          <div className="nav-links">
            <a href="#about">О платформе</a>
            <a href="#modules">Обучение</a>
            <a href="#workspace">Практика</a>
          </div>
        </nav>

        <div className="hero-center">
          <div className="hero-eyebrow">
            A NEW WAY TO THINK
          </div>

          <h1 className="hero-title">
            SMART MIND
          </h1>

          <p className="hero-description">
            Образовательное пространство, где грамотность,
            логика и критическое мышление становятся
            навыками будущего.
          </p>

          <button
            className="start-button"
            onClick={() => {
              setWorkspace(true);
              setTimeout(() => {
                document.getElementById("workspace")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 50);
            }}
          >
            START
          </button>
        </div>

        <div className="hero-bottom">
          <span>SMART LEARNING</span>
          <span>01 — 11 CLASS</span>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about" id="about">
        <div className="about-inner">
          <div>
            <div className="eyebrow">BEYOND EDUCATION</div>

            <h2 className="section-title">
              Не просто получать знания.{" "}
              <span style={{ color: "#a9b996" }}>
                Учиться мыслить.
              </span>
            </h2>
          </div>

          <p className="about-text">
            SMART MIND — интеллектуальная образовательная
            платформа для школьников. Здесь можно развивать
            навыки работы с текстом, тренировать логику,
            анализировать информацию и отслеживать
            собственный прогресс.
          </p>
        </div>
      </section>

      {/* MODULES */}

      <section className="modules" id="modules">
        <div className="section-inner">
          <div className="eyebrow">YOUR LEARNING SPACE</div>

          <h2 className="section-title" style={{ marginBottom: 40 }}>
            Три направления развития
          </h2>

          <div className="module-grid">
            {modules.map((item) => (
              <button
                key={item.id}
                className="module-card"
                onClick={() => {
                  setMode(item.id);
                  setWorkspace(true);
                  setTimeout(() => {
                    document.getElementById("workspace")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 50);
                }}
                style={{
                  ...glass,
                  borderColor:
                    mode === item.id
                      ? item.color
                      : "rgba(223,229,202,.19)",
                }}
              >
                <div
                  className="module-number"
                  style={{ color: item.color }}
                >
                  {item.number}
                </div>

                <div className="module-title">
                  {item.title}
                </div>

                <div className="module-subtitle">
                  {item.subtitle}
                </div>

                <div
                  style={{
                    marginTop: 20,
                    color: item.color,
                    fontSize: 12,
                    letterSpacing: 1,
                  }}
                >
                  ОТКРЫТЬ ↗
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSPACE */}

      {workspace && (
        <section className="workspace" id="workspace">
          <div className="section-inner">
            <div className="eyebrow">
              INTERACTIVE LEARNING
            </div>

            <h2 className="section-title">
              Твоё образовательное пространство
            </h2>

            <div className="workspace-panel" style={glass}>
              <label className="field-label" htmlFor="grade">
                Выбери класс
              </label>

              <select
                id="grade"
                className="grade-select"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                style={{ maxWidth: 250 }}
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {i + 1} класс
                  </option>
                ))}
              </select>

              <div
                style={{
                  color: active.color,
                  fontWeight: 700,
                  marginBottom: 20,
                  letterSpacing: 1,
                }}
              >
                {active.title}
              </div>

              <form onSubmit={analyze}>
                <textarea
                  className="text-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Введи свой текст, рассуждение или утверждение..."
                  rows={7}
                />

                <button
                  className="analyze-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "АНАЛИЗИРУЮ..." : "НАЧАТЬ АНАЛИЗ ↗"}
                </button>
              </form>

              {error && (
                <p className="error">{error}</p>
              )}

              {output && (
                <div className="result">
                  <strong>РАЗБОР НАСТАВНИКА</strong>
                  <p>{output}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}

      <footer className="footer">
        SMART MIND © 2026
        <p>THINK DEEPER. LEARN DIFFERENTLY.</p>
      </footer>

    </main>
  );
}
