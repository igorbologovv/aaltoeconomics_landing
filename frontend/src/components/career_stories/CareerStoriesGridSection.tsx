import type { CareerStory } from "../../types/careerStories";
import CareerStoryCard from "./CareerStoryCard";

type CareerStoriesGridSectionProps = {
  stories: CareerStory[];
  isLoading?: boolean;
};

function CareerStoriesGridSection({
  stories,
  isLoading = false,
}: CareerStoriesGridSectionProps) {
  return (
    <section className="career-grid-section">
      <div className="container">
        {isLoading ? (
          <p>Loading stories...</p>
        ) : (
          <div className="career-grid">
            {stories.map((story) => (
              <CareerStoryCard
                key={story.id}
                name={story.name}
                role={story.role}
                image={story.image}
                to={`/career-stories/${story.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CareerStoriesGridSection;