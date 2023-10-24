import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv' 
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATA_BASE,
    synchronize: true,
    logging: true,
    entities: ['/opt/render/project/src/API/src/entities/*.{ts,js}'],
    migrations: ['/opt/render/project/src/API/src/database/migrations/*.{ts,js}'],
    migrationsRun: true,
    ssl: true
});

console.log(`${__dirname}/../entities/*.{ts,js}`)