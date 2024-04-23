import Image from "next/image";
import styles from "./page.module.css";
import { libre_baskerville, poppins } from "./layout";
import "./globals.css";
import React from "react";

import drDkData from "./json/dr_dk.json";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <h1 className={libre_baskerville.className}>Test din side</h1>
      <p>Hvordan går det med din hjemmeside?</p>

      <form action="/pages/result">
        <label htmlFor="url">Indtast URL:</label>
        <input type="url" name="url" id="url" />
        <button type="submit">Resultat</button>
      </form>
    </>
  );
}

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

(inde i main:)
<p>URL: {drDkData.url}</p>
      <p>Tags: {drDkData.tags.join(", ")}</p>

      console.log(data);
console.log(drDkData);
*/
