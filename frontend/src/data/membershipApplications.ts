export type MembershipApplicationStatus =
  | "new"
  | "reviewed"
  | "accepted"
  | "rejected";

export type MembershipApplication = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  kyMembership: boolean | null;
  ayyMembership: boolean | null;
  major: string;
  createdAt: string;
  status: MembershipApplicationStatus;
};

export const membershipApplications: MembershipApplication[] = [
  {
    id: "application-1",
    email: "emma.korhonen@example.com",
    firstName: "Emma",
    lastName: "Korhonen",
    city: "Espoo",
    kyMembership: true,
    ayyMembership: true,
    major: "Economics",
    createdAt: "2026-04-19T10:15:00Z",
    status: "new",
  },
  {
    id: "application-2",
    email: "mika.laine@example.com",
    firstName: "Mika",
    lastName: "Laine",
    city: "Helsinki",
    kyMembership: false,
    ayyMembership: true,
    major: "Finance",
    createdAt: "2026-04-18T14:30:00Z",
    status: "reviewed",
  },
  {
    id: "application-3",
    email: "sara.niemi@example.com",
    firstName: "Sara",
    lastName: "Niemi",
    city: "Vantaa",
    kyMembership: true,
    ayyMembership: false,
    major: "Business Analytics",
    createdAt: "2026-04-17T08:45:00Z",
    status: "accepted",
  },
];