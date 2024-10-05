/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mounirikine:CRDNFdJc6I5j@ep-bold-art-a2uvatac.eu-central-1.aws.neon.tech/ai-short-video-generator?sslmode=require',
    }
  };