import { ApiError } from '../../../helpers/apiErrors';
import { CreateQueueConection } from '../../CreateQueueConnection';
import { IProducer } from '../../interfaces/IProducer';

export class ArticleViewProducer implements IProducer {

    private _queue = 'article_view';
    private _channel: any;

    public async build(): Promise<ArticleViewProducer> {
        try {
            await this.createChannel();

            return this;
        } catch (err: any) {
            throw new ApiError(`${err?.message}`, 500);
        };
    };

    async createChannel() {
        try {
            const createQueueConnection = new CreateQueueConection();
            const connection = await createQueueConnection.createConecction();

            const channel = await connection.createChannel();

            await channel.assertQueue(this._queue);

            this._channel = channel;
        } catch (err: any) {
            throw new ApiError(`${err?.message}`, 500);
        };
    };

    async produceMessage(message: string) {
        try {
            this._channel.sendToQueue(this._queue, Buffer.from(JSON.stringify(message)));

        } catch (err: any) {
            throw new ApiError(`${err?.message}`, 500);
        };
    };
};