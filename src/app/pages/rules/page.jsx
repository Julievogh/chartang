import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.css";
import { libre_baskerville, poppins } from "../../layout";

export const revalidate = 1200;
export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1 className={libre_baskerville.className} style={{ color: "var(--colors-brand-turquoise-50)" }}>
            REGLER
          </h1>
          <h3>Her er hvad vi tester:</h3>
          <h4>Region</h4>
          <p>
            It is best practice to contain all content excepting skip links, within distinct regions such as the header,
            nav, main, and footer.{" "}
          </p>

          <h4>Notes</h4>
          <p>
            "It is best practice to contain all content excepting skip links, within distinct regions such as the
            header, nav, main, and footer. "
          </p>
          <a href="https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer" target="_blank">
            Læs mere
          </a>
          <h4>Tab Index</h4>
          <p>
            A tabindex attribute must never have a value greater than 0 to prevent an unexpected tab order that can give
            the appearance of skipping some elements entirely.{" "}
          </p>
          <h4>Notes</h4>
          <p>
            "A tabindex attribute must never have a value greater than 0 to prevent an unexpected tab order that can
            give the appearance of skipping some elements entirely. "
          </p>
          <a href="https://dequeuniversity.com/rules/axe/4.9/tabindex?application=axe-puppeteer" target="_blank">
            Læs mere
          </a>
          <h4>Landmark One Main</h4>
          <p>
            It is a best practice to ensure that there is only one main landmark to navigate to the primary content of
            the page and that if the page contains iframe elements, each should either contain no landmarks, or just a
            single landmark.{" "}
          </p>
          <h4>Notes</h4>
          <p>
            "It is a best practice to ensure that there is only one main landmark to navigate to the primary content of
            the page and that if the page contains iframe elements, each should either contain no landmarks, or just a
            single landmark. "
          </p>
          <a
            href="https://dequeuniversity.com/rules/axe/4.9/landmark-one-main?application=axe-puppeteer"
            target="_blank"
          >
            Læs mere
          </a>

          <button className={styles.btn}>
            <Link href="/">Søg her</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
