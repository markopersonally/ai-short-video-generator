/** @type {import("drizzle-kit").Config} */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:Ia5YrP9ochVM@ep-young-salad-a5vpmwaw.us-east-2.aws.neon.tech/ai-generator?sslmode=require",
  },
};
