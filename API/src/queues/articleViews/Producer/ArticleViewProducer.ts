import { CreateQueueConection } from '../../CreateQueueConnection';

export class ArticleViewProducer {

    private _queue = 'article_view';

    async produceMessage(message: string) {

        try {

            const createQueueConnection = new CreateQueueConection();
            const connection = await createQueueConnection.createConecction();

            const channell = await connection.createChannel();

            await channell.assertQueue(this._queue);

            channell.sendToQueue(this._queue,Buffer.from(JSON.stringify(message)));

            await channell.close();

            await connection.close();

        } catch (err) { }
    };
};