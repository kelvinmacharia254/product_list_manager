import { redirect } from "react-router-dom";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export async function Delete({ params }) {
    const apiURL = `${BACKEND_BASE_URL}/api/product/${params.productID}`;

    try {
        // First, fetch the product details to get the name before deletion
        const productResponse = await fetch(apiURL);
        if (!productResponse.ok) {
            throw new Error(`Failed to fetch product details: ${productResponse.status}`);
        }

        const productData = await productResponse.json();
        const productName = productData.name; // Extract the product name

        // Now, proceed to delete the product
        const deleteResponse = await fetch(apiURL, {
            method: "DELETE",
        });

        // Check for HTTP response errors
        if (!deleteResponse.ok) {
            // Handle specific error codes with more descriptive messages
            switch (deleteResponse.status) {
                case 404:
                    throw new Error(`Product not found [404]`);
                case 401:
                    throw new Error(`Unauthorized access, invalid credentials [401]`);
                case 403:
                    throw new Error(`Permission denied [403]`);
                default:
                    throw new Error(`Unexpected server error [${deleteResponse.status}]`);
            }
        }

        // Handle the case where response body might be empty (successful DELETE)
        const contentType = deleteResponse.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const resData = await deleteResponse.json();
            console.log("Product deletion successful:", resData);
        } else {
            console.log("Product deletion successful.");
        }

        // Redirect to homepage after successful deletion with product name as a query parameter
        return redirect(`/?productName=${encodeURIComponent(productName)}`);

    } catch (error) {
        // Log error for better debugging
        console.error("Delete request failed:", error);
        // Re-throw the error to be handled by the caller
        throw new Error(`Failed to delete the product: ${error.message}`);
    }
}

