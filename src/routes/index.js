import { createBrowserRouter } from "react-router-dom";
import { HomeContainer } from "../container/HomeContainer";
import { LoginContainer } from "../container/LoginContainer";
import { RecoveryContainer } from "../container/RecoveryContainer";
import { PrivateRouter } from "./PrivateRouter";

export const itemList = [
    {
        path: "/authentication",
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
        icon: "IoHome",
        private: true,
        hidden: false,
    },
    {
        path: "/dasboard",
        element: <PrivateRouter><HomeContainer /></PrivateRouter>,
        title: "Dashboard",
        icon: "IoPieChart",
        private: true,
        hidden: false,
    },
    {
        path: "/users",
        element: <PrivateRouter><HomeContainer /></PrivateRouter>,
        title: "Usuários",
        icon: "IoPeople",
        private: true,
        hidden: false,
    },
    {
        path: "/charts",
        element: <PrivateRouter><HomeContainer /></PrivateRouter>,
        title: "Gráficos",
        icon: "IoBarChart",
        private: true,
        hidden: false,
    },
];

export const AllRoutes = createBrowserRouter(itemList);

