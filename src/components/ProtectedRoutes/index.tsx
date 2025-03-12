import React, { useEffect, useLayoutEffect, useState } from "react";
import { isExpired } from "react-jwt";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
    const [isLogin, setIsLogin] = useState<null | boolean>(null);
    useLayoutEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const tokenExp = isExpired(accessToken ? accessToken : '');
        if (accessToken && !tokenExp) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [])

    // If isLogin is null, return null
    if (isLogin === null) return null;
    // If isLogin is true, return Outlet
    // If isLogin is false, return Navigate to "/"
    return isLogin ? <Outlet /> : <Navigate to="/" />
};

export default ProtectedRoutes;
