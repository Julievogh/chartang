import axe from "axe-core";

export async function runAccessibilityTests() {
  try {
    const results = await axe.run();
    if (results.violations.length) {
      console.error("Accessibility issues found:", results.violations);
    } else {
      console.log("No accessibility issues found.");
    }
  } catch (error) {
    console.error("Error running accessibility tests:", error);
  }
}
