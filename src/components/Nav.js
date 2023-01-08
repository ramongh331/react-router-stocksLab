
import { Link } from "react-router-dom";
import '../App.css'

const Nav = props => {
    return (
        <div className="nav">
            <Link to='/'>
            <div>Home</div>
            </Link>
            <Link to='/about'>
            <div>About</div>
            </Link>
            <Link to='/stocks'>
            <div>Stocks</div>
            </Link>
        </div>
    )
}

export default Nav