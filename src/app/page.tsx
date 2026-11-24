
"use client";

import React, { useState } from "react";

const h = React.createElement;

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

  const button = {
    background: "rgba(238,239,222,0.12)",
    border: "1px solid rgba(238,239,222,0.3)",
    color: "#f0efdf",
    padding: "13px 22px",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "13px",
    letterSpacing: "0.5px",
  };

  const glass = {
    background: "rgba(23,34,24,0.58)",
    border: "1px solid rgba(223,229,202,0.19)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    borderRadius: "22px",
  };

  return h(
    "div",
    {
      style: {
        minHeight: "100vh",
        background: "#172119",
        color: "#f1efdf",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      },
    },

    // HERO

    h(
      "section",
      {
        style: {
          minHeight: "690px",
          height: "95vh",
          maxHeight: "1000px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "28px 6%",
          boxSizing: "border-box",
          background:
            "linear-gradient(180deg,rgba(12,20,14,.35),rgba(12,20,14,.25) 45%,#172119), linear-gradient(120deg,#536445,#8b9160,#354c3d)",
        },
      },

      h(
        "video",
        {
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          "aria-hidden": true,
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          },
        },
        h("source", {
          src: "/hero.mp4",
          type: "video/mp4",
        })
      ),

      h("div", {
        style: {
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(10,18,12,.43),rgba(10,18,12,.12) 40%,#172119 100%)",
          zIndex: 1,
        },
      }),

      h(
        "nav",
        {
          style: {
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
          },
        },
        h(
          "div",
          {
            style: {
              fontSize: "23px",
              fontWeight: 800,
              letterSpacing: "3px",
            },
          },
          "SMART MIND"
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              gap: "22px",
              alignItems: "center",
              fontSize: "12px",
              flexWrap: "wrap",
            },
          },
          h("a", {
            href: "#about",
            style: { color: "#f1efdf", textDecoration: "none" },
            children: "О платформе",
          }),
          h("a", {
            href: "#modules",
            style: { color: "#f1efdf", textDecoration: "none" },
            children: "Обучение",
          }),
          h("a", {
            href: "#workspace",
            style: { color: "#f1efdf", textDecoration: "none" },
            children: "Практика",
          })
        )
      ),

      h(
        "div",
        {
          style: {
            position: "relative",
            zIndex: 2,
            maxWidth: "760px",
            margin: "auto",
            textAlign: "center",
            padding: "40px 0",
          },
        },
        h(
          "div",
          {
            style: {
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#e1dfc8",
              marginBottom: "25px",
            },
          },
          "A NEW WAY TO THINK"
        ),
        h(
          "h1",
          {
            style: {
              fontSize: "clamp(40px,8vw,82px)",
              lineHeight: 1.04,
              letterSpacing: "-3px",
              fontWeight: 600,
              margin: "0 0 24px",
            },
          },
          "Думай глубже.",
          h("br"),
          "Открывай больше."
        ),
        h(
          "p",
          {
            style: {
              maxWidth: "510px",
              margin: "0 auto 32px",
              color: "#e1e1d0",
              fontSize: "15px",
              lineHeight: 1.8,
            },
          },
          "Образовательное пространство, где грамотность, логика и критическое мышление становятся навыками будущего."
        ),
        h(
          "button",
          {
            onClick: () => setWorkspace(true),
            style: {
              ...button,
              background: "#e7e6d4",
              color: "#263529",
              border: "none",
              padding: "16px 30px",
              fontWeight: 700,
            },
          },
          "ВОЙТИ В ПРОСТРАНСТВО ↗"
        )
      ),

      h(
        "div",
        {
          style: {
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#e1dfc8",
          },
        },
        h("span", null, "SMART LEARNING"),
        h("span", null, "01 — 11 CLASS")
      )
    ),

    // INTRODUCTION

    h(
      "section",
      {
        id: "about",
        style: {
          padding: "100px 7%",
          background: "#172119",
        },
      },
      h(
        "div",
        {
          style: {
            maxWidth: "1050px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "45px",
            alignItems: "center",
          },
        },
        h(
          "div",
          null,
          h(
            "div",
            {
              style: {
                color: "#aab99a",
                fontSize: "11px",
                letterSpacing: "3px",
                marginBottom: "20px",
              },
            },
            "BEYOND EDUCATION"
          ),
          h(
            "h2",
            {
              style: {
                fontSize: "clamp(30px,5vw,48px)",
                lineHeight: 1.15,
                fontWeight: 500,
                margin: 0,
              },
            },
            "Не просто получать знания. ",
            h("span", { style: { color: "#a9b996" } }, "Учиться мыслить.")
          )
        ),
        h(
          "p",
          {
            style: {
              color: "#c0c5b5",
              lineHeight: 1.9,
              fontSize: "14px",
              margin: 0,
            },
          },
          "SMART MIND — интеллектуальная образовательная платформа для школьников. Здесь можно развивать навыки работы с текстом, тренировать логику, анализировать информацию и отслеживать собственный прогресс."
        )
      )
    ),

    // MODULES

    h(
      "section",
      {
        id: "modules",
        style: {
          padding: "75px 6%",
          background: "#202b22",
        },
      },
      h(
        "div",
        {
          style: {
            maxWidth: "1100px",
            margin: "auto",
          },
        },
        h(
          "div",
          {
            style: {
              color: "#aab99a",
              fontSize: "11px",
              letterSpacing: "3px",
            },
          },
          "YOUR LEARNING SPACE"
        ),
        h(
          "h2",
          {
            style: {
              fontSize: "clamp(30px,5vw,45px)",
              fontWeight: 500,
              margin: "18px 0 38px",
            },
          },
          "Три направления развития"
        ),
        h(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "16px",
            },
          },
          ...modules.map((item) =>
            h(
              "button",
              {
                key: item.id,
                onClick: () => {
                  setMode(item.id);
                  setWorkspace(true);
                },
                style: {
                  ...glass,
                  padding: "28px 23px",
                  textAlign: "left",
                  cursor: "pointer",
                  minHeight: "190px",
                  color: "#f1efdf",
                  borderColor:
                    mode === item.id ? item.color : "rgba(223,229,202,.19)",
                },
              },
              h(
                "div",
                {
                  style: {
                    color: item.color,
                    fontSize: "12px",
                    letterSpacing: "2px",
                    marginBottom: "35px",
                  },
                },
                item.number
              ),
              h(
                "div",
                {
                  style: {
                    fontSize: "19px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  },
                },
                item.title
              ),
              h(
                "div",
                {
                  style: {
                    color: "#bfc4b6",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  },
                },
                item.subtitle
              ),
              h(
                "div",
                {
                  style: {
                    marginTop: "20px",
                    color: item.color,
                    fontSize: "12px",
                  },
                },
                "ОТКРЫТЬ ↗"
              )
            )
          )
        )
      )
    ),

    // WORKSPACE

    workspace
      ? h(
          "section",
          {
            id: "workspace",
            style: {
              padding: "80px 6%",
              background: "#172119",
            },
          },
          h(
            "div",
            {
              style: {
                maxWidth: "1050px",
                margin: "auto",
              },
            },
            h(
              "div",
              {
                style: {
                  color: "#aab99a",
                  fontSize: "11px",
                  letterSpacing: "3px",
                },
              },
              "INTERACTIVE LEARNING"
            ),
            h(
              "h2",
              {
                style: {
                  fontSize: "32px",
                  fontWeight: 500,
                },
              },
              "Твоё образовательное пространство"
            ),
            h(
              "div",
              {
                style: {
                  ...glass,
                  padding: "25px",
                },
              },
              h(
                "label",
                {
                  style: { display: "block", marginBottom: "12px" },
                  htmlFor: "grade",
                },
                "Выбери класс"
              ),
              h(
                "select",
                {
                  id: "grade",
                  value: grade,
                  onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
                    setGrade(e.target.value),
                  style: {
                    background: "#253429",
                    color: "#f1efdf",
                    padding: "12px",
                    border: "1px solid #617354",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  },
                },
                ...Array.from({ length: 11 }, (_, i) =>
                  h(
                    "option",
                    { key: i + 1, value: String(i + 1) },
                    (i + 1) + " класс"
                  )
                )
              ),
              h(
                "div",
                {
                  style: {
                    color: active.color,
                    fontWeight: 700,
                    marginBottom: "15px",
                  },
                },
                active.title
              ),
              h(
                "form",
                { onSubmit: analyze },
                h("textarea", {
                  value: input,
                  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setInput(e.target.value),
                  placeholder: "Введи свой текст, рассуждение или утверждение...",
                  rows: 7,
                  style: {
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    resize: "vertical",
                    background: "rgba(8,15,10,.7)",
                    color: "#f1efdf",
                    border: "1px solid #53664d",
                    borderRadius: "13px",
                    padding: "17px",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    marginBottom: "17px",
                  },
                }),
                h(
                  "button",
                  {
                    type: "submit",
                    disabled: loading,
                    style: {
                      ...button,
                      background: "#dfe3d0",
                      color: "#263529",
                      opacity: loading ? 0.6 : 1,
                    },
                  },
                  loading ? "АНАЛИЗИРУЮ..." : "НАЧАТЬ АНАЛИЗ ↗"
                )
              ),
              error
                ? h(
                    "p",
                    { style: { color: "#e5b48c" } },
                    error
                  )
                : null,
              output
                ? h(
                    "div",
                    {
                      style: {
                        marginTop: "25px",
                        borderTop: "1px solid #52624b",
                        paddingTop: "20px",
                        whiteSpace: "pre-wrap",
                        lineHeight: 1.8,
                        color: "#e2e5d7",
                      },
                    },
                    h("strong", null, "РАЗБОР НАСТАВНИКА"),
                    h("p", null, output)
                  )
                : null
            )
          )
        )
      : null,

    // FOOTER

    h(
      "footer",
      {
        style: {
          background: "#111a14",
          padding: "35px 6%",
          textAlign: "center",
          color: "#aab19e",
          fontSize: "11px",
          letterSpacing: "2px",
        },
      },
      "SMART MIND © 2026",
      h("p", null, "THINK DEEPER. LEARN DIFFERENTLY.")
    )
  );
}
