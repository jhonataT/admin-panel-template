import { Navigate } from "react-router-dom";
import { MainLayout } from "../components/Layout";

export const PrivateRouter = ({ children, template, title }) => {
    const isAuthenticated = true;

    if(isAuthenticated) {
        if(template === 'main') {
            return <MainLayout title={title}>{children}</MainLayout>
        }

        return children;
    }

    
    return <Navigate to="/authentication/login" replace />
}