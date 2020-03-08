import * as dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
const conf = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: parseInt(process.env.PORT as string),
    HOST: process.env.HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    jwtSecret: process.env.JWT_SECRET,
    OS: process.env.OS,
};
export default conf;