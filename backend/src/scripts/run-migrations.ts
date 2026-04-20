import fs from "node:fs/promises";
import path from "node:path";
import { pool } from "../db/pool.js";

async function runMigrations() {
  const migrationsDir = path.resolve(process.cwd(), "src/db/migrations");

  const files = (await fs.readdir(migrationsDir))
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const fullPath = path.join(migrationsDir, file);
    const sql = await fs.readFile(fullPath, "utf-8");

    console.log(`Running migration: ${file}`);
    await pool.query(sql);
  }

  console.log("All migrations completed.");
  await pool.end();
}

runMigrations().catch(async (error) => {
  console.error("Migration failed:", error);
  await pool.end();
  process.exit(1);
});