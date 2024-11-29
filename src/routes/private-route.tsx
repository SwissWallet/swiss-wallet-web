import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate, useLocation } from "react-router";

export function PrivateRoute({ element }: { element: JSX.Element }) {
    const route = useLocation();
    localStorage.setItem('routeCurrent', route.pathname);
    const logged = useSelector((state: RootState) => state.login.value);
    return logged ? element : <Navigate to="/" replace />;
}