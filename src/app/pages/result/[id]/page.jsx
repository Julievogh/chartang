import React from "react";
import Link from "next/link";

export default function ResultPage({ params, searchParams }) {
  return (
    <div>
      <h1>RESULT FROM URL: {params.id}</h1>
      <p>Her er: {searchParams.id} searchParams???</p>
      <button type="submit">
        <Link href="/">Prøv igen</Link>
      </button>

      <button type="submit">
        <Link href="/pages/rules">Rules</Link>
      </button>
    </div>
  );
}
