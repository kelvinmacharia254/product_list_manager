import {useLoaderData} from "react-router-dom";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL
export async function loader (){
    let apiURL = `${BACKEND_BASE_URL}/api/products`

    try{
        const response = await fetch(apiURL)
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
        for(let product of resData){
            console.log(product)
        }

        return resData
    }catch(error){
        // handle generic network-related errors like "Failed to fetch"
        throw new Error(error.message)
    }
}

export default function ProductsList(){
    const data = useLoaderData()
    return (
        <section id="product-list">
            <h3>Products List</h3>
            <ul>
                {data.map((product) => (
                <li key={product.id}>
                    <h4>{product.name}</h4>
                    {/*<p>{product.description}</p>*/}
                    <p>{product.price}</p>
                </li>
                ))}
            </ul>
        </section>
    )
}