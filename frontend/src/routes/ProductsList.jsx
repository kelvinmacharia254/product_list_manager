// src/routes/ProductsList.jsx
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Notification from "../components/Notification.jsx";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export async function loader() {
    let apiURL = `${BACKEND_BASE_URL}/api/products`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Location couldn't be found [${response.status}]`);
            } else if (response.status === 401) {
                throw new Error(`Invalid credentials [${response.status}]`);
            } else if (response.status === 403) {
                throw new Error(`Permission denied [${response.status}]`);
            } else {
                throw new Error("Server errors");
            }
        }

        const resData = await response.json();
        return resData;

    } catch (error) {
        throw new Error(error.message);
    }
}

export default function ProductsList() {
    const products = useLoaderData();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productName = searchParams.get("productName")
    const newProduct = searchParams.get("newProduct")

    return (
        <section id="product-list">
            {productName && (<Notification message={`${productName} was deleted successfully.`}/>)}
            {newProduct && (<Notification message={`${newProduct} was added successfully.`}/>)}
            <h3>Products List</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <p>Ksh {product.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
