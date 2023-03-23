import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/Layout";
import { HomeContainer } from "../container/HomeContainer";
import { LoginContainer } from "../container/LoginContainer";
import { RecoveryContainer } from "../container/RecoveryContainer";
import { PrivateRouter } from "./PrivateRouter";

export const AllRoutes = createBrowserRouter([
    {
        path: "/authentication",
        element: <LoginContainer />,
        userTypeAccess: null,
        private: false,
        children: [
            {
                path: 'login',
                element: <LoginContainer />,
            },
            {
                path: 'recovery',
                element: <RecoveryContainer />,
            }
        ]
    },
    {
        path: "/",
        element: <PrivateRouter><HomeContainer /></PrivateRouter>,
        userTypeAccess: null,
        private: true
    },
]);
