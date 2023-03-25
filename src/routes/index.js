import { createBrowserRouter } from "react-router-dom";
import { DashboardContainer } from "../container/DashboardContainer";
import { HomeContainer } from "../container/HomeContainer";
import { LoginContainer } from "../container/LoginContainer";
import { NewUserContainer } from "../container/NewUserContainer";
import { RecoveryContainer } from "../container/RecoveryContainer";
import { UsersContainer } from "../container/UsersContainer";
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
        element: <PrivateRouter template="main" title="Home"><HomeContainer /></PrivateRouter>,
        title: "Home",
        icon: "IoHome",
        private: true,
        hidden: false,
    },
    {
        path: "/dasboard",
        element: <PrivateRouter template="main" title="Dashboard"><DashboardContainer /></PrivateRouter>,
        title: "Dashboard",
        icon: "IoBarChart",
        private: true,
        hidden: false,
    },
    {
        path: "/users",
        element: <PrivateRouter template="main" title="Usuários"><UsersContainer /></PrivateRouter>,
        title: "Usuários",
        icon: "IoPeople",
        private: true,
        hidden: false,
    },
    {
        path: "/users/new",
        element: <PrivateRouter template="main" title="Criação de Usuário"><NewUserContainer /></PrivateRouter>,
        title: "Criação de Usuário",
        icon: "IoPeople",
        private: true,
        hidden: true,
    },
    {
        path: "/users/edit/:userId",
        element: <PrivateRouter template="main" title="Edição de Usuário"><UsersContainer /></PrivateRouter>,
        title: "Edição de Usuário",
        icon: "IoPeople",
        private: true,
        hidden: true,
    },
    {
        path: "/charts",
        element: <PrivateRouter template="main" title="Importação de dados"><HomeContainer /></PrivateRouter>,
        title: "Importação",
        icon: "IoCloudUpload",
        private: true,
        hidden: false,
    },
];

export const AllRoutes = createBrowserRouter(itemList);

