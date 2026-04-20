import { pool } from "../db/pool.js";
import type {
  CreateMembershipApplicationInput,
  MembershipApplication,
  MembershipStatus,
} from "../types/membership.js";

function mapRow(row: any): MembershipApplication {
  return {
    id: row.id,
    email: row.email,
    firstName: row.first_name,
    lastName: row.last_name,
    city: row.city,
    kyMembership: row.ky_membership,
    ayyMembership: row.ayy_membership,
    school: row.school,
    major: row.major,
    consentAccepted: row.consent_accepted,
    status: row.status,
    createdAt: row.created_at,
  };
}

export async function createMembershipApplication(
  input: CreateMembershipApplicationInput
): Promise<MembershipApplication> {
  const result = await pool.query(
    `
      INSERT INTO membership_applications (
        email,
        first_name,
        last_name,
        city,
        ky_membership,
        ayy_membership,
        school,
        major,
        consent_accepted
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING
        id,
        email,
        first_name,
        last_name,
        city,
        ky_membership,
        ayy_membership,
        school,
        major,
        consent_accepted,
        status,
        created_at
    `,
    [
      input.email.trim().toLowerCase(),
      input.firstName.trim(),
      input.lastName.trim(),
      input.city.trim(),
      input.kyMembership,
      input.ayyMembership,
      input.school,
      input.major.trim(),
      input.consentAccepted,
    ]
  );

  return mapRow(result.rows[0]);
}

export async function getMembershipApplications(): Promise<MembershipApplication[]> {
  const result = await pool.query(
    `
      SELECT
        id,
        email,
        first_name,
        last_name,
        city,
        ky_membership,
        ayy_membership,
        school,
        major,
        consent_accepted,
        status,
        created_at
      FROM membership_applications
      ORDER BY created_at DESC
    `
  );

  return result.rows.map(mapRow);
}

export async function updateMembershipApplicationStatus(
  id: string,
  status: MembershipStatus
): Promise<MembershipApplication | null> {
  const result = await pool.query(
    `
      UPDATE membership_applications
      SET status = $2
      WHERE id = $1
      RETURNING
        id,
        email,
        first_name,
        last_name,
        city,
        ky_membership,
        ayy_membership,
        school,
        major,
        consent_accepted,
        status,
        created_at
    `,
    [id, status]
  );

  if ((result.rowCount ?? 0) === 0) {
    return null;
  }

  return mapRow(result.rows[0]);
}

export async function deleteMembershipApplication(id: string): Promise<boolean> {
  const result = await pool.query(
    `
      DELETE FROM membership_applications
      WHERE id = $1
    `,
    [id]
  );

  return (result.rowCount ?? 0) > 0;
}