import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123teste",
    database: 'TCG_MANAGER',
    synchronize: true,
    logging: true,
    entities: [`${__dirname}/../entities/*.{ts,js}`],
    migrations: [`${__dirname}/migrations/*.{ts,js}`],
})