import ProductForm from "../components/ProductForm.jsx";
import FormLayout from "../layouts/FormLayout.jsx";
import {redirect} from "react-router-dom";

export async function action({ request, BACKEND_BASE_URL }) {
    const apiURL = `${BACKEND_BASE_URL}/api/products/`;
    try {
        const formData = await request.formData();
        const newProduct = {
            name: formData.get("name"),
            description: formData.get("description"),
            price: formData.get("price"),
        };
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
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
        return redirect(`/?newProduct=${encodeURIComponent(newProduct.name)}`);

    } catch (error) {
        throw new Error(error.message);
    }
}
export default function ProductAdd(){
    return(
        <FormLayout>
            <ProductForm method ="post"/>
        </FormLayout>
    )
}