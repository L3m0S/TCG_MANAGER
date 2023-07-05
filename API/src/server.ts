import 'reflect-metadata'
import express from 'express';
import 'express-async-errors'
import { AppDataSource } from './database/connection';
import { errorHandler } from './middlewares/errorHandler';
import { setupRoutes } from './router';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());
setupRoutes(server);
server.use(errorHandler);
server.listen('3333', async () => {
    await AppDataSource.initialize();
    console.log('Server is running on PORT: 3333...');
});

