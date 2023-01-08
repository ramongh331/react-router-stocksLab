

export const stockLoader = async({params}) => {
    const symbol = params.symbol;
    return (await fetch(`/stocks/${symbol}`))

}