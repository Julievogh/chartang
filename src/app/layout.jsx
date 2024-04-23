import { Poppins, Libre_Baskerville } from "next/font/google";

import "./globals.css";

export const poppins = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });
export const libre_baskerville = Libre_Baskerville({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Diversa Accessibility Project",
  description: "MMD Project case",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ backgroundColor: "var(--colors-brand-beige-10)" }}>
        {children}
      </body>
    </html>
  );
}
