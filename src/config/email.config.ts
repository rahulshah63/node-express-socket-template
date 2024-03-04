import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const EmailConfig = {
  authUser: process.env.AUTH_USER,
  from: process.env.FROM,
  appURL: process.env.APP_URL,
  authPassword: process.env.AUTH_PASSWORD,
} as const;

export default EmailConfig;
