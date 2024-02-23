import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, CLIENT_ID, MONGO_URI, PORT, DB_HOST, DB_PORT, DB_DATABASE, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
