import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import PrivateRoutes from "./PrivatesRoutes";
import PublicRoutes from "./PublicRoutes";

const Router = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <PrivateRoutes />;
  }
  return <PublicRoutes />;
};

export default Router;
