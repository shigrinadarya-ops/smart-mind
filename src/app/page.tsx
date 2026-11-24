
"use client";

import React, { useState } from "react";

type Mode = "write" | "think" | "check";

const modes = [
  {
    id: "write" as Mode,
    number: "01",
    name: "SMART WRITE",
    description: "Работа с текстом, речью и грамотностью",
    color: "#a3d9b8",
  },
  {
    id: "think" as Mode,
    number: "02",
    name: "SMART THINK",
    description: "Логика, мышление и анализ информации",
    color: "#b5c9ed",
  },
  {
    id: "check" as Mode,
    number: "03",
    name: "SMART CHECK",
    description: "Факты, аргументы и критическая оценка",
    color: "#dfc49e",
  },
];

const h = React.createElement;

export default function HomePage() {
  const [grade, setGrade] = useState("11");
  const [mode, setMode] = useState<Mode>("write");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const active = modes.find((m) => m.id === mode)!;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setOutput("");

    if (!input.trim()) {
      setError("Сначала введи текст для анализа.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          grade: grade + " класс",
          mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка сервера.");
      }

      if (typeof data.reply !== "string") {
        throw new Error("Некорректный ответ наставника.");
      }

      setOutput(data.reply);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Не удалось подключиться к серверу."
      );
    } finally {
      setLoading(false);
    }
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "#090d0b",
    color: "#ede7da",
    padding: "30px 18px",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    maxWidth: "1050px",
    margin: "0 auto",
  };

  const panelStyle = {
    background: "#101713",
    border: "1px solid #244333",
    borderRadius: "20px",
    padding: "22px",
  };

  const buttonStyle = {
    background: "linear-gradient(120deg,#1d7558,#0e3c2d)",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    padding: "15px 20px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
  };

  return h(
    "div",
    { style: pageStyle },
    h(
      "div",
      { style: containerStyle },

      h(
        "header",
        {
          style: {
            ...panelStyle,
            marginBottom: "20px",
            padding: "30px",
          },
        },
        h(
          "div",
          {
            style: {
              color: "#a3d9b8",
              fontSize: "12px",
              letterSpacing: "2px",
              marginBottom: "18px",
            },
          },
          "SMART MIND  /  EDUCATIONAL PLATFORM"
        ),
        h(
          "h1",
          {
            style: {
              fontSize: "clamp(30px,5vw,48px)",
              lineHeight: 1.15,
              margin: "0 0 15px",
              fontWeight: 800,
            },
          },
          "Пространство, куда заходят думать"
        ),
        h(
          "p",
          {
            style: {
              color: "#aaa99e",
              fontSize: "15px",
              lineHeight: 1.7,
              maxWidth: "650px",
            },
          },
          "Интеллектуальная платформа для развития грамотности, логического и критического мышления школьников."
        ),
        h(
          "div",
          {
            style: {
              marginTop: "22px",
              color: "#a3d9b8",
              fontSize: "12px",
            },
          },
          "1–11 КЛАССЫ  •  SMART LEARNING  •  AI MENTOR"
        )
      ),

      h(
        "section",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "18px",
          },
        },
        h(
          "label",
          {
            htmlFor: "grade",
            style: { color: "#aaa99e", fontSize: "13px" },
          },
          "ТВОЙ КЛАСС"
        ),
        h(
          "select",
          {
            id: "grade",
            value: grade,
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
              setGrade(e.target.value),
            style: {
              background: "#101713",
              color: "#a3d9b8",
              border: "1px solid #315b42",
              borderRadius: "10px",
              padding: "11px 18px",
              fontSize: "14px",
            },
          },
          ...Array.from({ length: 11 }, (_, i) =>
            h(
              "option",
              { key: i + 1, value: String(i + 1) },
              i + 1 + " класс"
            )
          )
        )
      ),

      h(
        "section",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "12px",
            marginBottom: "22px",
          },
        },
        ...modes.map((item) =>
          h(
            "button",
            {
              key: item.id,
              type: "button",
              onClick: () => {
                setMode(item.id);
                setError("");
              },
              style: {
                ...panelStyle,
                textAlign: "left" as const,
                cursor: "pointer",
                borderColor:
                  mode === item.id ? item.color : "#244333",
                borderWidth: mode === item.id ? "2px" : "1px",
              },
            },
            h(
              "div",
              {
                style: {
                  color: item.color,
                  fontSize: "12px",
                  marginBottom: "12px",
                  letterSpacing: "1px",
                },
              },
              item.number
            ),
            h(
              "div",
              {
                style: {
                  fontSize: "16px",
                  fontWeight: 800,
                  marginBottom: "10px",
                },
              },
              item.name
            ),
            h(
              "div",
              {
                style: {
                  color: "#aaa99e",
                  fontSize: "13px",
                  lineHeight: 1.5,
                },
              },
              item.description
            ),
            h(
              "div",
              {
                style: {
                  marginTop: "15px",
                  color: item.color,
                  fontSize: "11px",
                },
              },
              mode === item.id ? "● ВЫБРАНО" : "ОТКРЫТЬ РЕЖИМ"
            )
          )
        )
      ),

      h(
        "main",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap: "18px",
          },
        },

        h(
          "form",
          {
            onSubmit: submit,
            style: {
              ...panelStyle,
              display: "flex",
              flexDirection: "column" as const,
              gap: "16px",
            },
          },
          h(
            "div",
            {
              style: {
                color: active.color,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
              },
            },
            active.name + " / ТВОЙ МАТЕРИАЛ"
          ),
          h(
            "textarea",
            {
              value: input,
              onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setInput(e.target.value),
              placeholder:
                "Напиши текст, рассуждение, аргумент или вопрос...",
              rows: 10,
              style: {
                width: "100%",
                boxSizing: "border-box" as const,
                background: "#090d0b",
                color: "#ede7da",
                border: "1px solid #31513e",
                borderRadius: "13px",
                padding: "16px",
                fontSize: "14px",
                lineHeight: 1.7,
                resize: "vertical" as const,
                outline: "none",
              },
            }
          ),
          h(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                color: "#99998f",
                fontSize: "11px",
              },
            },
            h("span", null, grade + " класс"),
            h("span", null, input.length + " символов")
          ),
          error
            ? h(
                "div",
                {
                  style: {
                    color: "#f0bd88",
                    background: "#382719",
                    padding: "12px",
                    borderRadius: "10px",
                    fontSize: "13px",
                  },
                },
                error
              )
            : null,
          h(
            "button",
            {
              type: "submit",
              disabled: loading,
              style: {
                ...buttonStyle,
                opacity: loading ? 0.6 : 1,
              },
            },
            loading ? "АНАЛИЗИРУЮ..." : "РАЗОБРАТЬ МЫСЛЬ"
          ),
          h(
            "button",
            {
              type: "button",
              onClick: () => {
                setInput("");
                setOutput("");
                setError("");
              },
              style: {
                background: "transparent",
                color: "#aaa99e",
                border: "1px solid #31513e",
                borderRadius: "12px",
                padding: "12px",
                cursor: "pointer",
              },
            },
            "Очистить"
          )
        ),

        h(
          "section",
          {
            style: {
              ...panelStyle,
              minHeight: "350px",
              display: "flex",
              flexDirection: "column" as const,
            },
          },
          h(
            "div",
            {
              style: {
                color: active.color,
                fontSize: "12px",
                letterSpacing: "1px",
                marginBottom: "14px",
                fontWeight: 700,
              },
            },
            "ОТВЕТ AI-НАСТАВНИКА"
          ),
          h(
            "h2",
            {
              style: {
                fontSize: "19px",
                margin: "0 0 20px",
              },
            },
            active.name
          ),
          h(
            "div",
            {
              style: {
                borderTop: "1px solid #31513e",
                paddingTop: "20px",
                color: "#d4d0c5",
                fontSize: "14px",
                lineHeight: 1.8,
                whiteSpace: "pre-wrap" as const,
                overflowWrap: "anywhere" as const,
                flex: 1,
              },
            },
            loading
              ? "Наставник анализирует материал. Подожди немного..."
              : output ||
                "Здесь появится подробный анализ твоего материала, сильные стороны, ошибки и рекомендации."
          ),
          h(
            "div",
            {
              style: {
                borderTop: "1px solid #31513e",
                marginTop: "20px",
                paddingTop: "15px",
                color: "#a3d9b8",
                fontSize: "11px",
                letterSpacing: "1px",
              },
            },
            "SMART MIND • ГЛУБИНА ВМЕСТО ШАБЛОНОВ"
          )
        )
      ),

      h(
        "footer",
        {
          style: {
            textAlign: "center" as const,
            color: "#777d73",
            fontSize: "11px",
            padding: "35px 10px 10px",
          },
        },
        "SMART MIND © 2026 — ПЛАТФОРМА РАЗВИТИЯ МЫШЛЕНИЯ"
      )
    )
  );
}
