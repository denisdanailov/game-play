import { Link } from "react-router-dom"
import { isAuthenticated } from "../api/data.js";

const Header = () => {

    const authenticated = isAuthenticated();

    let userNavigation = (<div id="user">
        <Link to="/create">Create Game</Link>
        <Link id="logoutBtn" to="/logout">Logout</Link>
    </div>);

    let guestNavigation = (<div id="guest">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>)

    console.log(authenticated);
    

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/catalog">All games</Link>

                {authenticated 
                ? userNavigation
                : guestNavigation}
            </nav>
        </header>
    );
};

export default Header;