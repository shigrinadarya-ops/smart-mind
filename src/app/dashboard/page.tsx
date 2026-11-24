
"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

type Profile = {
  full_name: string | null;
  grade: number | null;
};

type Progress = {
  module_code: string;
  completed_lessons: number;
  total_lessons: number;
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<Progress[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.replace("/login");
        return;
      }

      setUser(data.user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, grade")
        .eq("id", data.user.id)
        .maybeSingle();

      const { data: progressData } = await supabase
        .from("module_progress")
        .select("module_code, completed_lessons, total_lessons")
        .eq("user_id", data.user.id);

      const { count } = await supabase
        .from("daily_attempts")
        .select("*", { count: "exact", head: true })
        .eq("user_id", data.user.id);

      setProfile(profileData);
      setProgress(progressData || []);
      setAttempts(count || 0);
      setLoading(false);
    }

    loadDashboard();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  const completedLessons = progress.reduce(
    (sum, item) => sum + item.completed_lessons,
    0
  );

  const modules = [
    {
      code: "write",
      title: "SMART WRITE",
      description: "Грамотность и работа с текстом",
      href: "/modules/write",
    },
    {
      code: "think",
      title: "SMART THINK",
      description: "Логика и развитие мышления",
      href: "/modules/think",
    },
    {
      code: "check",
      title: "SMART CHECK",
      description: "Критическое мышление и анализ",
      href: "/modules/check",
    },
  ];

  if (loading) {
    return (
      <main className="min-h-screen bg-[#172119] text-[#eee9d8] flex items-center justify-center">
        Загрузка личного кабинета...
      </main>
    );
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-[#172119] text-[#eee9d8] px-5 py-8 md:px-12">
      <header className="max-w-6xl mx-auto flex justify-between items-center border-b border-[#65745f]/40 pb-5">
        <Link href="/" className="text-lg tracking-[0.25em] text-[#d4d5b5]">
          SMART MIND
        </Link>

        <button
          onClick={logout}
          className="text-sm text-[#c6cba9] border border-[#65745f] rounded-lg px-4 py-2"
        >
          Выйти
        </button>
      </header>

      <section className="max-w-6xl mx-auto pt-12">
        <p className="text-sm tracking-[0.25em] text-[#aeb99b]">
          ЛИЧНЫЙ КАБИНЕТ
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-serif">
          Привет, {profile?.full_name || "ученик"}
        </h1>

        <p className="mt-3 text-[#b8c0ad]">
          {profile?.grade ? `${profile.grade} класс · ` : ""}
          Твоё пространство для развития мышления.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        <div className="bg-[#26372b] border border-[#65745f]/40 rounded-2xl p-6">
          <p className="text-sm text-[#c1c9b5]">Выполнено заданий</p>
          <p className="text-4xl mt-3 font-serif">{attempts}</p>
        </div>

        <div className="bg-[#26372b] border border-[#65745f]/40 rounded-2xl p-6">
          <p className="text-sm text-[#c1c9b5]">Пройдено занятий</p>
          <p className="text-4xl mt-3 font-serif">{completedLessons}</p>
        </div>

        <div className="bg-[#26372b] border border-[#65745f]/40 rounded-2xl p-6">
          <p className="text-sm text-[#c1c9b5]">Активных модулей</p>
          <p className="text-4xl mt-3 font-serif">{progress.length}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-serif">Мои направления</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {modules.map((module) => {
            const item = progress.find(
              (p) => p.module_code === module.code
            );

            return (
              <Link
                href={module.href}
                key={module.code}
                className="block bg-[#26372b] border border-[#65745f]/40 rounded-2xl p-6 hover:bg-[#304333] transition"
              >
                <p className="text-xs tracking-[0.2em] text-[#b6c39e]">
                  SMART MIND MODULE
                </p>

                <h3 className="text-xl mt-5 font-serif">
                  {module.title}
                </h3>

                <p className="text-sm text-[#c1c9b5] mt-2">
                  {module.description}
                </p>

                <p className="text-sm mt-6 text-[#d5d7b6]">
                  Пройдено: {item?.completed_lessons || 0} /{" "}
                  {item?.total_lessons || 0}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-12 bg-[#26372b] border border-[#65745f]/40 rounded-2xl p-6">
        <p className="text-xs tracking-[0.2em] text-[#b6c39e]">
          DAILY MIND
        </p>

        <h2 className="text-2xl font-serif mt-3">
          Ежедневная тренировка
        </h2>

        <p className="text-[#c1c9b5] mt-2">
          Здесь будут появляться ежедневные задания.
        </p>
      </section>
    </main>
  );
}
