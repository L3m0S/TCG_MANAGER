import 'reflect-metadata'
import express from 'express';
import 'express-async-errors'
import { AppDataSource } from './database/connection';
import { errorHandler } from './middlewares/errorHandler';
import { setupRoutes } from './router';
import cors from 'cors';
import { InitializeQueues } from './queues/InitializeQueuesReceivers';
import { ApiError } from './helpers/apiErrors';

const server = express();
server.use(express.json());
server.use(cors());
setupRoutes(server);
server.use(errorHandler);
server.listen('3333', async () => {
    await AppDataSource.initialize().then(() => {
        console.log('Connected to data base successfully!')
    }).catch((err) => {
        throw new ApiError(`Error connection to data base!`, 500);
    });
    await (new InitializeQueues().initializeQueues()).then(() => {
        console.log('RabbitMQ queues started!')
    }).catch((err) => {
        throw new ApiError(`Error on starting RabbitMQ queues!`, 500);
    });
    console.log('Server is running on PORT: 3333...');
});

