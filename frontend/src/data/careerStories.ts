export type StoryVariant = "default" | "large" | "wide";

export type CareerStory = {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  excerpt: string;
  content: string[];
  variant?: StoryVariant;
  isPublished?: boolean;
  order?: number;
};

export const careerStories: CareerStory[] = [
  {
    id: "iikka-korhonen",
    slug: "iikka-korhonen",
    name: "Iikka Korhonen",
    role: "Head of Research at BOFIT",
    image: "/images/career_stories/iikka-korhonen.jpg",
    excerpt: "Research, policy, and international economics.",
    content: [
      "I’m Iikka Korhonen, and my career has focused on research, policy, and international economics.",
      "An economics background gave me strong analytical tools and a broad perspective on society, institutions, and global developments.",
      "For students and alumni, I believe the key is to stay curious, keep learning, and be open to different paths."
    ],
    variant: "large",
    isPublished: true,
    order: 1,
  },
  {
    id: "eeva-ahdekivi",
    slug: "eeva-ahdekivi",
    name: "Eeva Ahdekivi",
    role: "Board member of Lasting Enterprises",
    image: "/images/career_stories/eeva-aahdekivi.jpg",
    excerpt: "Leadership, governance, and long-term business building.",
    content: [
      "My path has combined strategy, leadership, and business development.",
      "Aalto Economics gave me a strong foundation for structured thinking and decision-making.",
      "Career growth rarely follows a straight line, and that is part of the value of the journey."
    ],
    isPublished: true,
    order: 2,
  },
  {
    id: "kosti-takala",
    slug: "kosti-takala",
    name: "Kosti Takala",
    role: "Data Scientist / Economist at QuantCo",
    image: "/images/career_stories/kosti_takala.jpg",
    excerpt: "Data, economics, and applied decision-making.",
    content: [
      "My work combines economics with data science and practical business problems.",
      "The most valuable skill has been learning how to move from theory to implementation.",
      "Economics is powerful when paired with technical curiosity and communication."
    ],
    isPublished: true,
    order: 3,
  },
];