import { CardListService } from "../../Card/CardList/CardListService";
import { openAi } from "../config/init";

export class GetCardHintFromGPTService {

    async getCardHint(cardName: string) {

        const hint = await openAi.chat.completions.create({
            model: 'gpt-3.5-turbo',
            max_tokens: 500,
            temperature: 0,
            messages: [{
                'role': 'user',
                content: `sempre Retorne um texto no formato a seguir sobre uma carta de pokemon tcg que possua sinergia com a carta ${cardName} e que seja valida no atual formato competitivo e com no maximo 500 caracteres: {cardName: nome da carta que tem sinergia, sinergia: um resumo da carta que tem sinergia com a carta ${cardName}}`
            }]
        });

        const getCardListService = new CardListService();
        const name = hint.choices[0]?.message?.content?.split(',')[0].split(':')[1].trim();
        const sinergyCard = await getCardListService.getCardList(1, 1, `name:${name}&select=name,id,images`);

        return { card: sinergyCard, hint: hint.choices[0]?.message?.content };
    };
};