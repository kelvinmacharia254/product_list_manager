import ProductForm from "../components/ProductForm.jsx";
import {redirect, useLoaderData} from "react-router-dom";
import ProductLayout from "../layouts/ProductLayout.jsx";

export async function action({ params, request, BACKEND_BASE_URL }) {
    const apiURL = `${BACKEND_BASE_URL}/api/product/${params.productID}`;
    console.log(apiURL)
    try {
        const formData = await request.formData();
        console.log(formData)
        const updatedProduct = {
            name: formData.get("name"),
            description: formData.get("description"),
            price: formData.get("price"),
        };

        const response = await fetch(apiURL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Location couldn't be found [${response.status}]`);
            } else if (response.status === 401) {
                throw new Error(`Invalid Creds [${response.status}]`);
            } else if (response.status === 403) {
                throw new Error(`Permission denied [${response.status}]`);
            } else {
                throw new Error("Server errors");
            }
        }

        return redirect(`/product/${params.productID}`);

    } catch (error) {
        throw new Error(error.message);
    }
}
export default function ProductEdit(){
    const product = useLoaderData()
    return(
        <ProductLayout>
            <ProductForm product={product} method="patch"/>
        </ProductLayout>
    )
}