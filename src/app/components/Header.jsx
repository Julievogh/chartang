import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav>
        <Image src="/DiversaIcon.svg" alt="Logo" width={100} height={24} priority />{" "}
        <h1 className={styles.container}>Diversa</h1>
        <div className="links">
          <Link href={"/"}>Søg</Link>
          <Link href={"/pages/history/"}>Resultater</Link>
          <Link href="/pages/rules/">Regler</Link>
        </div>
      </nav>
      <div className={styles.container2}>
        <p>Tjek din hjemmeside</p>
      </div>
    </header>
  );
}
