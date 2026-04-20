CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS admins (
  id BIGSERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS membership_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  city TEXT NOT NULL,
  ky_membership BOOLEAN NOT NULL,
  ayy_membership BOOLEAN NOT NULL,
  school TEXT NOT NULL,
  major TEXT NOT NULL,
  consent_accepted BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'new',
  CONSTRAINT membership_applications_status_check
    CHECK (status IN ('new', 'reviewed', 'accepted', 'rejected')),
  CONSTRAINT membership_applications_school_check
    CHECK (school IN ('BIZ', 'CHEM', 'ELEC', 'ENG', 'SCI', 'ARTS'))
);

CREATE INDEX IF NOT EXISTS idx_membership_applications_status
  ON membership_applications(status);

CREATE INDEX IF NOT EXISTS idx_membership_applications_created_at
  ON membership_applications(created_at DESC);