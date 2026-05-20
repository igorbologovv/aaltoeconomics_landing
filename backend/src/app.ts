import express from "express";
import cors from "cors";
import path from "node:path";

import contactPublicRoutes from "./routes/public/contact.routes.js";
import contactAdminRoutes from "./routes/admin/contact.routes.js";

import uploadRoutes from "./routes/admin/upload.routes.js";
import authRoutes from "./routes/admin/auth.routes.js";

import careerStoriesPublicRoutes from "./routes/public/career-stories.routes.js";
import careerStoriesAdminRoutes from "./routes/admin/career-stories.routes.js";

import membershipPublicRoutes from "./routes/public/membership.routes.js";
import membershipAdminRoutes from "./routes/admin/membership.routes.js";

import openPositionsPublicRoutes from "./routes/public/open-positions.routes.js";
import openPositionsAdminRoutes from "./routes/admin/open-positions.routes.js";

import siteContentPublicRoutes from "./routes/public/site-content.routes.js";
import siteContentAdminRoutes from "./routes/admin/site-content.routes.js";

import footerPartnersRoutes from "./routes/public/footer-partners.routes.js";
import adminFooterPartnersRoutes from "./routes/admin/footer-partners.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

/*
|--------------------------------------------------------------------------
| Static uploads
|--------------------------------------------------------------------------
*/

app.use("/uploads", express.static(path.resolve("uploads")));

/*
|--------------------------------------------------------------------------
| Public API
|--------------------------------------------------------------------------
*/

app.use("/api/contact-people", contactPublicRoutes);

app.use("/api/career-stories", careerStoriesPublicRoutes);

app.use("/api/membership-applications", membershipPublicRoutes);

app.use("/api/open-positions", openPositionsPublicRoutes);

app.use("/api/site-content", siteContentPublicRoutes);

app.use("/api/footer-partners", footerPartnersRoutes);

/*
|--------------------------------------------------------------------------
| Admin API
|--------------------------------------------------------------------------
*/

app.use("/api/admin/auth", authRoutes);

app.use("/api/admin/upload", uploadRoutes);

app.use("/api/admin/contact-people", contactAdminRoutes);

app.use("/api/admin/career-stories", careerStoriesAdminRoutes);

app.use("/api/admin/membership-applications", membershipAdminRoutes);

app.use("/api/admin/open-positions", openPositionsAdminRoutes);

app.use("/api/admin/site-content", siteContentAdminRoutes);

app.use("/api/admin/footer-partners", adminFooterPartnersRoutes);

export default app;