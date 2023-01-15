import 'reflect-metadata'
import express from 'express';
import 'express-async-errors'
import { UserRouter } from "./main/User/routes/routes";
import { AppDataSource } from './database/conection';
import { errorHandler } from './middlewares/errorHandler';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const server =  express();
server.use(express.json());
server.use('/user', UserRouter);
server.use(errorHandler);
server.listen('3333', async () => {
    await AppDataSource.initialize();
    console.log('Server is running on PORT: 3333...');
});

