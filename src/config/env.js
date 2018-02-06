'use strict';

require('dotenv').config();

const env = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT,
    NODE_ENV: process.env.NODE_ENV,
};

module.exports = env;