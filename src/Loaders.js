import data from "./data";

export const stockLoader = ({params}) => {
    const symbol = params.symbol;
const stockData = data.find(element => element.symbol === symbol)
    return (stockData)

}