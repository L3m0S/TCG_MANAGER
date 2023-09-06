import { ArticleView } from "../../../entities/ArticleView.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { ArticleViewRepository } from "../../../main/ArticleView/ArticleViewRepository";
import { CreateQueueConection } from "../../CreateQueueConnection";

export class ArticleViewReceiver {

    private queue = 'article_view';

    async initArticleViewReceiver() {

        const createQueueConnection = new CreateQueueConection();
        const connection = await createQueueConnection.createConecction();

        const channel = await connection.createChannel();

        await channel.assertQueue(this.queue, { durable: true });

        await channel.consume(
            this.queue,
            async (message) => {
                if (message) {
                    try {
                        const messageJson = JSON.parse(JSON.parse(message.content.toString()));
                        const articleView = new ArticleView();

                        
                        articleView.article = messageJson.article;
                        articleView.user = messageJson.user;
                        
                        await ArticleViewRepository.save(articleView);
                    } catch (err) {
                        channel.reject(message, false);
                        throw new ApiError(`${err}`, 500);
                    };
                };
            },
            { noAck: true }
        );
    };

};