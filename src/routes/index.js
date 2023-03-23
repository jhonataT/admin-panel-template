import { createBrowserRouter } from "react-router-dom";
import { HomeContainer } from "../container/HomeContainer";
import { LoginContainer } from "../container/LoginContainer";

export const AllRoutes = createBrowserRouter([
    {
        path: "/authentication/login",
        element: <LoginContainer />,
        userTypeAccess: null,
        private: false
    },
    {
        path: "/",
        element: <LoginContainer />,
        // element: <HomeContainer />,
        userTypeAccess: null,
        private: false
    },
]);