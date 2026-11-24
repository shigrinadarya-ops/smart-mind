
import Link from "next/link";

const modules = [
  {
    number: "01",
    name: "SMART WRITE",
    subtitle: "Грамотность и работа с текстом",
    description:
      "Развивай навыки письма, учись формулировать мысли, находить и исправлять ошибки.",
    tag: "TEXT & LITERACY",
    href: "/modules/write",
  },
  {
    number: "02",
    name: "SMART THINK",
    subtitle: "Логика и развитие мышления",
    description:
      "Тренируй логическое мышление, внимание, память и способность находить нестандартные решения.",
    tag: "LOGIC & THINKING",
    href: "/modules/think",
  },
  {
    number: "03",
    name: "SMART CHECK",
    subtitle: "Критическое мышление и анализ",
    description:
      "Учись анализировать информацию, проверять факты и отличать аргументы от мнений.",
    tag: "CRITICAL THINKING",
    href: "/modules/check",
  },
];

export default function ModulesPage() {
  return (
    <main className="modules-page">
      <header className="topbar">
        <Link href="/" className="logo">
          SMART MIND
        </Link>

        <nav>
          <Link href="/about">О проекте</Link>
          <Link href="/modules" className="active">Направления</Link>
        </nav>
      </header>

      <section className="intro">
        <p className="eyebrow">THE LEARNING SPACE</p>

        <h1>
          Выбери своё
          <br />
          <span>направление.</span>
        </h1>

        <p className="intro-text">
          Три направления. Разные навыки. Одна цель —
          научиться мыслить самостоятельно.
        </p>
      </section>

      <section className="module-list">
        {modules.map((item) => (
          <Link href={item.href} className="module-card" key={item.number}>
            <div className="card-top">
              <span className="number">{item.number}</span>
              <span className="tag">{item.tag}</span>
            </div>

            <div className="card-content">
              <h2>{item.name}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
            </div>

            <div className="card-bottom">
              <span>ПЕРЕЙТИ К МОДУЛЮ</span>
              <span className="arrow">↗</span>
            </div>
          </Link>
        ))}
      </section>

      <footer>
        <span>SMART MIND</span>
        <span>THINK. LEARN. CREATE.</span>
      </footer>

      <style jsx>{`
        .modules-page {
          min-height: 100vh;
          background: #172119;
          color: #eeeadd;
          padding: 0 7%;
          font-family: Arial, sans-serif;
        }

        .topbar {
          min-height: 85px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #465044;
        }

        .logo {
          color: #eeeadd;
          text-decoration: none;
          font-size: 17px;
          letter-spacing: 4px;
          font-weight: 600;
        }

        nav {
          display: flex;
          gap: 30px;
        }

        nav a {
          color: #b9c0ae;
          text-decoration: none;
          font-size: 13px;
        }

        nav a.active {
          color: #e8e2cf;
          border-bottom: 1px solid #c9d8b6;
          padding-bottom: 7px;
        }

        .intro {
          padding: 95px 0 55px;
        }

        .eyebrow {
          color: #aab99a;
          font-size: 10px;
          letter-spacing: 5px;
        }

        h1 {
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(46px, 8vw, 82px);
          line-height: 1.05;
          margin: 25px 0;
        }

        h1 span {
          color: #bdc9a9;
          font-style: italic;
        }

        .intro-text {
          max-width: 470px;
          color: #b9c0ae;
          line-height: 1.8;
          font-size: 14px;
        }

        .module-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding-bottom: 100px;
        }

        .module-card {
          min-height: 340px;
          padding: 25px;
          border: 1px solid #59634f;
          background: #202c22;
          color: #eeeadd;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: 0.3s ease;
        }

        .module-card:hover {
          background: #2c3a2d;
          transform: translateY(-6px);
          border-color: #bdc9a9;
        }

        .card-top,
        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .number {
          font-family: Georgia, serif;
          font-size: 27px;
          color: #bdc9a9;
        }

        .tag {
          font-size: 9px;
          letter-spacing: 2px;
          color: #aab99a;
        }

        .card-content {
          margin: 35px 0;
        }

        h2 {
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 400;
          margin-bottom: 12px;
        }

        h3 {
          font-size: 13px;
          font-weight: 400;
          color: #bdc9a9;
        }

        .card-content p {
          color: #b9c0ae;
          font-size: 13px;
          line-height: 1.8;
          margin-top: 20px;
        }

        .card-bottom {
          border-top: 1px solid #59634f;
          padding-top: 18px;
          font-size: 9px;
          letter-spacing: 2px;
          color: #bdc9a9;
        }

        .arrow {
          font-size: 22px;
        }

        footer {
          border-top: 1px solid #465044;
          padding: 25px 0;
          display: flex;
          justify-content: space-between;
          color: #aab99a;
          font-size: 10px;
          letter-spacing: 2px;
        }

        @media (max-width: 750px) {
          .module-list {
            grid-template-columns: 1fr;
          }

          .module-card {
            min-height: 280px;
          }

          nav {
            gap: 14px;
          }

          nav a {
            font-size: 11px;
          }

          .intro {
            padding-top: 70px;
          }
        }
      `}</style>
    </main>
  );
}
