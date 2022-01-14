import { Outlet, NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <ul className="header">
                <NavLink to="/"><img src='assets/images/logo.png' alt="logo" className="logoImg" 
                    title="Urheberschaft: https://www.flaticon.com/ru/"/></NavLink>
                <NavLink to="/">Word table</NavLink>
                <NavLink to="/game">Words on cards</NavLink>
            </ul>
            <Outlet />
        </div>
    );
}

export default Header;