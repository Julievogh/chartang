import rules from "../json/rules.json";

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
      <div>
        <h1 className="text-3xl">My name is {headline}</h1>

        <p>Forklaring: {explanation}</p>

        <p>Noter: {notes}</p>

        <button>
          <a href="./">Tilbage til regler</a>
        </button>
      </div>
    </main>
  );
}
