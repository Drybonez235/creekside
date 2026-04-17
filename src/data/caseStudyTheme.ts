/**
 * Single Creekside brand theme for all case studies.
 * Colors derived from the site's existing Tailwind palette:
 * - Primary Navy: #102a43
 * - Secondary Sky Blue: #0284c7
 */

export interface CaseStudyTheme {
  heroGradient: string;
  accentColor: string;
  accentLight: string;
  accentGlow: string;
  highlightBg: string;
  highlightBorder: string;
  successColor: string;
  successBg: string;
  successBorder: string;
  tableBg: string;
  quoteBorder: string;
  quoteBg: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

export const creeksideTheme: CaseStudyTheme = {
  heroGradient: "linear-gradient(135deg, #0f172a 0%, #102a43 50%, #0c4a6e 100%)",
  accentColor: "#0284c7",
  accentLight: "#38bdf8",
  accentGlow: "rgba(2, 132, 199, 0.12)",
  highlightBg: "rgba(2, 132, 199, 0.08)",
  highlightBorder: "rgba(2, 132, 199, 0.2)",
  successColor: "#10b981",
  successBg: "rgba(16, 185, 129, 0.08)",
  successBorder: "rgba(16, 185, 129, 0.2)",
  tableBg: "#102a43",
  quoteBorder: "#0284c7",
  quoteBg: "rgba(2, 132, 199, 0.06)",
  badgeBg: "rgba(2, 132, 199, 0.2)",
  badgeBorder: "rgba(2, 132, 199, 0.4)",
  badgeText: "#7dd3fc",
};
