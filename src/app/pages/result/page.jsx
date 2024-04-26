import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.css";
import { libre_baskerville, poppins } from "../../layout";
import SaveURL from "./SaveURL";

export const revalidate = 1200;
export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);
  return (
    <main>
      <div className={styles.container}>
        <h1 className={libre_baskerville.className} style={{ color: "var(--colors-brand-turquoise-50)" }}>
          RESULTAT AF:
        </h1>
        <h2>{data.url}</h2>
        <Image alt={data.url} src={data.screenshot.url} width={450} height={300} />

        <div className={styles.description}>
          <p>Tdspunkt for test: {data.timestamp}</p>

          <p>Der er {data.passes.length} elementer, der klarede testen</p>
          <p>Der er {data.incomplete.length} elementer der bør testes mere grundigt</p>
          <p>Der er {data.inapplicable.length} elementer der ikke kunne testes</p>
          <p>Der er {data.violations.length} problemer</p>
        </div>
        <div className={styles.description3}>
          {data.violations.map((violation, index) => {
            return (
              <div key={index}>
                <h2>Problemer:</h2>
                <h4>ID</h4> <p> {violation.id}</p>
                <h4>Hvor seriøst?</h4> <p> {violation.impact}</p>
                <h4>Beskrivelse af problem:</h4> <p> {violation.description}</p>
                <h4>Hvad bør du gøre?:</h4> <p>{violation.help}</p>
                <p>
                  Tjek mere her:{" "}
                  <a className={styles.btn} href={`/pages/rules/${violation.id}`}>
                    Læs mere
                  </a>
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.container}>
          <button className={styles.btn2} type="submit">
            <Link href="/">Søg igen</Link>
          </button>

          <button className={styles.btn2} type="submit">
            <Link href="/pages/rules">Regler</Link>
          </button>
        </div>
        <SaveURL url={data.url} />
      </div>
    </main>
  );
}
