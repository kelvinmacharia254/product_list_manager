import MainNav from "../components/MainNav.jsx";
import {Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <MainNav/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}