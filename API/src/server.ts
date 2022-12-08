import express from 'express';
import { UserRouter } from './entities/User/routes/routes';

const server =  express();

server.use('/user', UserRouter);
server.use(express.json());

server.listen('3333', () => {
    console.log('Server is running on PORT: 3333...');
});

