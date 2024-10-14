import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
function App() {
      const router = createBrowserRouter([
        {path: "/", element: <Root />},
      ]);

  return <RouterProvider router={router} />;
}

export default App
