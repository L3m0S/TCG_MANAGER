import { ISet } from "./Set.model";

export interface ICard {
    id: string,
    name: string,
    supertype: string,
    subtypes: string[],
    hp: string,
    types: string[],
    evolvesFrom: string,
    abilities: [
        {
            name: string,
            text: string,
            type: string
        }
    ],
    attacks: [
        {
            name: string,
            cost: string[],
            convertedEnergyCost: number,
            damage: string,
            text: string
        }
    ],
    weaknesses: [
        {
            type: string,
            value: string
        }
    ],
    retreatCost: string[],
    convertedRetreatCost: number,
    set: ISet,
    number: string,
    artist: string,
    rarity: string,
    flavorText: string,
    nationalPokedexNumbers: number[],
    legalities: {
        unlimited: string,
        standard: string,
        expanded: string
    },
    images: {
        small: string,
        large: string
    },
    tcgplayer: {
        url: string,
        updatedAt: Date,
        prices: {
            normal: {
                low: number,
                mid: number,
                high: number,
                market: number,
                directLow: number
            },
            reverseHolofoil: {
                low: number,
                mid: number,
                high: number,
                market: number,
                directLow: number
            }
        }
    },
    cardmarket: {
        url: string,
        updatedAt: Date,
        prices: {
            averageSellPrice: number,
            lowPrice: number,
            trendPrice: number,
            germanProLow: number,
            suggestedPrice: number,
            reverseHoloSell: number,
            reverseHoloLow: number,
            reverseHoloTrend: number,
            lowPriceExPlus: number,
            avg1: number,
            avg7: number,
            avg30: number,
            reverseHoloAvg1: number,
            reverseHoloAvg7: number,
            reverseHoloAvg30: number
        }
    }
}