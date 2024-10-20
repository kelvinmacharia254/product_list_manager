// src/components/Notification.jsx
import { useEffect, useState } from "react";
import classes from "./Notification.module.css";

export default function Notification({ message}) {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setFade(true), 2000); // Set fade after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className={`${classes.notification} ${fade ? classes.fade : ''}`}>
            {message}
        </div>
    );
}
