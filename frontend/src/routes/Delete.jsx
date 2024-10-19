import { redirect } from "react-router-dom";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export async function Delete({ params }) {
    console.log(params.productID)
    const apiURL = `${BACKEND_BASE_URL}/api/product/${params.productID}`;

    try {
        const response = await fetch(apiURL, {
            method: "DELETE",
        });

        // Check for HTTP response errors
        if (!response.ok) {
            // Handle specific error codes with more descriptive messages
            switch (response.status) {
                case 404:
                    throw new Error(`Product not found [404]`);
                case 401:
                    throw new Error(`Unauthorized access, invalid credentials [401]`);
                case 403:
                    throw new Error(`Permission denied [403]`);
                default:
                    throw new Error(`Unexpected server error [${response.status}]`);
            }
        }

        // Handle the case where response body might be empty (successful DELETE)
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const resData = await response.json();
            console.log("Product deletion successful:", resData);
        } else {
            console.log("Product deletion successful.");
        }

        // Redirect to homepage after successful deletion
        return redirect("/");

    } catch (error) {
        // Log error for better debugging
        console.error("Delete request failed:", error);
        // Re-throw the error to be handled by the caller
        throw new Error(`Failed to delete the product: ${error.message}`);
    }
}
