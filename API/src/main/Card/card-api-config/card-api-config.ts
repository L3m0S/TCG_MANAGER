
export class CardApiConfig {

    getConfig() {
        const apiKey = "57634ea1-776d-4bce-8333-71af5ba54871";

        const baseUrl = "https://api.pokemontcg.io/v2"

        return {
            key: apiKey,
            url: baseUrl
        }
    }
}