import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const AppConfig = {
  env: process.env.NODE_ENV,
  versioning: process.env.VERSIONING,
  port: parseInt(process.env.PORT),
  dbConnection: process.env.MONGO_URI,
  productionURL: process.env.PRODUCTION_URL,
  stagingURL: process.env.STAGING_URL,
  developmentURL: process.env.DEVELOPMENT_URL,
  localURL: process.env.LOCAL_URL,
  log_dir: process.env.LOG_DIR,
} as const;

export default AppConfig;
