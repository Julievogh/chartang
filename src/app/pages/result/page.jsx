import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.css";
import { libre_baskerville, poppins } from "../../layout";

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
        <p>Found {data.violations.length} issues</p>
        <p> Beskrivelse: {data.description} </p>

        <Image alt={data.url} src={data.screenshot.url} width={350} height={250} />
        <button type="submit">
          <Link href="/">Prøv igen</Link>
        </button>

        <button type="submit">
          <Link href="/pages/rules">Rules</Link>
        </button>
      </div>
    </main>
  );
}
