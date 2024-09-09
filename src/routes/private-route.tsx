import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate } from "react-router";

export function PrivateRoute({ element }: { element: JSX.Element }) {
    const logged = useSelector((state: RootState) => state.login.value);
    return logged ? element : <Navigate to="/" replace />;
}