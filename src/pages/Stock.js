import { useParams } from 'react-router-dom'
import data from '../data'



const Stock = props => {
let { symbol } = useParams()
   

    return (
        <div>
            <h1>{symbol}</h1>
        </div>
    )
}

export default Stock