import express from "express";
import cors from "cors";

import contactPublicRoutes from "./routes/public/contact.routes.js";
import contactAdminRoutes from "./routes/admin/contact.routes.js";
import uploadRoutes from "./routes/admin/upload.routes.js";
import authRoutes from "./routes/admin/auth.routes.js";
import careerStoriesPublicRoutes from "./routes/public/career-stories.routes.js";
import careerStoriesAdminRoutes from "./routes/admin/career-stories.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact-people", contactPublicRoutes);
app.use("/api/career-stories", careerStoriesPublicRoutes);

app.use("/api/admin/auth", authRoutes);
app.use("/api/admin/contact-people", contactAdminRoutes);
app.use("/api/admin/upload", uploadRoutes);
app.use("/api/admin/career-stories", careerStoriesAdminRoutes);

app.use("/uploads", express.static("uploads"));

export default app;