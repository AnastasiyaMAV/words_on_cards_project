import { Outlet, NavLink } from "react-router-dom";
import Logo from "../components/assets/images/logo.png";


function Header() {
    return (
        <div>
            <ul className="header">
                <NavLink to="/"><img src={Logo} alt="logo" className="logoImg" 
                    title="Urheberschaft: https://www.flaticon.com/ru/"/></NavLink>
                <NavLink to="/" className="notActivLink" >Word table</NavLink>
                <NavLink to="/addDelWord" className="notActivLink">Add or remove</NavLink>
                <NavLink to="/game" className="notActivLink">Words on cards</NavLink>
            </ul>
            <Outlet />
        </div>
    );
}

export default Header;