import "dotenv/config";

export default {
    DB_URI: process.env.DB_URI,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
}