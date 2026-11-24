
"use client";

import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "SMART WRITE",
    subtitle: "Грамотность и работа с текстом",
    description: "Работа со словами, текстами, орфографией и точностью выражений.",
    symbol: "Aa",
    href: "/modules",
  },
  {
    number: "02",
    title: "SMART THINK",
    subtitle: "Логика и мышление",
    description: "Закономерности, задачи, анализ и поиск нестандартных решений.",
    symbol: "∴",
    href: "/modules",
  },
  {
    number: "03",
    title: "SMART CHECK",
    subtitle: "Критическое мышление",
    description: "Проверка фактов, анализ информации и распознавание ошибок.",
    symbol: "⌕",
    href: "/modules",
  },
];

const games = [
  { name: "WORD MASTER", description: "Слова и грамотность", price: 100, symbol: "Aa" },
  { name: "PATTERN", description: "Закономерности и логика", price: 80, symbol: "◇" },
  { name: "FOCUS", description: "Внимание и концентрация", price: 80, symbol: "◎" },
  { name: "MEMORY GRID", description: "Память и последовательности", price: 120, symbol: "▦" },
  { name: "TRUE OR FALSE", description: "Факты и критическое мышление", price: 100, symbol: "?" },
  { name: "STORY BUILDER", description: "Последовательность событий", price: 120, symbol: "¶" },
];

