"use client";

import React from "react";
import Link from "next/link";

export default function ResultPage() {
  return (
    <div className={styles.container}>
      <h1 className={libre_baskerville.className} style={{ color: "var(--colors-brand-turquoise-50)" }}>
        FEJL!
      </h1>
      <p>Prøv igen...</p>
      <button type="submit">
        <Link href="/">TRY AGAIN</Link>
      </button>
    </div>
  );
}
