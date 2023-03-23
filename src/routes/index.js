import { createBrowserRouter } from "react-router-dom";
import { HomeContainer } from "../container/HomeContainer";
import { LoginContainer } from "../container/LoginContainer";
import { RecoveryContainer } from "../container/RecoveryContainer";
import { PrivateRouter } from "./PrivateRouter";

export const itemList = [
    {
        path: "/authentication",
        element: <LoginContainer />,
        title: "Login",
        private: false,
        hidden: true,
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
        title: "Home",
        private: true,
        hidden: true,
    },
];

export const AllRoutes = createBrowserRouter(itemList);

