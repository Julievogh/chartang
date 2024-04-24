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
          REGLER
        </h1>
        <h3>Her er hvad vi tester:</h3>
        <p>Problemer</p>
        <p>Passes</p>
        <p>Inapplicable</p>
        <p>Incomplete</p>
        <p>Screenshot</p>
        <p>Prøv selv her:</p>

        <button>
          <Link href="/">Søg her</Link>
        </button>
      </div>
    </main>
  );
}
