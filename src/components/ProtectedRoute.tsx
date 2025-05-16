import { type ReactNode } from "react";
import { type RootState } from '../store/store';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children} : {children : ReactNode})=>{
    const isAuthenticated = useSelector((state : RootState) => state.auth.isAuthenticated)
    return isAuthenticated ? children : <Navigate to="/login" replace />
}