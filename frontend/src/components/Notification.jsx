import classes from "./Notification.module.css"
export default function Notification({className, message}){
    return (
        <div className={`${classes.notification} ${className? classes.fade: ''}`}>
            {message}
        </div>
    )
}