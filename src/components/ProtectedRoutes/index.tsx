import { Navigate, Outlet } from "react-router";
import useUserIsLogin from "../../hook/getUserIsLogin";

const ProtectedRoutes = () => {
    const { isLoggedIn } = useUserIsLogin();

    // If isLogin is null, return null
    if (isLoggedIn === null) return null;
    // If isLogin is true, return Outlet
    // If isLogin is false, return Navigate to "/"
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />
};

export default ProtectedRoutes;
