import React from "react";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 1200;
export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);
  return (
    <main>
      <div>
        <h1>RESULT FROM URL: {data.url}</h1>
        <p>Her er: </p>
        <p>her er {data.description}</p>
        <p>Der er {data.violations.length} problemer</p>
        <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
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
