import { config } from 'dotenv';

config();

const configuration = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  URL: process.env.URL,
};

Object.freeze(configuration);

export default configuration;
