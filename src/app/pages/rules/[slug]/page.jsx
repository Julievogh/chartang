import rules from "../json/rules.json";
import styles from "../../../page.module.css";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = rules[slug];

  return {
    headline: data.headline,
    explanation: data.explanation,
    notes: data.notes,
  };
}

export default async function RulePage({ params }) {
  const { slug } = params;

  const oneRule = rules[slug];

  const { headline, explanation, notes } = oneRule;

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1 className="text-3xl">{headline}</h1>

          <h4>Forklaring: </h4>
          <p>{explanation}</p>
          <h4>Noter: </h4>
          <p> {notes}</p>

          <a href="./">Tilbage til regler</a>
        </div>
      </div>
    </main>
  );
}
