import { MONGO_URI, DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  url: MONGO_URI || `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
