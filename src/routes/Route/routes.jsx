import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
])

export default routes;