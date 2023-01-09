import data from "../data";
import {Link } from 'react-router-dom'
import "../App.css"

const Dashboard = props => {
    
    
    return (
        <div className="stock">
            <h1>Most Active Stocks</h1>
             <table>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Price</th>
                                <th>Change</th>
                            </tr>
                        </thead>
            {
                data.map(stock => {
                    const {name, symbol, lastPrice, change} = stock;
                    const twoDigitChange = change.toFixed(2);
                    return (<tbody>
                        <tr className="row">
                            <td>
                                <Link to={`/stocks/${symbol}`}>
                                <p>{name}</p>
                            </Link>
                            </td>
                            <td className="price"><p>${lastPrice}</p></td>
                            <td><p>${twoDigitChange}</p></td>
                            </tr>
                    </tbody>      
                    )
                })
            }
            </table>
        </div>
    )
}

export default Dashboard