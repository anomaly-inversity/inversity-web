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

export type DetectorParagraph = {
  id: string;
  text: string;
  ai: boolean;
  score: number;
};

export type DetectorPage = {
  page: number;
  title: string;
  ai: number;
  paragraphs: DetectorParagraph[];
};

export const mockDetectorPages: DetectorPage[] = [
  {
    page: 1,
    title: "Cover & Executive Summary",
    ai: 6,
    paragraphs: [
      {
        id: "p1-1",
        text: "Laporan ini merangkum kinerja pemasaran Q3 2026 dengan pendekatan berbasis data dari seluruh channel akuisisi.",
        ai: false,
        score: 4,
      },
      {
        id: "p1-2",
        text: "Revenue tercatat $1.24M, tumbuh 18% QoQ, dengan kontribusi terbesar dari Organic Search sebesar 38%.",
        ai: false,
        score: 7,
      },
    ],
  },
  {
    page: 2,
    title: "Revenue Breakdown",
    ai: 9,
    paragraphs: [
      {
        id: "p2-1",
        text: "Segmen enterprise tumbuh paling cepat setelah peluncuran paket tahunan dengan insentif onboarding.",
        ai: false,
        score: 11,
      },
      {
        id: "p2-2",
        text: "Kontribusi mid-market stabil, sementara segmen SMB menunjukkan fluktuasi mingguan yang wajar.",
        ai: false,
        score: 6,
      },
    ],
  },
  {
    page: 3,
    title: "Channel Breakdown",
    ai: 34,
    paragraphs: [
      {
        id: "p3-1",
        text: "Organic Search mencatat efisiensi tertinggi dengan CAC turun 22% berkat cluster konten pricing dan comparison.",
        ai: false,
        score: 9,
      },
      {
        id: "p3-2",
        text: "In conclusion, leveraging synergistic omnichannel paradigms enables holistic optimization of funnel dynamics for maximal ROI scalability.",
        ai: true,
        score: 91,
      },
      {
        id: "p3-3",
        text: "Furthermore, this comprehensive analysis delineates actionable frameworks to facilitate data-driven decision-making processes.",
        ai: true,
        score: 87,
      },
    ],
  },
  {
    page: 4,
    title: "CAC & Budget",
    ai: 22,
    paragraphs: [
      {
        id: "p4-1",
        text: "CAC blended turun ke $42 (-11% QoQ), namun Paid Social naik ke $61 sehingga perlu realokasi ke retargeting.",
        ai: false,
        score: 8,
      },
      {
        id: "p4-2",
        text: "It is imperative to note that budgetary allocations were strategically optimized to enhance overall performance metrics.",
        ai: true,
        score: 78,
      },
    ],
  },
  {
    page: 5,
    title: "Retention & Churn",
    ai: 5,
    paragraphs: [
      {
        id: "p5-1",
        text: "Churn turun ke 3.1% setelah revamp onboarding — checklist hari ke-7 menaikkan aktivasi 14%.",
        ai: false,
        score: 5,
      },
      {
        id: "p5-2",
        text: "Tim CS menangani 320 tiket onboarding dengan rata-rata respons 2 jam 10 menit.",
        ai: false,
        score: 3,
      },
    ],
  },
];
