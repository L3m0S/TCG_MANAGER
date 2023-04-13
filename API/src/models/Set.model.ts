export interface SetInterface {
    id: string,
    name: string,
    series: string,
    printedTotal: number,
    total: number,
    legalities: {
        unlimited: string,
        standard: string,
        expanded: string
    },
    ptcgoCode: string,
    releaseDate: Date,
    updatedAt: Date,
    images: {
        symbol: string,
        logo: string
    }
}