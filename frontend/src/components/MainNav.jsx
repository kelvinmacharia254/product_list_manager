import classes from "./MainNav.module.css";
import {Link} from "react-router-dom";

export default function MainNav(){
    return (
        <header className={classes.header}>
            <Link to="/" >
                <h2>Product Manager</h2>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to="/product/add"> + Add New Product</Link>
                    </li>
                    <li>
                        <Link to="/auth">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}