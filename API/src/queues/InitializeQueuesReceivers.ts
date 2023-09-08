import { ArticleViewProducer } from "./articleViews/Producer/ArticleViewProducer";
import { ArticleViewReceiver } from "./articleViews/Receiver/ArticleViewReceiver";


export class InitializeQueues {

    async initializeQueues() {

        //Article view Producers / Receivers
        await (new ArticleViewReceiver().initArticleViewReceiver());
        await (new ArticleViewProducer().produceMessage)
    };
};