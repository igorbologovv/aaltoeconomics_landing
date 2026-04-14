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

function JoinUsPage() {
  return (
    <>
      <JoinHeroSection />
      <JoinMembersSection />
      <JoinNetworkingSection />
      <JoinEventsSection />
      <JoinQuoteSection />
    </>
  );
}

export default JoinUsPage;