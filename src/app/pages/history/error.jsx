"use client";

import React from "react";
import Link from "next/link";

export default function ResultPage() {
  return (
    <div>
      <h1>Du har ingen søgning</h1>
      <p>Prøv at søg nu:</p>
      <button type="submit">
        <Link href="/">SØG</Link>
      </button>
    </div>
  );
}
