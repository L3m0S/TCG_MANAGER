import 'reflect-metadata'
import express from 'express';
import 'express-async-errors'
import { UserRouter } from "./main/User/routes/routes";
import { AppDataSource } from './database/conection';
import { errorHandler } from './middlewares/errorHandler';
import { DeckRouter } from './main/Deck/routes/routes';
import { CardsRouter } from './main/Card/routes/routes';
import cors from 'cors';
import { TypeRouter } from './main/PokemonType/routes/routes';
import { SuperTypeRouter } from './main/PokemonSuperType/routes/routes';
import { SubTypeRouter } from './main/PokemonSubType/PokemonSuperType/routes/routes';
import { SetsRouter } from './main/Set/routes/routes';

const server = express();
server.use(express.json());
server.use(cors());
server.use('/user', UserRouter);
server.use('/decks', DeckRouter);
server.use('/cards', CardsRouter);
server.use('/types', TypeRouter);
server.use('/super-types', SuperTypeRouter);
server.use('/sub-types', SubTypeRouter);
server.use('/sets', SetsRouter)
server.use(errorHandler);
server.listen('3333', async () => {
    await AppDataSource.initialize();
    console.log('Server is running on PORT: 3333...');
});

