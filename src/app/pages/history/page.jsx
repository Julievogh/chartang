import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.css";
import { libre_baskerville, poppins } from "../../layout";
import ShowHistory from "./ShowHistory";

export const revalidate = 1200;
export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1 className={libre_baskerville.className} style={{ color: "var(--colors-brand-turquoise-50)" }}>
            RESULTAT AF:
          </h1>
          <h3>Her er en liste over tidligere søgninger:</h3>

          <div className={styles.space}>
            <ShowHistory />
          </div>

          <button className={styles.btn} type="submit">
            <Link href="/">Prøv igen</Link>
          </button>

          <button type="submit" className={styles.btn2}>
            <Link href="/pages/rules">Rules</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
