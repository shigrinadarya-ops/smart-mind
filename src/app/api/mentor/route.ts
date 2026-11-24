import { NextRequest, NextResponse } from "next/server";

const MODE_INSTRUCTIONS: Record<string, string> = {
  write:
    "Режим SMART WRITE: разбор письменной речи, орфографии, пунктуации, структуры текста и стиля. Не переписывай весь текст за ученика — покажи, что уже звучит хорошо, укажи 1–2 конкретных места для правки и задай вопрос, как усилить формулировку.",
  think:
    "Режим SMART THINK: логика, последовательность, анализ и причинно-следственные связи. Найди сильный ход мысли, отметь возможный логический разрыв или неполный вывод и задай точный наводящий вопрос.",
  check:
    "Режим SMART CHECK: проверка фактов, анализ источников и распознавание манипуляций или подмены понятий. Оцени надёжность утверждений, подскажи, что стоит перепроверить, и дай следующий шаг для самостоятельной проверки.",
};

export async function POST(req: NextRequest) {
  try {
    const { prompt, grade, mode } = await req.json();

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json(
        { error: "Напиши текст, тезис или утверждение для разбора." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Не найден GROQ_API_KEY в настройках Vercel." },
        { status: 500 }
      );
    }

    const modeKey = typeof mode === "string" ? mode.toLowerCase() : "write";
    const modeRule = MODE_INSTRUCTIONS[modeKey] || MODE_INSTRUCTIONS.write;

    const systemPrompt = `Ты — SMART MIND, умный, спокойный и требовательный наставник для учеников 1–11 классов.
Класс ученика: ${grade || "1–11"}.
${modeRule}

Общие правила:
- Не выдавай готовый ответ вместо ученика.
- Структурируй ответ коротко и ясно: 1) Что уже хорошо, 2) На что обратить внимание, 3) Вопрос или шаг для ученика.
- Пиши живо, без воды и канцелярита.`;

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt.trim() },
          ],
          temperature: 0.6,
          max_tokens: 950,
        }),
      }
    );

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "Ошибка при обращении к Groq API." },
        { status: groqResponse.status }
      );
    }

    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Ответ не получен. Попробуй ещё раз.";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера." },
      { status: 500 }
    );
  }
}
