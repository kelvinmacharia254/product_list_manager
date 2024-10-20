import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import ProductsList from "./routes/ProductsList.jsx";

import {loader as productsLoader} from "./routes/ProductsList.jsx";
import ErrorElement from "./ErrorElement.jsx";
import ProductDetail, {loader as productLoader} from "./routes/ProductDetail.jsx";
import {Delete as ProductDeleteAction} from "./routes/Delete.jsx"
import ProductEdit, {action as productEditAction} from "./routes/ProductEdit.jsx";
import ProductAdd, {action as productAddAction} from "./routes/ProductAdd.jsx";
function App() {
      const router = createBrowserRouter([
        {
            path: "/", element: <Root />,
            errorElement: <ErrorElement/>,
            children: [
            {
                index: true,
                element: <ProductsList />,
             loader: productsLoader,
            },
            {   path: "/product/:productID", element: <ProductDetail />,
                loader: productLoader
            },
            {   path: "/product/add", element: <ProductAdd />,
                action: productAddAction,
            },
            {
                path:"/product/:productID/edit", element:<ProductEdit/>,
                loader: productLoader,
                action: productEditAction,
            },
            {   path: "/product/:productID/delete",
                action: ProductDeleteAction,
            },
        ]
        },
      ]);

  return <RouterProvider router={router} />;
}

export default App
