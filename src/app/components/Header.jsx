import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/diversa.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />{" "}
      <nav>
        <h1 className="styles.container">navbar</h1>
        <div className="links">
          <Link href={"/"}>Søg</Link>
          <Link href={"/"}>Resultater</Link>
          <Link href={"./pages/rules/page.jsx"}>Regler</Link>
        </div>
      </nav>
      <p>HEJSA</p>
    </header>
  );
}
