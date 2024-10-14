import classes from "./MainNav.module.css";
import {NavLink} from "react-router-dom";
export default function MainNav(){
    return (
        <header className={classes.header}>
            <h2>Product Manager</h2>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink  to="/products"
                                className={({isActive}) => isActive ? classes.active : ""}
                        >Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}