import { ICard } from "../../../interfaces/Card.model";
import { CardListService } from "../../Card/CardList/CardListService";
import { openAi } from "../config/init";

export class GetCardHintFromGPTService {

    async getCardHint(card: ICard) {

        let message: string = `Me indique uma carta de pokemon TCG que possua sinergia com a carta ${card.name} `;

        if (card?.abilities) {
            message += ` que possui a habilidade ${card?.abilities[0].name} e `
        };

        if (card?.attacks) {
            let attacks: string = '';
            card.attacks.forEach((attk) => attacks += `${attk.name}, `)
            for (const attacks of card?.attacks) {
                message += ` e que possui os ataques ${attacks}`;
            };
        };

        message += `se você nao encontrar informações sobre a carta informada, por gentileza, não de informações erradas e nem falsas, e retorne apenas o texto: "Carta não encontrada!"`

        const hint = await openAi.chat.completions.create({
            model: 'gpt-3.5-turbo-16k-0613',
            max_tokens: 500,
            temperature: 0.2,
            // messages: [{
            //     'role': 'user',
            //     content: `sempre Retorne um texto no formato a seguir sobre uma carta de pokemon tcg que possua sinergia com a carta ${cardName} e que seja valida no atual formato competitivo e com no maximo 500 caracteres: {cardName: nome da carta que tem sinergia em ingles, sinergia: um resumo do porque a carta retornada tem sinergia com a cara ${cardName}}`
            // }],
            messages: [{
                'role': 'user',
                content: `${message}`
            }]
        });

        // const getCardListService = new CardListService();
        // const name = hint.choices[0]?.message?.content?.split(',')[0].split(':')[1].trim();
        // const sinergyCard = await getCardListService.getCardList(1, 1, `name:${name}&select=name,id,images`);

        return hint.choices[0]?.message?.content
    };
};