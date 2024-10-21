import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import ProductsList from "./routes/ProductsList.jsx";

import {loader as productsLoader} from "./routes/ProductsList.jsx";
import ErrorElement from "./ErrorElement.jsx";
import ProductDetail, {loader as productLoader} from "./routes/ProductDetail.jsx";
import {Delete as ProductDeleteAction} from "./routes/Delete.jsx"
import ProductEdit, {action as productEditAction} from "./routes/ProductEdit.jsx";
import ProductAdd, {action as productAddAction} from "./routes/ProductAdd.jsx";

import {useAppContext} from "./context/AppContext.jsx";

function App() {
      const {BACKEND_BASE_URL} = useAppContext();
      // console.log(BACKEND_BASE_URL)

      const router = createBrowserRouter([
        {
            path: "/", element: <Root />,
            errorElement: <ErrorElement/>,
            children: [
            {
                index: true,
                element: <ProductsList />,
             loader: () => productsLoader(BACKEND_BASE_URL),
            },
            {   path: "/product/:productID", element: <ProductDetail />,
                loader: ({params}) => productLoader({params, BACKEND_BASE_URL})
            },
            {   path: "/product/add", element: <ProductAdd />,
                action: ({request})=>productAddAction({request, BACKEND_BASE_URL}),
            },
            {
                path:"/product/:productID/edit", element:<ProductEdit/>,
                loader: ({params}) => productLoader({params, BACKEND_BASE_URL}),
                action: ({ params, request})=> productEditAction({ params, request, BACKEND_BASE_URL }),
            },
            {   path: "/product/:productID/delete",
                action:({ params})=> ProductDeleteAction({ params, BACKEND_BASE_URL }),
            },
        ]
        },
      ]);

  return <RouterProvider router={router} />
}

export default App
