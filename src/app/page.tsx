
"use client";

import Image from "next/image";
import Link from "next/link";

const images = {
  hero: "/IMG_6681.jpeg",
  write: "/IMG_6682.jpeg",
  think: "/IMG_6683.jpeg",
  check: "/IMG_6684.jpeg",
  castle: "/IMG_6685.jpeg",
  botanical: "/53472225-C658-47D6-B54D-443BAFCE52D1.png",
};

const modules = [
  {
    number: "01",
    title: "SMART WRITE",
    subtitle: "Грамотность и работа с текстом",
    description:
      "Работа с языком, орфографией, структурой и точностью письменной речи.",
    image: images.write,
    href: "/modules/write",
  },
  {
    number: "02",
    title: "SMART THINK",
    subtitle: "Логика и мышление",
    description:
      "Задачи на закономерности, последовательности и нестандартные решения.",
    image: images.think,
    href: "/modules/think",
  },
  {
    number: "03",
    title: "SMART CHECK",
    subtitle: "Критическое мышление",
    description:
      "Анализ информации, проверка утверждений и поиск логических ошибок.",
    image: images.check,
    href: "/modules/check",
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">
          SMART<span>MIND</span>
        </Link>

        <nav>
          <a href="#modules">Направления</a>
          <a href="#daily">Ежедневно</a>
          <a href="#about">О проекте</a>
        </nav>

        <Link href="/login" className="account">
          Личный кабинет <span>↗</span>
        </Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> ИНТЕЛЛЕКТУАЛЬНАЯ ПЛАТФОРМА
          </div>

          <h1>
            Развивай
            <br />
            <em>способность</em>
            <br />
            мыслить.
          </h1>

          <p className="hero-text">
            Пространство для развития грамотности, логики и критического
            мышления. Каждый день — новые интеллектуальные задачи.
          </p>

          <div className="hero-actions">
            <Link href="/login" className="primary-btn">
              Начать развитие <span>↗</span>
            </Link>
            <a href="#modules" className="secondary-btn">
              Исследовать платформу ↓
            </a>
          </div>

          <div className="hero-note">
            <span>01 / 03</span>
            <span>THINK · LEARN · DEVELOP</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-glow" />
          <div className="art-frame">
            <Image
              src={images.hero}
              alt="Неоклассическая композиция с мозгом"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 55vw"
              className="hero-image"
            />
          </div>
          <div className="art-caption">
            <span>FIG. 001</span>
            <span>THE HUMAN MIND</span>
          </div>
          <div className="art-side">KNOWLEDGE IS A JOURNEY</div>
        </div>
      </section>

      <div className="ticker">
        <span>THINK DEEPER</span>
        <b>✳</b>
        <span>QUESTION MORE</span>
        <b>✳</b>
        <span>LEARN EVERY DAY</span>
        <b>✳</b>
        <span>THINK DEEPER</span>
      </div>

      <section className="modules section" id="modules">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE THREE PILLARS</div>
            <h2>
              Три направления.
              <br />
              <em>Один интеллект.</em>
            </h2>
          </div>
          <p>
            Три взаимосвязанных направления, которые помогают работать с
            информацией, формулировать мысли и принимать обоснованные решения.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <Link
              href={module.href}
              className="module-card"
              key={module.number}
            >
              <div className="module-image">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
                <span className="module-number">{module.number}</span>
                <span className="module-arrow">↗</span>
              </div>

              <div className="module-info">
                <div className="module-subtitle">{module.subtitle}</div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <span className="module-link">ОТКРЫТЬ НАПРАВЛЕНИЕ →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="daily" id="daily">
        <div className="daily-content">
          <div className="eyebrow">YOUR DAILY CHALLENGE</div>
          <h2>
            Интеллект
            <br />
            <em>требует практики.</em>
          </h2>
          <p>
            Каждый день — небольшая подборка заданий на внимание, память,
            грамотность и логику. Выполняй задания, отслеживай прогресс и
            получай SMART POINTS.
          </p>
          <Link href="/dashboard" className="primary-btn">
            Перейти к заданиям <span>↗</span>
          </Link>
        </div>

        <div className="daily-visual">
          <div className="daily-orbit orbit-one" />
          <div className="daily-orbit orbit-two" />
          <div className="daily-symbol">✳</div>
          <div className="daily-label">
            <span>EVERY DAY</span>
            <strong>01</strong>
            <span>NEW CHALLENGE</span>
          </div>
        </div>
      </section>

      <section className="principles section" id="about">
        <div className="eyebrow">THE SMART MIND METHOD</div>
        <h2>
          Не просто знать.
          <br />
          <em>Уметь понимать.</em>
        </h2>

        <div className="principle-grid">
          <article>
            <span>01 / ANALYZE</span>
            <h3>Анализировать</h3>
            <p>
              Разбирать информацию и замечать детали, которые легко упустить.
            </p>
          </article>
          <article>
            <span>02 / CONNECT</span>
            <h3>Устанавливать связи</h3>
            <p>Видеть закономерности, причины и последствия событий.</p>
          </article>
          <article>
            <span>03 / EXPRESS</span>
            <h3>Формулировать</h3>
            <p>Выражать мысли ясно, последовательно и грамотно.</p>
          </article>
        </div>
      </section>

      <section className="final-scene">
        <Image
          src={images.castle}
          alt="Замок на холме"
          fill
          sizes="100vw"
          className="castle-image"
        />
        <div className="castle-overlay" />
        <div className="castle-content">
          <div className="eyebrow">A NEW WAY TO THINK</div>
          <h2>
            Начни с вопроса.
            <br />
            <em>Продолжи открытием.</em>
          </h2>
          <Link href="/login" className="light-btn">
            Войти в SMART MIND ↗
          </Link>
        </div>
        <span className="castle-caption">SMART MIND · EST. 2026</span>
      </section>

      <footer className="footer">
        <Link href="/" className="logo">
          SMART<span>MIND</span>
        </Link>
        <p>Платформа развития интеллектуальных навыков.</p>
        <span>© 2026 SMART MIND</span>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        :root {
          --paper: #eee9dc;
          --paper-light: #f5f1e7;
          --ink: #292c24;
          --olive: #667052;
          --muted: #858373;
          --gold: #aa9160;
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
        }

        a { color: inherit; text-decoration: none; }

        .header {
          height: 86px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(53,55,43,.13);
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 25px;
          letter-spacing: 1px;
        }

        .logo span { color: var(--olive); font-style: italic; }

        .header nav { display: flex; gap: 36px; }

        .header nav a {
          font-size: 11px;
          color: #68695e;
          transition: color .2s;
        }

        .header nav a:hover { color: var(--gold); }

        .account {
          border: 1px solid rgba(41,44,36,.35);
          padding: 12px 17px;
          font-size: 11px;
        }

        .account span { margin-left: 12px; }

        .hero {
          min-height: 650px;
          padding: 65px 7% 55px;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 30px;
          overflow: hidden;
        }

        .eyebrow {
          font-size: 9px;
          letter-spacing: 2.5px;
          color: var(--olive);
          font-weight: 700;
        }

        .eyebrow span {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--olive);
          margin-right: 9px;
        }

        h1, h2, h3, p { margin-top: 0; }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(58px, 7vw, 96px);
          line-height: .99;
          font-weight: 400;
          letter-spacing: -3px;
          margin: 28px 0;
        }

        h1 em, h2 em { color: var(--olive); font-weight: 400; }

        .hero-text {
          max-width: 400px;
          color: #77766a;
          font-size: 13px;
          line-height: 1.9;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
          margin-top: 30px;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 30px;
          padding: 17px 21px;
          background: var(--olive);
          color: white;
          font-size: 11px;
          transition: background .25s, transform .25s;
        }

        .primary-btn:hover {
          background: #414b36;
          transform: translateY(-3px);
        }

        .secondary-btn {
          font-size: 10px;
          color: #66675b;
        }

        .hero-note {
          display: flex;
          justify-content: space-between;
          max-width: 390px;
          border-top: 1px solid rgba(41,44,36,.18);
          padding-top: 16px;
          margin-top: 65px;
          color: #999486;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .hero-art {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .art-glow {
          position: absolute;
          width: 80%;
          aspect-ratio: 1;
          background: radial-gradient(circle, #d9d0b9 0%, transparent 70%);
          border-radius: 50%;
        }

        .art-frame {
          position: relative;
          width: 100%;
          height: 480px;
          animation: float 7s ease-in-out infinite;
        }

        .hero-image {
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        .art-caption {
          position: absolute;
          bottom: 0;
          right: 3%;
          left: 3%;
          display: flex;
          justify-content: space-between;
          color: #8a8575;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .art-side {
          position: absolute;
          right: -45px;
          top: 45%;
          writing-mode: vertical-rl;
          font-size: 8px;
          letter-spacing: 3px;
          color: #a39b88;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .ticker {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 20px;
          overflow: hidden;
          white-space: nowrap;
          background: #657052;
          color: #f1ecdf;
          padding: 19px 5%;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .ticker b { color: #c8b58c; }

        .section { padding: 115px 7%; }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 55px;
        }

        h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 5vw, 65px);
          line-height: 1.08;
          font-weight: 400;
          letter-spacing: -1.5px;
          margin: 20px 0 0;
        }

        .section-heading > p {
          max-width: 320px;
          color: #7e7b6e;
          font-size: 12px;
          line-height: 1.9;
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .module-card {
          display: block;
          background: var(--paper-light);
          border: 1px solid rgba(41,44,36,.1);
          transition: transform .3s, box-shadow .3s;
        }

        .module-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 40px rgba(44,43,31,.1);
        }

        .module-image {
          height: 290px;
          position: relative;
          overflow: hidden;
          background: #e5dfd0;
        }

        .module-image img {
          object-fit: contain;
          padding: 12px;
          mix-blend-mode: multiply;
          transition: transform .5s;
        }

        .module-card:hover .module-image img { transform: scale(1.06); }

        .module-number {
          position: absolute;
          top: 17px;
          left: 18px;
          font-size: 10px;
          color: #777565;
          z-index: 2;
        }

        .module-arrow {
          position: absolute;
          right: 16px;
          top: 12px;
          font-size: 20px;
          color: var(--olive);
          z-index: 2;
        }

        .module-info { padding: 25px 23px 28px; }

        .module-subtitle {
          font-size: 9px;
          color: var(--olive);
          letter-spacing: 1px;
        }

        .module-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 27px;
          font-weight: 400;
          margin: 13px 0;
        }

        .module-info p {
          min-height: 58px;
          color: #828073;
          font-size: 11px;
          line-height: 1.7;
        }

        .module-link {
          font-size: 8px;
          letter-spacing: 1.5px;
          color: var(--olive);
        }

        .daily {
          background: #e2ddce;
          padding: 90px 10%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 50px;
          overflow: hidden;
        }

        .daily-content h2 { margin-bottom: 25px; }

        .daily-content > p {
          max-width: 430px;
          font-size: 12px;
          line-height: 1.9;
          color: #77766a;
          margin-bottom: 28px;
        }

        .daily-visual {
          height: 350px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .daily-orbit {
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(102,112,82,.4);
          border-radius: 50%;
        }

        .orbit-two {
          width: 330px;
          height: 180px;
          transform: rotate(-35deg);
          border-color: rgba(170,145,96,.65);
        }

        .daily-symbol {
          font-family: 'Playfair Display', serif;
          font-size: 105px;
          color: var(--olive);
          animation: rotate 25s linear infinite;
        }

        @keyframes rotate { to { transform: rotate(360deg); } }

        .daily-label {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 8px;
          letter-spacing: 2px;
          color: #77766a;
        }

        .daily-label strong {
          font-family: 'Playfair Display', serif;
          font-size: 35px;
          font-weight: 400;
          color: var(--ink);
        }

        .principles { text-align: center; }

        .principle-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
          margin-top: 70px;
          text-align: left;
        }

        .principle-grid article {
          padding-top: 22px;
          border-top: 1px solid rgba(41,44,36,.25);
        }

        .principle-grid article span {
          color: var(--gold);
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .principle-grid h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 25px;
          margin: 25px 0 12px;
        }

        .principle-grid p {
          color: #7c796c;
          font-size: 11px;
          line-height: 1.8;
        }

        .final-scene {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          padding: 75px 10%;
          overflow: hidden;
          background: #555c46;
        }

        .castle-image {
          object-fit: cover;
          object-position: center 55%;
          opacity: .55;
        }

        .castle-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(35,40,31,.78), rgba(35,40,31,.12));
        }

        .castle-content {
          position: relative;
          z-index: 2;
          color: #f3eee2;
        }

        .castle-content .eyebrow { color: #d0bd92; }

        .castle-content h2 { margin: 25px 0 35px; }

        .castle-content h2 em { color: #d3c29d; }

        .light-btn {
          display: inline-block;
          padding: 16px 23px;
          background: #eee9dc;
          color: #303529;
          font-size: 10px;
        }

        .castle-caption {
          position: absolute;
          bottom: 25px;
          right: 7%;
          color: #e4ddcc;
          font-size: 8px;
          letter-spacing: 2px;
          z-index: 2;
        }

        .footer {
          min-height: 100px;
          padding: 25px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer p, .footer > span {
          font-size: 9px;
          color: #8a8779;
          margin: 0;
        }

        @media (max-width: 800px) {
          .header { height: 72px; padding: 0 5%; }
          .header nav { display: none; }
          .hero {
            grid-template-columns: 1fr;
            padding: 55px 7% 35px;
          }
          .hero h1 { font-size: 66px; }
          .hero-art { min-height: 330px; }
          .art-frame { height: 330px; }
          .art-side { right: 0; }
          .hero-note { margin-top: 40px; }
          .section { padding: 75px 6%; }
          .section-heading { display: block; }
          .section-heading > p { margin-top: 25px; }
          .module-grid { grid-template-columns: 1fr; }
          .module-image { height: 320px; }
          .daily {
            grid-template-columns: 1fr;
            padding: 70px 7%;
            gap: 10px;
          }
          .daily-visual { height: 290px; }
          .principle-grid { grid-template-columns: 1fr; gap: 25px; }
          .final-scene { min-height: 390px; padding: 60px 7%; }
          .footer { flex-wrap: wrap; }
        }

        @media (max-width: 420px) {
          .account { font-size: 9px; padding: 10px; }
          .hero h1 { font-size: 57px; }
          .hero-actions { gap: 15px; }
          .module-image { height: 270px; }
          .ticker { justify-content: flex-start; }
        }
      `}</style>
    </main>
  );
}
