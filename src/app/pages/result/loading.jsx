import React from "react";
import Link from "next/link";
import Spinner from "../../components/Spinner";
import styles from "../../page.module.css";
import { libre_baskerville, poppins } from "../../layout";

export default function ResultPage() {
  return (
    <div className={styles.container}>
      <h1 className={libre_baskerville.className} style={{ color: "var(--colors-brand-turquoise-50)" }}>
        LOADING PAGE
      </h1>
      <Spinner />
    </div>
  );
}

// tilføj noget sjovt her!!
