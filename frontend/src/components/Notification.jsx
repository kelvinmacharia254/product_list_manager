import classes from "./Notification.module.css"
export default function Notification({className}){
    return (
        <div className={`${classes.notification} ${className? classes.fade: ''}`}>
            Product deleted successfully!
        </div>
    )
}