"use client";

import React from "react";
import Link from "next/link";

export default function ResultPage() {
  return (
    <div>
      <h1>LOADING PAGE</h1>
      <button type="submit">
        <Link href="/pages/result/{id}">RESULT</Link>
      </button>

      <button type="submit">
        <Link href="/pages/result">ERROR</Link>
      </button>
    </div>
  );
}
