import * as dotenv from 'dotenv';

dotenv.config();

export default {
    mysql: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_SCHEMA
    }
}