import { ArticleViewReceiver } from "./articleViews/Receiver/ArticleViewReceiver";


export class InitializeQueuesReceivers {

    async initializeReceivers() {

        const receiver = new ArticleViewReceiver();
        await receiver.initArticleViewReceiver();

    };
};