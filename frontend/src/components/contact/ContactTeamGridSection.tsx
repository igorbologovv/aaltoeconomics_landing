import { useEffect, useMemo, useState } from "react";
import ContactPersonCard from "./ContactPersonCard";
import type { ContactPerson } from "../../data/contactPeople";

const API_URL = import.meta.env.VITE_API_URL;

const ROLE_ORDER = [
  "Chair",
  "Vice Chair",
  "Senior Advisor",
  "Treasurer",
  "Events",
  "Corporate Relations",
  "Communications",
  "Academic Affairs",
  "Developer",
];

function normalizeRole(role: string) {
  if (role === "Communication") return "Communications";
  return role;
}

function ContactTeamGridSection() {
  const [people, setPeople] = useState<ContactPerson[]>([]);

  useEffect(() => {
    let isMounted = true;

    fetch(`${API_URL}/api/contact-people`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setPeople(data);
      })
      .catch((err) => {
        console.error("Failed to load contacts", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const groupedPeople = useMemo(() => {
    const map = new Map<string, ContactPerson[]>();

    for (const person of people) {
      const role = normalizeRole(person.role);

      if (!map.has(role)) {
        map.set(role, []);
      }

      map.get(role)!.push({
        ...person,
        role,
      });
    }

    return Array.from(map.entries()).sort(([roleA], [roleB]) => {
      const indexA = ROLE_ORDER.indexOf(roleA);
      const indexB = ROLE_ORDER.indexOf(roleB);

      if (indexA === -1 && indexB === -1) return roleA.localeCompare(roleB);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });
  }, [people]);

  return (
    <section className="contact-team-grid-section">
      <div className="container">
        <div className="contact-team-grid-section__inner">
          {groupedPeople.map(([role, members]) => (
            <section key={role} className="contact-role-section">
              <div className="contact-role-section__header">
                <h2>{role}</h2>
              </div>

              <div className="contact-collage-grid">
                {members.map((person, index) => {
                  const variant =
                    members.length === 1
                      ? "solo"
                      : index === 0
                      ? "large"
                      : "default";

                  return (
                    <ContactPersonCard
                      key={person.id}
                      person={person}
                      variant={variant}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactTeamGridSection;