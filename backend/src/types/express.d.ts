import type { JwtPayload } from "./auth";

declare module "express-serve-static-core" {
  interface Request {
    admin?: JwtPayload;
  }
}

export {};