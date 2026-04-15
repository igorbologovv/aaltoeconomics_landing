import CareerStoryCard from "./CareerStoryCard";

type StoryVariant = "default" | "large" | "wide";

type Story = {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  variant?: StoryVariant;
};

const stories: Story[] = [
  {
    id: "iikka-korhonen",
    slug: "iikka-korhonen",
    name: "Iikka Korhonen",
    role: "Head of Research at BOFIT",
    image: "/images/career_stories/iikka-korhonen.jpg",
    variant: "large",
  },
  {
    id: "eeva-ahdekivi",
    slug: "eeva-ahdekivi",
    name: "Eeva Ahdekivi",
    role: "Board member of Lasting Enterprises",
    image: "/images/career_stories/eeva-aahdekivi.jpg",
  },
  {
    id: "kosti-takala",
    slug: "kosti-takala",
    name: "Kosti Takala",
    role: "Data Scientist / Economist at QuantCo",
    image: "/images/career_stories/kosti_takala.jpg",
  },
  {
    id: "joel-leinonen",
    slug: "joel-leinonen",
    name: "Joel Leinonen",
    role: "Associate Manager at August Associates",
    image: "/images/career_stories/joel_leinonen.jpg",
  },
  {
    id: "krista-kuuttiniemi",
    slug: "krista-kuuttiniemi",
    name: "Krista Kuuttiniemi",
    role: "Research, policy, and international economics",
    image: "/images/career_stories/krista_kuuttiniemi.jpg",
    variant: "wide",
  },
  {
    id: "juuso-konttila",
    slug: "juuso-konttila",
    name: "Juuso Konttila",
    role: "Consulting, entrepreneurship, and impact",
    image: "/images/career_stories/juuso_konttila.jpg",
  },
];

function CareerStoriesGridSection() {
  return (
    <section className="career-grid-section">
      <div className="container">
        <div className="career-grid">
          {stories.map((story) => (
            <CareerStoryCard
              key={story.id}
              name={story.name}
              role={story.role}
              image={story.image}
              to={`/career-stories/${story.slug}`}   // 🔥 ВАЖНО
              variant={story.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerStoriesGridSection;