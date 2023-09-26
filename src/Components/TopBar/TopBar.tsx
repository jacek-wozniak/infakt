import './TopBar.scss';
import {NavLink} from "react-router-dom";

const TopBar = () => {
    return (
        <header className="topbar">
            <NavLink to='/'>
                <img src="https://www.infakt.pl/wp-content-new/themes/infakt/assets/images/2020/logo-infakt.svg" width="146" height="38" alt="logo infakt" />
            </NavLink>
            <nav className="topbar__navigation">
                <NavLink className="topbar__link" to='/accountants'>Accountants</NavLink>
                <NavLink className="topbar__link" to='/another-page'>Another page</NavLink>
            </nav>
        </header>
    )
}

export default TopBar;