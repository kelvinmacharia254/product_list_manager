import FormLayout from "../layouts/FormLayout.jsx";
import AuthForm from "../components/AuthForm.jsx";
import {redirect} from "react-router-dom";

export async function action({request, BACKEND_BASE_URL}){
    const apiURL = `${BACKEND_BASE_URL}/auth/token/`;
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    // fetch credentials from the request
    const credentials = await request.formData()
    const authData = {
        username: credentials.get("username"),
        password: credentials.get("password")
    }

    // send the credentials to the backend
    const response = await fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData)
    });

    if(!response.ok){
        return new Response("Authentication failed", {status: 401})
    }

    const resData = await response.json();
    console.log(resData)
    const token = resData.access;
    window.localStorage.setItem("token", token);
    console.log(token)

    return redirect("/")
}
export default function Authentication() {
  return (
    <FormLayout>
        <h1>Authentication</h1>
        <AuthForm />
    </FormLayout>
  );
}