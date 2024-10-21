
import { Form } from "react-router-dom";
import classes from "./Form.module.css";

export default function AuthForm() {
    return (
        <div className={classes.formwrapper}>
            <Form method = 'post' className={classes.editform}>
                <label htmlFor="name">UserName</label>
                <input type="text" id="name" name="username" required />
                <label htmlFor="price">Password</label>
                <input type="password"  name ="password" required/>
                <button type="submit">Login</button>
            </Form>
        </div>
    );
}