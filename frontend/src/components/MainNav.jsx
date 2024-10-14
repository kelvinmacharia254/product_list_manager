import classes from "./MainNav.module.css";
export default function MainNav(){
    return (
        <header className={classes.header}>
            <h2>Product Manager</h2>
            <nav className={classes.nav}>
                <h4>Manage your products List</h4>
            </nav>
        </header>
    )
}