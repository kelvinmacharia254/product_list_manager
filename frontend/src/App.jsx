import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import ProductsList from "./routes/ProductsList.jsx";

import {loader as productsLoader} from "./routes/ProductsList.jsx";
import ErrorElement from "./ErrorElement.jsx";
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
        ]
        },
      ]);

  return <RouterProvider router={router} />;
}

export default App
