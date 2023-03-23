import { Navigate } from "react-router-dom"

export const PrivateRouter = ({ children }) => {
    const isAuthenticated = true;

    if(isAuthenticated) {
        return children;
    }
    
    return <Navigate to="/authentication/login" replace />
}