import Image from "next/image";
import styles from "./page.module.css";
import { libre_baskerville, poppins } from "./layout";
import "./globals.css";
import React from "react";

import drDkData from "./json/dr_dk.json";
import Link from "next/link";

export default async function Page() {
  // Henter data fra JSON filen dr_dk

  const params = new URLSearchParams({
    url: "https://www.charlietango.dk",
  });
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  console.log(data);
  console.log(drDkData);
  /*
  const params = new URLSearchParams({
    url: drDkData.url,
    tags: drDkData.tags,
    "screenshot.url": drDkData.screenshot.url,
    "screenshot.width": drDkData.screenshot.width.toString(),
    "screenshot.height": drDkData.screenshot.height.toString(),
  });

  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const buttonSubmit = (e) => {
    e.preventDefault();
    Router.push("/report/placeholder");
  };
  const data = await response.json();
*/
  return (
    <main>
      <h1 className={libre_baskerville.className}>My page is </h1>
      <p>Hello World! This is a paragraph </p>

      <form action="">
        <label htmlFor="url">Indtast URL:</label>
        <input type="text" name="url" id="url" />
        <button type="submit">
          <Link href="/pages/result">RESULT</Link>
        </button>
      </form>
      <p>URL: {drDkData.url}</p>
      <p>Tags: {drDkData.tags.join(", ")}</p>
    </main>
  );
}
