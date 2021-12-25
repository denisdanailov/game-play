import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";


const Header = ({
    isAuthenticated
}) => {

    // let history = useHistory(); 

    let userNavigation = (<div id="user">
        <Link to="/create">Create Game</Link>
        <Link id="logoutBtn" to="/logout">Logout</Link>
    </div>);

    let guestNavigation = (<div id="guest">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>)

    // console.log(authenticated);
    // history.push('/catalog')

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/catalog">All games</Link>

                {isAuthenticated 
                ? userNavigation
                : guestNavigation}
            </nav>
        </header>
    );
};

export default Header;