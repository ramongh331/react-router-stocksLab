import {useLoaderData} from 'react-router-dom'
import data from '../data'
import "../App.css"



const Stock = props => {
const stock = useLoaderData()
   

    return (
        <div>
            <h1>{stock.name}</h1>
            <h2>({stock.symbol})</h2>
            <p><span className="boldText">Last Price:</span> ${stock.lastPrice}</p>
            <p><span className="boldText">Change:</span> ${stock.change.toFixed(2)}</p>
            <p><span className="boldText">Highest Price:</span> ${stock.high}</p>
            <p><span className="boldText">Lowest Price:</span> ${stock.low.toFixed(2)}</p>
            <p><span className="boldText">Opened At:</span> ${stock.open}</p>

        </div>
    )
}

export default Stock