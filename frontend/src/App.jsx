import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import ProductsList from "./routes/ProductsList.jsx";

import {loader as productsLoader} from "./routes/ProductsList.jsx";
import ErrorElement from "./ErrorElement.jsx";
import ProductDetail, {loader as productLoader} from "./routes/ProductDetail.jsx";
import {Delete as deleteAction} from "./routes/Delete.jsx"
function App() {
      const router = createBrowserRouter([
        {
            path: "/", element: <Root />,
            errorElement: <ErrorElement/>,
            children: [
            {
                path: "/products", element: <ProductsList />,
             loader: productsLoader,
            },
            {   path: "/product/:productID", element: <ProductDetail />,
                loader: productLoader
            },
            {   path: "/product/:productID/delete",
                action: deleteAction,
            }
        ]
        },
      ]);

  return <RouterProvider router={router} />;
}

export default App
