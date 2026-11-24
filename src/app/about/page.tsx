
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#172119",
      color: "#f1efdf",
      padding: "35px 7%",
      fontFamily: "Arial, sans-serif"
    }}>
      <Link href="/" style={{
        color: "#c9d8b6",
        textDecoration: "none",
        letterSpacing: "2px"
      }}>
        ← SMART MIND
      </Link>

      <div style={{
        maxWidth: "850px",
        margin: "120px auto"
      }}>
        <p style={{
          color: "#aab99a",
          letterSpacing: "4px",
          fontSize: "11px"
        }}>
          ABOUT THE PROJECT
        </p>

        <h1 style={{
          fontSize: "clamp(38px, 7vw, 72px)",
          fontWeight: 400,
          fontFamily: "Georgia, serif"
        }}>
          Учись мыслить.
          <br />
          Создавай новое.
        </h1>

        <p style={{
          color: "#c0c5b5",
          lineHeight: 2,
          fontSize: "16px",
          maxWidth: "680px"
        }}>
          SMART MIND — интеллектуальная образовательная
          платформа для школьников, направленная на развитие
          грамотности, логического и критического мышления.
        </p>

        <h2 style={{
          marginTop: "65px",
          fontWeight: 400
        }}>
          Цель проекта
        </h2>

        <p style={{
          color: "#c0c5b5",
          lineHeight: 1.9
        }}>
          Создать доступное цифровое пространство, в котором
          школьники смогут развивать навыки работы с текстом,
          учиться анализировать информацию и самостоятельно
          находить решения.
        </p>

        <Link href="/modules" style={{
          display: "inline-block",
          marginTop: "35px",
          padding: "15px 28px",
          background: "#e8e2cf",
          color: "#263126",
          borderRadius: "30px",
          textDecoration: "none",
          letterSpacing: "2px",
          fontSize: "12px"
        }}>
          К ОБУЧЕНИЮ →
        </Link>
      </div>
    </main>
  );
}
