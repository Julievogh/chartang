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
          RESULTAT AF: {data.url}
        </h1>
        <p>Tdspunkt for test: {data.timestamp}</p>
        <p>Der er {data.violations.length} problemer</p>

        <p>Der er {data.passes.length} elementer, der klarede testen</p>
        <p>Der er {data.incomplete.length} elementer der bør testes mere grundigt</p>
        <p>Der er {data.inapplicable.length} elementer der ikke kunne testes</p>
        <p>Der er {data.violations.length} problem</p>
        {data.violations.map((violation) => {
          return (
            <div>
              <p>Beskrivelse af problem: {violation.description}</p>
              <p>Hvad bør du gøre?: {violation.help}</p>
              <p>
                Tjek mere her: <a href={`/pages/rules/${violation.id}`}>{violation.helpUrl}</a>
              </p>
            </div>
          );
        })}

        <Image alt={data.url} src={data.screenshot.url} width={350} height={250} />
        <button className="styles.btn" type="submit">
          <Link href="/">Prøv igen</Link>
        </button>

        <button type="submit">
          <Link href="/pages/rules">Rules</Link>
        </button>
        <SaveURL url={data.url} />
      </div>
    </main>
  );
}
