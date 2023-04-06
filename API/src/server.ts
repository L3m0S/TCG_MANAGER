import 'reflect-metadata'
import express from 'express';
import 'express-async-errors'
import { UserRouter } from "./main/User/routes/routes";
import { AppDataSource } from './database/conection';
import { errorHandler } from './middlewares/errorHandler';
import { DeckRouter } from './main/Deck/routes/routes';
import { CardsRouter } from './main/Card/routes/routes';
import cors from "cors"

const server =  express();
server.use(express.json());
server.use(cors());
server.use('/user', UserRouter);
server.use('/deck', DeckRouter);
server.use('/cards', CardsRouter);
server.use(errorHandler);
server.listen('3333', async () => {
    await AppDataSource.initialize();
    console.log('Server is running on PORT: 3333...');
});

