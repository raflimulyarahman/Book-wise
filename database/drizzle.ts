import { drizzle } from 'drizzle-orm/neon-http';
import config from "@/lib/config";
import { neon } from '@neondatabase/serverless';
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});st sql = neon(config.env.databaseUrl)
const db = drizzle({ client: sql});
