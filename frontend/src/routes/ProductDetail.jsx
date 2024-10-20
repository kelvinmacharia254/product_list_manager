import {useLoaderData, Form} from "react-router-dom";
import {getToken} from "../utils/auth.jsx";

export async function loader({params, BACKEND_BASE_URL}){
    console.log(params, BACKEND_BASE_URL)
    let apiURL = `${BACKEND_BASE_URL}/api/product/${params.productID}`
    const token = getToken()
    try{
        const response = await fetch(apiURL,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
        // Check for HTTP errors like 404, 401, etc.
        if (!response.ok) {
            if (response.status === 404) {
                 throw new Error(`Location couldn't be found[${response.status}]`)
            } else if (response.status === 401) {
                throw new Error(`Invalid Creds[${response.status}]`)
            } else if (response.status === 403) {
                throw new Error(`Permission denied [${response.status}]`)
            } else{
                throw new Error("Server errors")
            }
        }

        const resData = await response.json()
        return resData

    }catch(error){
        // handle generic network-related errors like "Failed to fetch"
        throw new Error(error.message)
    }

}
export default function ProductDetail() {
    const product = useLoaderData()

    return (
        <section id="product-detail">
            <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Price: Ksh {product.price}</p>
                <Form action='edit'>
                    <button>Edit</button>
                </Form>
                 &nbsp;|&nbsp;
                <Form
                    method="post"
                    action="delete"
                    onSubmit={(event)=>{
                        // Confirm deletion
                        const confirmed = confirm(`Are you sure you want to delete the product "${product.name}"?`);
                        if (!confirmed) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button type="submit">Delete</button>
                </Form>
            </div>
        </section>
    )
}