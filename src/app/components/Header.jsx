import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/diversa.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />{" "}
      <nav>
        <h1 className="styles.container">Diversa</h1>
        <div className="links">
          <Link href={"/"}>Søg</Link>
          <Link href={"/pages/history/"}>Resultater</Link>
          <Link href="/pages/rules/">Regler</Link>
        </div>
      </nav>
      <p>Tjek din hjemmeside</p>
    </header>
  );
}
