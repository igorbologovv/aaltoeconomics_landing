export type School = "BIZ" | "CHEM" | "ELEC" | "ENG" | "SCI" | "ARTS";

export type MembershipApplicationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  kyMembership: boolean | null;
  ayyMembership: boolean | null;
  school: School | "";
  major: string;
  consentAccepted: boolean;
};

export type MembershipApplication = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  kyMembership: boolean;
  ayyMembership: boolean;
  school: School;
  major: string;
  consentAccepted: boolean;
  status: "new" | "reviewed" | "accepted" | "rejected";
  createdAt: string;
};