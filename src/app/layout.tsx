import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMART MIND",
  description: "Образовательная платформа для 1–11 классов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-stone-950 text-stone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
