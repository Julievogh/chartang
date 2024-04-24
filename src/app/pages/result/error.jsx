"use client";

import React from "react";
import Link from "next/link";

export default function ResultPage() {
  return (
    <div>
      <h1>FEJL!</h1>
      <p>Prøv igen...</p>
      <button type="submit">
        <Link href="/">TRY AGAIN</Link>
      </button>
    </div>
  );
}
