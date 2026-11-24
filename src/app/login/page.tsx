
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (mode === "register") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: `${window.location.origin}/login`,
          },
        });

        if (error) throw error;

        if (data.session) {
          router.push("/dashboard");
          return;
        }

        setMessage("Проверь почту и подтверди регистрацию.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Произошла ошибка."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#172119] px-5 py-10 text-[#eee9d8]">
      <div className="w-full max-w-md rounded-2xl border border-[#78836c]/40 bg-[#26372b] p-7">
        <a href="/" className="text-sm tracking-[0.3em] text-[#c6cba9]">
          SMART MIND
        </a>

        <h1 className="mt-8 text-3xl font-serif">
          {mode === "login" ? "Вход в аккаунт" : "Регистрация"}
        </h1>

        <p className="mt-2 text-sm text-[#b9c0ad]">
          {mode === "login"
            ? "Продолжи работу в SMART MIND."
            : "Создай личный аккаунт ученика."}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {mode === "register" && (
            <input
              type="text"
              placeholder="Имя и фамилия"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              className="w-full rounded-lg border border-[#697b65] bg-[#172119] p-3 outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Электронная почта"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-lg border border-[#697b65] bg-[#172119] p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
            className="w-full rounded-lg border border-[#697b65] bg-[#172119] p-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#c1c69e] p-3 font-semibold text-[#172119] disabled:opacity-50"
          >
            {loading
              ? "Подождите..."
              : mode === "login"
                ? "Войти"
                : "Зарегистрироваться"}
          </button>
        </form>

        {message && (
          <p className="mt-5 rounded-lg bg-[#354333] p-3 text-sm break-words">
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setMessage("");
          }}
          className="mt-6 w-full text-sm text-[#c6cba9] underline"
        >
          {mode === "login"
            ? "Нет аккаунта? Зарегистрироваться"
            : "Уже есть аккаунт? Войти"}
        </button>

        <a href="/" className="block mt-6 text-center text-sm text-[#aeb99b]">
          На главную
        </a>
      </div>
    </main>
  );
}