function BrainArt() {
  return (
    <svg viewBox="0 0 500 420" className="brain-art" fill="none">
      <g stroke="currentColor" strokeWidth="1" opacity=".35">
        <circle cx="250" cy="205" r="165" />
        <circle cx="250" cy="205" r="135" strokeDasharray="3 7" />
        <ellipse cx="250" cy="205" rx="205" ry="80" transform="rotate(-28 250 205)" />
        <ellipse cx="250" cy="205" rx="205" ry="80" transform="rotate(35 250 205)" />
        <path d="M250 20V390M55 205H445" />
      </g>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M245 94C211 62 166 89 174 129C135 124 116 165 139 192C111 220 132 257 157 264C143 298 178 327 207 310C218 341 243 344 250 318" />
        <path d="M255 94C289 62 334 89 326 129C365 124 384 165 361 192C389 220 368 257 343 264C357 298 322 327 293 310C282 341 257 344 250 318" />
        <path d="M250 95V318" />
        <path d="M181 139C209 111 230 142 208 167C190 186 160 171 151 201" />
        <path d="M143 222C177 191 210 221 188 247C171 267 153 252 160 282" />
        <path d="M194 288C213 263 238 277 230 303" />
        <path d="M319 139C291 111 270 142 292 167C310 186 340 171 349 201" />
        <path d="M357 222C323 191 290 221 312 247C329 267 347 252 340 282" />
        <path d="M306 288C287 263 262 277 270 303" />
      </g>
      <g fill="currentColor">
        <circle cx="250" cy="205" r="4" />
        <circle cx="85" cy="105" r="3" />
        <circle cx="410" cy="305" r="3" />
      </g>
      <g stroke="currentColor" opacity=".55">
        <path d="M85 105H130M410 305H370" />
        <path d="M240 20H260M240 390H260" />
      </g>
      <text x="250" y="410" textAnchor="middle" fill="currentColor" fontSize="9" letterSpacing="4">
        HUMAN MIND / FIG. 001
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="smart">
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .smart {
          --paper: #eeece3;
          --light: #f7f5ed;
          --ink: #292b25;
          --olive: #68704f;
          --dark: #353c2e;
          --muted: #77796d;
          color: var(--ink);
          background: var(--paper);
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        .smart a { color: inherit; text-decoration: none; }

        .sm-header {
          min-height: 76px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(41,43,37,.17);
        }

        .sm-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font: 24px Georgia, serif;
          letter-spacing: -1px;
        }

        .sm-mark { color: var(--olive); font-size: 30px; }

        .sm-nav { display: flex; gap: 28px; font-size: 13px; color: #606257; }
        .sm-nav a:hover { color: var(--olive); }

        .sm-actions { display: flex; gap: 10px; align-items: center; }
        .sm-login, .sm-pill {
          padding: 11px 20px;
          border: 1px solid var(--olive);
          border-radius: 30px;
          font-size: 12px;
        }

        .sm-pill {
          color: white !important;
          background: var(--dark);
          transition: .25s;
        }

        .sm-pill:hover { background: var(--olive); transform: translateY(-2px); }

        .sm-hero {
          min-height: 570px;
          padding: 65px 8%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 25px;
          background:
            radial-gradient(ellipse at 85% 42%, rgba(132,140,104,.2), transparent 40%),
            linear-gradient(115deg,#eeece3,#e5e4d9);
          position: relative;
        }

        .sm-copy { position: relative; z-index: 2; }

        .sm-eyebrow {
          color: var(--olive);
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .sm-hero h1 {
          font: 400 clamp(48px,6.3vw,82px)/.99 Georgia,serif;
          letter-spacing: -3px;
          margin: 0 0 24px;
        }

        .sm-hero h1 em { color: var(--olive); font-weight: 400; }

        .sm-description {
          max-width: 420px;
          color: #686a60;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .sm-main-button {
          display: inline-flex;
          gap: 25px;
          align-items: center;
          padding: 15px 23px;
          border-radius: 30px;
          background: var(--dark);
          color: white !important;
          font-size: 13px;
          transition: .25s;
        }

        .sm-main-button:hover { transform: translateY(-3px); background: var(--olive); }

        .sm-art {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 390px;
          color: var(--olive);
        }

        .brain-art { width: 100%; max-width: 490px; animation: brainFloat 7s ease-in-out infinite; }

        .sm-art-caption {
          position: absolute;
          right: 7%;
          bottom: 28px;
          color: var(--muted);
          font: 11px Georgia,serif;
          letter-spacing: 2px;
        }

        .sm-section { padding: 75px 8%; }

        .sm-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 35px;
        }

        .sm-heading h2 {
          font: 400 clamp(34px,4vw,52px)/1.08 Georgia,serif;
          margin: 0;
        }

        .sm-heading p {
          max-width: 290px;
          font-size: 13px;
          color: var(--muted);
          line-height: 1.7;
        }

        .sm-modules {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 15px;
        }

        .sm-module {
          min-height: 225px;
          padding: 25px;
          background: rgba(255,255,255,.34);
          border: 1px solid rgba(41,43,37,.18);
          border-radius: 4px;
          position: relative;
          transition: .3s;
        }

        .sm-module:hover {
          transform: translateY(-5px);
          background: var(--light);
          border-color: var(--olive);
        }

        .sm-module-number { color: var(--olive); font: 13px Georgia,serif; }
        .sm-module-symbol { position: absolute; right: 22px; top: 12px; font: 65px Georgia,serif; color: rgba(104,112,79,.22); }
        .sm-module h3 { font: 400 24px Georgia,serif; margin: 42px 0 8px; }
        .sm-module strong { font-size: 12px; font-weight: 500; }
        .sm-module p { color: var(--muted); font-size: 12px; line-height: 1.7; max-width: 250px; }

        .sm-daily {
          margin: 0 8% 75px;
          padding: 45px 5%;
          background: var(--dark);
          color: var(--light);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 35px;
        }

        .sm-daily h2 { font: 400 clamp(34px,4vw,50px)/1.08 Georgia,serif; margin: 10px 0 15px; }
        .sm-daily p { color: #d2d3c7; font-size: 13px; line-height: 1.8; max-width: 410px; }
        .sm-daily .sm-eyebrow { color: #c3c9a9; }

        .sm-task-preview {
          border: 1px solid rgba(255,255,255,.27);
          background: rgba(255,255,255,.07);
          padding: 24px;
        }

        .sm-task-preview small { color: #c4c9b0; letter-spacing: 2px; text-transform: uppercase; }
        .sm-task-preview h3 { font: 400 25px Georgia,serif; margin: 18px 0 10px; }
        .sm-task-preview p { margin: 0 0 18px; }

        .sm-reward {
          display: inline-block;
          border: 1px solid #b9c19c;
          color: #e2e7d0;
          border-radius: 20px;
          padding: 8px 14px;
          font-size: 12px;
        }

        .sm-points {
          padding: 50px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          border-top: 1px solid rgba(41,43,37,.18);
          border-bottom: 1px solid rgba(41,43,37,.18);
        }

        .sm-points h2 { font: 400 36px Georgia,serif; margin: 8px 0; }
        .sm-points p { color: var(--muted); font-size: 13px; line-height: 1.7; max-width: 420px; }

        .sm-points-balance {
          border: 1px solid rgba(104,112,79,.45);
          padding: 22px 30px;
          min-width: 180px;
          background: rgba(255,255,255,.25);
        }

        .sm-points-balance small { color: var(--muted); letter-spacing: 2px; }
        .sm-points-balance strong { display: block; font: 42px Georgia,serif; color: var(--olive); margin-top: 8px; }

        .sm-games { padding: 75px 8%; }

        .sm-game-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 13px;
        }

        .sm-game {
          min-height: 155px;
          padding: 20px;
          border: 1px solid rgba(41,43,37,.2);
          background: rgba(255,255,255,.28);
          transition: .25s;
        }

        .sm-game:hover { background: var(--light); transform: translateY(-4px); }
        .sm-game-symbol { color: var(--olive); font: 32px Georgia,serif; }
        .sm-game h3 { font: 400 18px Georgia,serif; margin: 14px 0 5px; }
        .sm-game p { font-size: 12px; color: var(--muted); margin: 0 0 15px; }
        .sm-game span { color: var(--olive); font-size: 11px; }

        .sm-about {
          padding: 15px 8% 75px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .sm-about h2 { font: 400 42px/1.1 Georgia,serif; margin: 8px 0 15px; }
        .sm-about p { color: var(--muted); font-size: 13px; line-height: 1.8; }

        .sm-benefits { border-top: 1px solid rgba(41,43,37,.2); }
        .sm-benefit { padding: 17px 0; border-bottom: 1px solid rgba(41,43,37,.2); font-size: 13px; }
        .sm-benefit b { color: var(--olive); font: 20px Georgia,serif; margin-right: 15px; }

        .sm-footer {
          padding: 25px 8%;
          border-top: 1px solid rgba(41,43,37,.2);
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-size: 11px;
          color: var(--muted);
        }

        @keyframes brainFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @media(max-width:760px) {
          .sm-header { padding: 15px 5%; min-height: 68px; }
          .sm-logo { font-size: 19px; }
          .sm-nav { display: none; }
          .sm-actions { gap: 6px; }
          .sm-login,.sm-pill { padding: 10px 12px; font-size: 10px; }
          .sm-hero { grid-template-columns: 1fr; padding: 52px 7% 30px; }
          .sm-hero h1 { font-size: clamp(48px,12vw,68px); letter-spacing: -2px; }
          .sm-art { min-height: 285px; }
          .brain-art { max-width: 350px; }
          .sm-art-caption { bottom: 12px; right: 7%; }
          .sm-section,.sm-games { padding: 55px 6%; }
          .sm-heading { display: block; }
          .sm-heading p { margin-top: 16px; }
          .sm-modules,.sm-game-grid { grid-template-columns: 1fr; }
          .sm-module { min-height: 200px; }
          .sm-daily { margin: 0 6% 55px; padding: 32px 7%; grid-template-columns: 1fr; }
          .sm-points { padding: 40px 7%; align-items: flex-start; flex-direction: column; }
          .sm-about { padding: 10px 7% 55px; grid-template-columns: 1fr; gap: 20px; }
          .sm-about h2 { font-size: 36px; }
          .sm-footer { padding: 22px 6%; flex-direction: column; }
        }

        @media(prefers-reduced-motion:reduce) {
          .brain-art { animation: none; }
          .smart * { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>

      <header className="sm-header">
        <Link href="/" className="sm-logo">
          <span className="sm-mark">✳</span> SMART MIND
        </Link>
        <nav className="sm-nav">
          <a href="#modules">Модули</a>
          <a href="#daily">Задания</a>
          <a href="#games">Игры</a>
          <a href="#about">О проекте</a>
        </nav>
        <div className="sm-actions">
          <Link href="/login" className="sm-login">Войти</Link>
          <Link href="/login" className="sm-pill">Начать</Link>
        </div>
      </header>

      <section className="sm-hero">
        <div className="sm-copy">
          <div className="sm-eyebrow">A space for curious minds · 2026</div>
          <h1>
            Развивай<br />
            мышление.<br />
            <em>Открывай</em><br />
            возможности.
          </h1>
          <p className="sm-description">
            Интерактивная платформа, где ежедневные задания,
            интеллектуальные игры и образовательные модули
            помогают развивать навыки мышления.
          </p>
          <Link href="/login" className="sm-main-button">
            Начать развитие <span>→</span>
          </Link>
        </div>
        <div className="sm-art">
          <BrainArt />
        </div>
        <div className="sm-art-caption">FIG. 001 / THE HUMAN MIND</div>
      </section>

      <section className="sm-section" id="modules">
        <div className="sm-heading">
          <div>
            <div className="sm-eyebrow">01 / Learning modules</div>
            <h2>Три направления.<br />Один путь развития.</h2>
          </div>
          <p>Выбирай направление, выполняй упражнения и наблюдай за своим прогрессом.</p>
        </div>
        <div className="sm-modules">
          {modules.map((item) => (
            <Link href={item.href} className="sm-module" key={item.number}>
              <span className="sm-module-number">{item.number}</span>
              <span className="sm-module-symbol">{item.symbol}</span>
              <h3>{item.title}</h3>
              <strong>{item.subtitle}</strong>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sm-daily" id="daily">
        <div>
          <div className="sm-eyebrow">02 / Daily challenge</div>
          <h2>Каждый день —<br />новое испытание.</h2>
          <p>
            Небольшие задания на логику, внимание, память,
            грамотность и критическое мышление.
            Выполняй их и получай баллы.
          </p>
          <Link href="/login" className="sm-main-button">
            Перейти к заданиям <span>→</span>
          </Link>
        </div>
        <div className="sm-task-preview">
          <small>Daily mind / Challenge</small>
          <h3>Твоя ежедневная тренировка</h3>
          <p>Несколько коротких заданий. Разные навыки. Один шаг вперёд.</p>
          <span className="sm-reward">+ SMART POINTS</span>
        </div>
      </section>

      <section className="sm-points">
        <div>
          <div className="sm-eyebrow">03 / Reward system</div>
          <h2>Думай. Выполняй. Получай.</h2>
          <p>
            За выполненные задания начисляются SMART POINTS.
            Используй их, чтобы открывать дополнительные
            интеллектуальные мини-игры.
          </p>
        </div>
        <div className="sm-points-balance">
          <small>SMART POINTS</small>
          <strong>+10 SP</strong>
          <small>За выполненное задание</small>
        </div>
      </section>

      <section className="sm-games" id="games">
        <div className="sm-heading">
          <div>
            <div className="sm-eyebrow">04 / Smart games</div>
            <h2>Играй и развивайся.</h2>
          </div>
          <p>Дополнительные игры, которые можно открывать за заработанные баллы.</p>
        </div>
        <div className="sm-game-grid">
          {games.map((game) => (
            <div className="sm-game" key={game.name}>
              <div className="sm-game-symbol">{game.symbol}</div>
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <span>{game.price} SMART POINTS</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sm-about" id="about">
        <div>
          <div className="sm-eyebrow">05 / About SMART MIND</div>
          <h2>Мышление — навык,<br />который развивается.</h2>
          <p>
            SMART MIND объединяет обучение, практику и игровые
            механики в едином цифровом пространстве.
            Здесь важно не просто получить правильный ответ,
            а научиться самостоятельно находить решение.
          </p>
        </div>
        <div className="sm-benefits">
          <div className="sm-benefit"><b>01</b> Ежедневная интеллектуальная практика</div>
          <div className="sm-benefit"><b>02</b> Разные форматы упражнений</div>
          <div className="sm-benefit"><b>03</b> Личный прогресс и достижения</div>
          <div className="sm-benefit"><b>04</b> Игры за заработанные баллы</div>
        </div>
      </section>

      <footer className="sm-footer">
        <span>✳ SMART MIND</span>
        <span>Учись. Думай. Развивайся.</span>
        <span>© 2026 SMART MIND</span>
      </footer>
    </main>
  );
}
