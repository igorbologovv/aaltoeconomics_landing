export type JwtPayload = {
  adminId: number;
  username: string;
};

export type RegisterAdminBody = {
  username: string;
  password: string;
  setupSecret: string;
};

export type LoginAdminBody = {
  username: string;
  password: string;
};

export type ChangePasswordBody = {
  currentPassword: string;
  newPassword: string;
};