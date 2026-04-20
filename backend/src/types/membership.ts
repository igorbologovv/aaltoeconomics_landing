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

export type CreateMembershipApplicationBody = {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  kyMembership: boolean | null;
  ayyMembership: boolean | null;
  major: string;
};

export type UpdateMembershipApplicationStatusBody = {
  status: MembershipApplicationStatus;
};