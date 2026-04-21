import { useEffect, useState } from "react";
import type { SiteContent } from "../types/siteContent";
import JoinHeroSection from "../components/join_us/JoinHeroSection";
import JoinMembersSection from "../components/join_us/JoinMembersSection";
import JoinNetworkingSection from "../components/join_us/JoinNetworkingSection";
import JoinEventsSection from "../components/join_us/JoinEventsSection";
import JoinQuoteSection from "../components/join_us/JoinQuoteSection";
import "../styles/join_us/join-quote.css";
import "../styles/join_us/join-events.css";
import "../styles/join_us/join-hero.css";
import "../styles/join_us/join-members.css";
import "../styles/join_us/join-networking.css";

const API_URL = import.meta.env.VITE_API_URL;

function JoinUsPage() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`${API_URL}/api/site-content`);
        if (!response.ok) {
          throw new Error("Failed to load site content.");
        }
        const data = (await response.json()) as SiteContent;
        setContent(data);
      } catch (error) {
        console.error(error);
        setContent(null);
      }
    };

    void loadContent();
  }, []);

  return (
    <>
      <JoinHeroSection />
      <JoinMembersSection content={content?.joinUs.membersSection} />
      <JoinNetworkingSection content={content?.joinUs.networkingSection} />
      <JoinEventsSection content={content?.joinUs.eventsSection} />
      <JoinQuoteSection content={content?.joinUs.quoteSection} />
    </>
  );
}

export default JoinUsPage;