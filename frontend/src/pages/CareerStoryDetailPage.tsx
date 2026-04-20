import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { CareerStory } from "../types/careerStories";
import "../styles/career_stories/career-story-detail.css";

const API_URL = import.meta.env.VITE_API_URL;

function CareerStoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const [story, setStory] = useState<CareerStory | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStory = async () => {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/career-stories/${slug}`);

        if (response.status === 404) {
          setStory(null);
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to load career story");
        }

        const data = (await response.json()) as CareerStory;
        setStory(data);
      } catch (error) {
        console.error(error);
        setStory(null);
      } finally {
        setIsLoading(false);
      }
    };

    void loadStory();
  }, [slug]);

  if (isLoading) {
    return (
      <section className="career-story-detail">
        <div className="container career-story-detail__empty">
          <h1>Loading story...</h1>
        </div>
      </section>
    );
  }

  if (!story) {
    return (
      <section className="career-story-detail">
        <div className="container career-story-detail__empty">
          <h1>Story not found</h1>
          <Link to="/career-stories" className="primary-btn">
            Back to stories
          </Link>
        </div>
      </section>
    );
  }

  const imageSrc = story.image.startsWith("/uploads")
    ? `${API_URL}${story.image}`
    : story.image;

  return (
    <section className="career-story-detail">
      <div className="container">
        <Link to="/career-stories" className="career-story-detail__back">
          ← Back to Career Stories
        </Link>

        <div className="career-story-detail__hero">
          <div className="career-story-detail__image-wrap">
            <img
              className="career-story-detail__image"
              src={imageSrc}
              alt={story.name}
            />
          </div>

          <div className="career-story-detail__intro">
            <p className="section-label">Career Story</p>
            <h1>{story.name}</h1>
            <p className="career-story-detail__role">{story.role}</p>
          </div>
        </div>

        <div className="career-story-detail__content">
          <p>{story.text}</p>
        </div>
      </div>
    </section>
  );
}

export default CareerStoryDetailPage;