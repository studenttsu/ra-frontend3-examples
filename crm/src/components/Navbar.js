import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Navbar() {
    const { isAuth, logout } = useAuth();

    return isAuth && (
        <nav>
            <Link to="/">Мастера</Link>
            <Link to="login">Страница входа</Link>
            <Link to="asdasdasd">404</Link>
            <button onClick={logout}>Logout</button>
        </nav>
    )
}