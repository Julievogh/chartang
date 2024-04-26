import Image from "next/image";
import styles from "./page.module.css";
import { libre_baskerville, poppins } from "./layout";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Spinner from "./components/Spinner";

export default async function Page() {
  return (
    <>
      <div className={styles.container}>
        <div>
          {" "}
          <Image src="/diversa.svg" alt="Logo" width={100} height={24} priority />{" "}
        </div>
        <h1 className={libre_baskerville.className} style={{ color: "var(--colors-brand-turquoise-50)" }}>
          Test din side
        </h1>

        <p>Hvordan går det med din hjemmeside?</p>
      </div>

      <form action="/pages/result">
        <div className={styles.container}>
          <label htmlFor="url">Indtast URL:</label>
          <input type="url" name="url" id="url" />
          <button className={styles.btn} type="submit">
            Resultat
          </button>
        </div>
      </form>

      <div></div>
    </>
  );
}
