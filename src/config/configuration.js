import { config } from 'dotenv';

config();

const configuration = Object.freeze({
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
});

export default configuration;
