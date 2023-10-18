import { ArticleView } from "../../../entities/ArticleView.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { ArticleViewRepository } from "../../../main/ArticleView/ArticleViewRepository";
import { CreateQueueConection } from "../../CreateQueueConnection";

export class ArticleViewReceiver {

    private _queue = 'article_view';

    async initArticleViewReceiver(): Promise<void> {

        // const createQueueConnection = new CreateQueueConection();
        // const connection = await createQueueConnection.createConecction();

        // const channel = await connection.createChannel();

        // await channel.assertQueue(this._queue);

        // channel.consume(
        //     this._queue,
        //     async (message) => {
        //         if (message) {
        //             try {
        //                 const messageJson = JSON.parse(JSON.parse(message.content.toString()));
        //                 const articleView = new ArticleView();

        //                 articleView.article = messageJson.article;
        //                 articleView.user = messageJson.user;

        //                 await ArticleViewRepository.save(articleView);
        //                 channel.ack(message);
        //             } catch (err) {
        //                 channel.reject(message, false);
        //                 throw new ApiError(`${err}`, 500);
        //             };
        //         };
        //     }
        // );
    };

};