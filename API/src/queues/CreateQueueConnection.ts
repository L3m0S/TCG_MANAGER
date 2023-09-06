import amqp, { Connection } from 'amqplib';
import { ApiError } from '../helpers/apiErrors';

export class CreateQueueConection {

    async createConecction(): Promise<Connection> {

        const connection = await amqp.connect("amqp://localhost", (error: any, connection: Connection) => {
            if (error) {
                throw new ApiError(`Erro ao processar sua solicitação!`, 500);
            };
        });

        return connection;
    };
};