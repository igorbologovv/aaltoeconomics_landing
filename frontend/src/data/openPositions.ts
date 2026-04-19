export type OpenPosition = {
  id: string;
  title: string;
  company: string;
  type: string;
  location: string;
  deadline: string;
  summary: string;
  description: string[];
  logo: string;
  applyUrl: string;
  isPublished: boolean;
  order: number;
};

export const openPositions: OpenPosition[] = [
  {
    id: "ecb-esrb-traineeship",
    title: "ESRB Traineeship",
    company: "European Central Bank",
    type: "Traineeship",
    location: "Frankfurt, Germany",
    deadline: "17.2.2026",
    summary: "Kick-start your career in financial stability at the heart of Europe.",
    description: [
      "The ECB is looking for EU nationals to join the Secretariat of the European Systemic Risk Board (ESRB) as full-time trainees in Frankfurt am Main.",
      "You’ll work in a multicultural team analysing EU financial system risks, contributing to macroprudential policy, stress testing, and ESRB committee reports.",
      "The exact focus will depend on your skills and ongoing projects."
    ],
    logo: "/images/open_positions/ecb.png",
    applyUrl: "/contact",
    isPublished: true,
    order: 1,
  },
  {
    id: "bain-associate-consultant",
    title: "Associate Consultant",
    company: "Bain & Company",
    type: "Full-time",
    location: "Helsinki, Finland",
    deadline: "28.2.2026",
    summary: "Join a leading global consulting team and work on high-impact strategic projects.",
    description: [
      "As an Associate Consultant, you will support case teams with research, analysis, and problem solving across a wide range of industries.",
      "You will gain hands-on experience in client work and develop structured thinking, communication, and business judgment.",
      "This role is suited for analytical and ambitious students or recent graduates."
    ],
    logo: "/images/open_positions/bain.png",
    applyUrl: "/contact",
    isPublished: true,
    order: 2,
  },
];