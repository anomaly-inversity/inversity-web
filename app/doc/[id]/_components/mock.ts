export const mockDoc = {
  id: "doc-01",
  title: "Q3 Marketing Report.pdf",
  description: "Q3 performance, channel breakdown & budget plan",
  pages: 12,
  size: "4.2 MB",
  status: "Processed",
  uploadedAt: "12 Sept 2026",
};

export const mockChatMessages = [
  {
    id: 1,
    role: "assistant" as const,
    text: "Halo! Dokumen Q3 Marketing Report sudah diproses. Tanya apa saja — ringkasan, angka kunci, atau perbandingan channel.",
    time: "09:41",
  },
  {
    id: 2,
    role: "user" as const,
    text: "Channel mana yang paling efisien di Q3?",
    time: "09:42",
  },
  {
    id: 3,
    role: "assistant" as const,
    text: "Organic Search paling efisien — CAC turun 22% dengan kontribusi 38% dari total pipeline. Paid Social naik volume tapi CAC +9%. Detail ada di tab Summary → Key Points.",
    time: "09:42",
  },
];

export const mockSuggestions = [
  "Ringkas dalam 3 poin",
  "Berapa total budget Q3?",
  "Bandingkan Q2 vs Q3",
];

export const mockSummary = {
  tldr:
    "Q3 tumbuh 18% QoQ didorong Organic & Partnership. CAC blended turun 11% ke $42. Q4 fokus: scale SEO content + realokasi 15% budget Paid ke Retargeting.",
  points: [
    "Revenue $1.24M (+18% QoQ) — 38% dari Organic Search.",
    "CAC blended $42 (-11%) — Paid Social CAC naik 9% jadi $61.",
    "Churn 3.1% (-0.6pp) setelah onboarding revamp.",
    "Top insight: halaman pricing v2 konversi +27%.",
  ],
  keywords: ["Q3", "CAC", "Organic", "Pipeline", "Retargeting"],
};

export const mockDetector = {
  score: 12,
  verdict: "Likely Human",
  label: "AI probability",
  sections: [
    { name: "Executive Summary", ai: 8, human: 92 },
    { name: "Channel Breakdown", ai: 18, human: 82 },
    { name: "Appendix Tables", ai: 4, human: 96 },
  ],
};
