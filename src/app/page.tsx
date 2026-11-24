
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const images = {
  hero: "/images/IMG_6681.jpeg",
  write: "/images/IMG_6682.jpeg",
  think: "/images/IMG_6683.jpeg",
  check: "/images/IMG_6684.jpeg",
  castle: "/images/IMG_6685.jpeg",
  botanical: "/images/53472225-C658-47D6-B54D-443BAFCE52D1.png",
};

const modules = [
  {
    number: "01",
    title: "SMART WRITE",
    subtitle: "Грамотность и работа с текстом",
    description:
      "Работай со словами, находи ошибки, развивай письменную речь и точность формулировок.",
    image: images.write,
    href: "/modules/write",
    className: "write",
  },
  {
    number: "02",
    title: "SMART THINK",
    subtitle: "Логика и мышление",
    description:
      "Решай задачи, замечай закономерности и учись находить нестандартные решения.",
    image: images.think,
    href: "/modules/think",
    className: "think",
  },
  {
    number: "03",
    title: "SMART CHECK",
    subtitle: "Критическое мышление",
    description:
      "Анализируй информацию, проверяй утверждения и отличай факты от предположений.",
    image: images.check,
    href: "/modules/check",
    className: "check",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="site">
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <Link href="/" className="brand">
          <span className="brand-symbol">✳</span>
          <span>SMART MIND</span>
        </Link>

        <nav className="navigation">
          <a href="#platform">Платформа</a>
          <a href="#modules">Модули</a>
          <a href="#about">О проекте</a>
          <a href="#daily">Ежедневные задания</a>
        </nav>

        <div className="header-actions">
          <Link href="/login" className="login-button">
            Войти
          </Link>
          <Link href="/login" className="start-button">
            Начать <span>↗</span>
          </Link>
        </div>
      </header>

      <section className="hero" id="platform">
        <div className="paper-grid" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            РАЗВИВАЙСЯ. ДУМАЙ. ДОСТИГАЙ.
          </div>

          <h1>
            Развивай
            <br />
            мышление.
            <br />
            <em>Создавай</em>
            <br />
            <em>возможности.</em>
          </h1>

          <p className="hero-description">
            Интеллектуальная платформа для развития грамотности,
            памяти и критического мышления.
          </p>

          <Link href="/login" className="hero-button">
            Начать развитие <span>⟶</span>
          </Link>

          <div className="hero-note">
            <span>01</span>
            <span className="note-line" />
            ИССЛЕДУЙ СВОИ ВОЗМОЖНОСТИ
          </div>
        </div>

        <div className="hero-art">
          <div className="art-arch" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />

          <div className="art-moon" />

          <div className="hero-brain">
            <img src={images.hero} alt="Объёмная анатомическая композиция" />
          </div>

          <div className="art-botanical">
            <img src={images.botanical} alt="" />
          </div>

          <div className="art-star star-one">✳</div>
          <div className="art-star star-two">✧</div>
          <div className="art-caption">
            <span>THE ART OF THINKING</span>
            <span>EST. SMART MIND</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>ИНТЕЛЛЕКТУАЛЬНОЕ РАЗВИТИЕ</span>
          <span>ПРОКРУТИТЕ ВНИЗ ↓</span>
          <span>01 — 03</span>
        </div>
      </section>

      <section className="modules-section" id="modules">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              НАПРАВЛЕНИЯ РАЗВИТИЯ
            </div>
            <h2>
              Три направления.
              <br />
              <em>Одна цель.</em>
            </h2>
          </div>

          <p>
            Выбирай направление, тренируй навыки
            и постепенно отслеживай свой прогресс.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((item) => (
            <Link
              href={item.href}
              className={`module-card ${item.className}`}
              key={item.number}
            >
              <div className="module-top">
                <span>{item.number} / 03</span>
                <span className="module-arrow">↗</span>
              </div>

              <div className="module-art">
                <img src={item.image} alt={item.subtitle} />
              </div>

              <div className="module-content">
                <div className="module-subtitle">{item.subtitle}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="daily-section" id="daily">
        <div className="daily-intro">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            SMART DAILY
          </div>
          <h2>
            Ежедневные задания.
            <br />
            <em>Маленькие шаги —</em>
            <br />
            к большим достижениям.
          </h2>
          <p>
            Короткие интеллектуальные упражнения,
            которые помогают регулярно тренировать
            разные навыки мышления.
          </p>
          <Link href="/dashboard" className="daily-link">
            Перейти к заданиям <span>⟶</span>
          </Link>
        </div>

        <div className="benefits">
          <div className="benefit">
            <span className="benefit-number">01</span>
            <span className="benefit-icon">✧</span>
            <h3>Память и внимание</h3>
            <p>Упражнения на концентрацию и запоминание.</p>
          </div>

          <div className="benefit">
            <span className="benefit-number">02</span>
            <span className="benefit-icon">✎</span>
            <h3>Грамотность</h3>
            <p>Работа со словами, текстами и формулировками.</p>
          </div>

          <div className="benefit">
            <span className="benefit-number">03</span>
            <span className="benefit-icon">⌘</span>
            <h3>Критическое мышление</h3>
            <p>Анализ информации и проверка аргументов.</p>
          </div>
        </div>

        <div className="castle-art">
          <img src={images.castle} alt="Старинный замок на холме" />
          <div className="castle-label">
            EXPLORE YOUR MIND
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-symbol">✳</div>
        <div>
          <div className="eyebrow">О SMART MIND</div>
          <h2>Мышление — это навык.</h2>
          <p>
            SMART MIND объединяет образовательные модули,
            ежедневные задания и систему отслеживания
            личного прогресса в одной платформе.
          </p>
        </div>
        <Link href="/login" className="about-button">
          Присоединиться ↗
        </Link>
      </section>

      <footer className="footer">
        <Link href="/" className="brand">
          <span className="brand-symbol">✳</span>
          SMART MIND
        </Link>
        <span>THINK DEEPER. LEARN BETTER.</span>
        <span>© SMART MIND 2026</span>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        :root {
          --paper: #eee9dc;
          --paper-light: #f5f1e8;
          --olive: #555d3e;
          --olive-dark: #343a2c;
          --ink: #302e26;
          --muted: #777466;
          --line: rgba(73, 72, 56, .19);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          overflow: hidden;
          background:
            radial-gradient(ellipse at 80% 20%, rgba(255,255,255,.4), transparent 40%),
            var(--paper);
        }

        .header {
          height: 84px;
          padding: 0 6.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          border-bottom: 1px solid var(--line);
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(238,233,220,.94);
          backdrop-filter: blur(15px);
          transition: box-shadow .3s;
        }

        .header-scrolled {
          box-shadow: 0 8px 30px rgba(40,37,25,.08);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .brand-symbol {
          font-size: 29px;
          color: var(--olive);
        }

        .navigation {
          display: flex;
          gap: 32px;
          font-size: 12px;
          color: #615e52;
        }

        .navigation a,
        .login-button {
          transition: color .2s;
        }

        .navigation a:hover,
        .login-button:hover {
          color: #9b7947;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 12px;
        }

        .login-button {
          padding: 12px 19px;
          border: 1px solid var(--line);
        }

        .start-button,
        .hero-button {
          background: var(--olive-dark);
          color: #f6f1e6;
          padding: 13px 21px;
          transition: .3s;
        }

        .start-button:hover,
        .hero-button:hover {
          background: #747b56;
          transform: translateY(-3px);
        }

        .start-button span {
          margin-left: 12px;
        }

        .hero {
          min-height: 690px;
          position: relative;
          display: grid;
          grid-template-columns: 45% 55%;
          padding: 65px 7% 85px;
          border-bottom: 1px solid var(--line);
        }

        .paper-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .17;
          background-image:
            linear-gradient(rgba(85,93,62,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(85,93,62,.15) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: linear-gradient(to right, black, transparent 90%);
        }

        .hero-copy {
          position: relative;
          z-index: 3;
          padding-top: 38px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          letter-spacing: 2.5px;
          font-weight: 600;
          color: var(--olive);
        }

        .eyebrow-line {
          display: inline-block;
          width: 31px;
          height: 1px;
          background: var(--olive);
        }

        .hero h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(54px, 6.1vw, 88px);
          line-height: .99;
          font-weight: 400;
          letter-spacing: -3px;
          margin: 35px 0 24px;
        }

        .hero h1 em,
        h2 em {
          color: var(--olive);
          font-weight: 400;
        }

        .hero-description {
          max-width: 390px;
          font-size: 14px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 31px;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 27px;
          font-size: 12px;
          padding: 17px 23px;
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 85px;
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--muted);
        }

        .hero-note > span:first-child {
          color: var(--olive);
        }

        .note-line {
          height: 1px;
          width: 45px;
          background: var(--line);
        }

        .hero-art {
          min-height: 520px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          isolation: isolate;
        }

        .art-arch {
          position: absolute;
          width: 73%;
          height: 94%;
          bottom: 0;
          left: 13%;
          background: linear-gradient(145deg, #858b68, #4b5438 75%);
          border-radius: 48% 48% 4px 4px;
          box-shadow:
            inset 13px 0 25px rgba(255,255,255,.13),
            inset -16px 0 30px rgba(0,0,0,.16),
            22px 25px 55px rgba(47,48,34,.17);
          z-index: -2;
        }

        .art-arch::before {
          content: "";
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(239,229,202,.32);
          border-radius: 48% 48% 0 0;
        }

        .hero-brain {
          position: relative;
          z-index: 2;
          width: 95%;
          animation: float 7s ease-in-out infinite;
          filter: drop-shadow(0 25px 25px rgba(35,32,22,.25));
        }

        .hero-brain img {
          width: 100%;
          height: 490px;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        .art-orbit {
          position: absolute;
          border: 1px solid rgba(193,157,95,.75);
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }

        .orbit-one {
          width: 112%;
          height: 39%;
          transform: rotate(-27deg);
        }

        .orbit-two {
          width: 103%;
          height: 53%;
          transform: rotate(35deg);
        }

        .orbit-three {
          width: 78%;
          height: 100%;
          transform: rotate(23deg);
        }

        .art-moon {
          position: absolute;
          top: 4%;
          right: 5%;
          width: 61px;
          height: 61px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #fff9e9, #c9bea4 70%);
          box-shadow: 0 10px 35px rgba(70,63,42,.2);
        }

        .art-botanical {
          position: absolute;
          right: -12%;
          bottom: 1%;
          width: 42%;
          z-index: 3;
          pointer-events: none;
          filter: drop-shadow(0 8px 9px rgba(0,0,0,.12));
        }

        .art-botanical img {
          width: 100%;
          height: auto;
        }

        .art-star {
          position: absolute;
          color: #b49560;
          font-size: 24px;
        }

        .star-one {
          top: 18%;
          left: 2%;
        }

        .star-two {
          bottom: 17%;
          right: 3%;
        }

        .art-caption {
          position: absolute;
          bottom: 3%;
          left: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 7px;
          letter-spacing: 2px;
          color: #f2e9d8;
        }

        .hero-bottom {
          position: absolute;
          bottom: 20px;
          left: 7%;
          right: 7%;
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--muted);
        }

        .modules-section {
          padding: 110px 7%;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin-bottom: 53px;
          gap: 30px;
        }

        h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin: 24px 0 0;
        }

        .section-heading > p {
          max-width: 320px;
          font-size: 13px;
          line-height: 1.9;
          color: var(--muted);
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 19px;
        }

        .module-card {
          min-width: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 460px;
          background: linear-gradient(145deg, #f4f0e6, #e5dece);
          border: 1px solid rgba(89,83,62,.17);
          overflow: hidden;
          transition: transform .4s, box-shadow .4s;
        }

        .module-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 25px 45px rgba(49,45,30,.12);
        }

        .module-top {
          display: flex;
          justify-content: space-between;
          padding: 23px 24px 0;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--muted);
          position: relative;
          z-index: 2;
        }

        .module-arrow {
          font-size: 22px;
          color: var(--olive);
        }

        .module-art {
          height: 235px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 20px;
          overflow: hidden;
        }

        .module-art img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform .6s;
          filter: drop-shadow(0 17px 13px rgba(40,35,23,.15));
        }

        .module-card:hover .module-art img {
          transform: scale(1.07) translateY(-5px);
        }

        .module-content {
          padding: 10px 25px 27px;
          margin-top: auto;
        }

        .module-subtitle {
          color: var(--olive);
          font-size: 10px;
          margin-bottom: 9px;
        }

        .module-content h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          font-weight: 500;
          letter-spacing: .4px;
          margin: 0 0 12px;
        }

        .module-content p {
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
          margin: 0;
        }

        .daily-section {
          position: relative;
          padding: 90px 7% 100px;
          background: #e4dfd0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }

        .daily-intro h2 {
          font-size: clamp(39px, 4.4vw, 57px);
        }

        .daily-intro > p {
          max-width: 400px;
          color: var(--muted);
          line-height: 1.9;
          font-size: 12px;
          margin-top: 25px;
        }

        .daily-link {
          display: inline-flex;
          gap: 25px;
          align-items: center;
          margin-top: 17px;
          padding-bottom: 9px;
          border-bottom: 1px solid var(--olive);
          color: var(--olive);
          font-size: 12px;
        }

        .benefits {
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .benefit {
          position: relative;
          display: grid;
          grid-template-columns: 35px 40px 1fr;
          align-items: center;
          gap: 12px;
          padding: 19px 0;
          border-bottom: 1px solid var(--line);
        }

        .benefit-number {
          font-size: 9px;
          color: var(--muted);
        }

        .benefit-icon {
          font-size: 25px;
          color: var(--olive);
        }

        .benefit h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 500;
          font-size: 20px;
          margin: 0;
        }

        .benefit p {
          grid-column: 3;
          font-size: 10px;
          color: var(--muted);
          margin: -8px 0 0;
        }

        .castle-art {
          grid-column: 1 / -1;
          height: 280px;
          position: relative;
          margin-top: 5px;
          overflow: hidden;
          background: #d5cfbd;
        }

        .castle-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 55%;
          display: block;
        }

        .castle-label {
          position: absolute;
          bottom: 18px;
          left: 22px;
          font-size: 8px;
          letter-spacing: 3px;
          color: white;
          text-shadow: 0 2px 9px #333;
        }

        .about-section {
          padding: 75px 7%;
          display: grid;
          grid-template-columns: 70px 1fr auto;
          align-items: center;
          gap: 30px;
        }

        .about-symbol {
          font-size: 50px;
          color: var(--olive);
        }

        .about-section h2 {
          font-size: 37px;
          margin: 14px 0;
        }

        .about-section p {
          max-width: 580px;
          font-size: 12px;
          line-height: 1.9;
          color: var(--muted);
        }

        .about-button {
          background: var(--olive-dark);
          color: white;
          padding: 17px 22px;
          font-size: 11px;
          white-space: nowrap;
        }

        .footer {
          border-top: 1px solid var(--line);
          min-height: 85px;
          padding: 20px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer > span {
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--muted);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @media (max-width: 900px) {
          .header {
            padding: 0 4%;
          }

          .navigation {
            gap: 14px;
          }

          .hero {
            padding-left: 5%;
            padding-right: 5%;
            grid-template-columns: 46% 54%;
          }

          .hero h1 {
            font-size: 58px;
          }

          .modules-section,
          .daily-section {
            padding-left: 5%;
            padding-right: 5%;
          }

          .module-content {
            padding-left: 17px;
            padding-right: 17px;
          }
        }

        @media (max-width: 650px) {
          .header {
            height: 69px;
            padding: 0 19px;
          }

          .brand {
            font-size: 12px;
            letter-spacing: 1px;
          }

          .brand-symbol {
            font-size: 24px;
          }

          .navigation {
            display: none;
          }

          .header-actions {
            gap: 7px;
            font-size: 10px;
          }

          .login-button {
            padding: 10px 12px;
          }

          .start-button {
            padding: 11px 13px;
          }

          .hero {
            display: flex;
            flex-direction: column;
            padding: 53px 23px 70px;
            min-height: auto;
          }

          .hero-copy {
            padding-top: 0;
          }

          .hero h1 {
            font-size: clamp(49px, 12vw, 68px);
            margin-top: 27px;
            letter-spacing: -2px;
          }

          .hero-description {
            font-size: 12px;
            max-width: 310px;
          }

          .hero-note {
            margin-top: 33px;
          }

          .hero-art {
            min-height: 350px;
            margin-top: 20px;
          }

          .hero-brain img {
            height: 340px;
          }

          .art-arch {
            width: 78%;
            left: 11%;
          }

          .art-botanical {
            right: -6%;
            width: 37%;
          }

          .art-moon {
            width: 43px;
            height: 43px;
          }

          .hero-bottom {
            left: 23px;
            right: 23px;
            font-size: 6px;
            letter-spacing: 1px;
          }

          .modules-section {
            padding: 75px 21px;
          }

          .section-heading {
            display: block;
            margin-bottom: 32px;
          }

          h2 {
            font-size: 43px;
          }

          .section-heading > p {
            font-size: 12px;
            margin-top: 20px;
          }

          .module-grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .module-card {
            min-height: 410px;
          }

          .module-art {
            height: 225px;
          }

          .module-content {
            padding: 10px 22px 25px;
          }

          .daily-section {
            padding: 70px 22px;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .daily-intro h2 {
            font-size: 40px;
          }

          .benefit {
            grid-template-columns: 25px 34px 1fr;
          }

          .benefit h3 {
            font-size: 17px;
          }

          .castle-art {
            height: 190px;
            margin-top: 10px;
          }

          .about-section {
            padding: 55px 23px;
            grid-template-columns: 45px 1fr;
            gap: 14px;
          }

          .about-symbol {
            font-size: 35px;
          }

          .about-section h2 {
            font-size: 28px;
          }

          .about-section p {
            font-size: 11px;
          }

          .about-button {
            grid-column: 2;
            justify-self: start;
          }

          .footer {
            padding: 23px;
            flex-wrap: wrap;
          }

          .footer > span {
            font-size: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
