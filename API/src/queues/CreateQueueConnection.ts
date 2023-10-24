import amqp, { Connection } from 'amqplib';
import { ApiError } from '../helpers/apiErrors';
import * as dotenv from 'dotenv' 
dotenv.config();

export class CreateQueueConection {

    async createConecction(): Promise<Connection> {

        const connection = await amqp.connect(`amqp://${process.env.RBBT_HOST}`, (error: any, connection: Connection) => {
            if (error) {
                throw new ApiError(`Erro ao processar sua solicitação!`, 500);
            };
        });

        return connection;
    };
};