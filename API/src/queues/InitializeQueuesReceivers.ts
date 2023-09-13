import { ArticleViewProducer } from "./articleViews/Producer/ArticleViewProducer";
import { ArticleViewReceiver } from "./articleViews/Receiver/ArticleViewReceiver";

export class InitializeQueues {

    async initializeQueues(): Promise<void> {

        //Article view Producers / Receivers
        await (new ArticleViewReceiver().initArticleViewReceiver());
    };
};