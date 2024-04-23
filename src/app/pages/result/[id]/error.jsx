"use client";

import React from "react";
import Link from "next/link";

export default function ResultPage() {
  return (
    <div>
      <h1>ERROR</h1>

      <button type="submit">
        <Link href="/pages/result">TRY AGAIN</Link>
      </button>
    </div>
  );
}
