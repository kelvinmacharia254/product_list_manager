import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import ProductsList from "./routes/ProductsList.jsx";

import {loader as productsLoader} from "./routes/ProductsList.jsx";
import ErrorElement from "./ErrorElement.jsx";
import ProductDetail, {loader as productLoader} from "./routes/ProductDetail.jsx";
import {Delete as deleteAction} from "./routes/Delete.jsx"
import ProductEdit, {action as editAction} from "./routes/ProductEdit.jsx";
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
            {   path: "/product/:productID/delete",
                action: deleteAction,
            },
            {
                path:"/product/:productID/edit", element:<ProductEdit/>,
                loader: productLoader,
                action: editAction,
            },
        ]
        },
      ]);

  return <RouterProvider router={router} />;
}

export default App
