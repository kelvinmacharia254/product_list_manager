import {useRouteError} from "react-router-dom";

export default function ErrorElement(){
    const error = useRouteError();
    return (
        <div id="error">
            <div>
                <h2>Something went wrong</h2>
                <p>{error.status} {error.statusText || error.message}</p>
            </div>
        </div>
)
}