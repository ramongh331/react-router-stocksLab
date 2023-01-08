import data from "../data";
import {Link } from 'react-router-dom'

const Dashboard = props => {
    return (
        <div className="stock">
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
                    return (<tr>
                        <td>
                            <Link to={`/stocks/${symbol}`}>
                            <p>{name}</p>
                        </Link>
                        </td>
                        <td><p>${lastPrice}</p></td>
                        <td><p>{change}</p></td>
                        </tr>       
                    )
                })
            }
            </table>
        </div>
    )
}

export default Dashboard