import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { careerStories } from "../data/careerStories";
import "../styles/career_stories/career-story-detail.css";

function CareerStoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const story = useMemo(
    () => careerStories.find((item) => item.slug === slug && item.isPublished !== false),
    [slug]
  );

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
              src={story.image}
              alt={story.name}
            />
          </div>

          <div className="career-story-detail__intro">
            <p className="section-label">Career Story</p>
            <h1>{story.name}</h1>
            <p className="career-story-detail__role">{story.role}</p>
            <p className="career-story-detail__excerpt">{story.excerpt}</p>
          </div>
        </div>

        <div className="career-story-detail__content">
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerStoryDetailPage;