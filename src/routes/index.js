import { createBrowserRouter } from "react-router-dom";
import { DashboardContainer } from "../container/DashboardContainer";
import { HomeContainer } from "../container/HomeContainer";
import { LoginContainer } from "../container/LoginContainer";
import { NewProjectsContainer } from "../container/NewProjectsContainer";
import { NewUserContainer } from "../container/NewUserContainer";
import { ProjectsContainer } from "../container/ProjectsContainer";
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
        path: "*",
        element: <LoginContainer />,
        title: "404",
        icon: "IoHome",
        private: true,
        hidden: true,
    },
    {
        path: "/home",
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
        path: "/projects",
        element: <PrivateRouter template="main" title="Lista de Projetos"><ProjectsContainer /></PrivateRouter>,
        title: "Projetos",
        icon: "IoLayers",
        private: true,
        hidden: false,
    },
    {
        path: "/projects/new",
        element: <PrivateRouter template="main" title="Lista de Projetos"><NewProjectsContainer /></PrivateRouter>,
        title: "Projetos",
        icon: "IoLayers",
        private: true,
        hidden: true,
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

