import AuthContext from "@/context/AuthContext";
import { Login } from "@/pages/Login";
import { useContext } from "react";
import { Redirect, Route, Switch } from "wouter";

const PublicRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <Switch>
      <Route path="/" component={Login} />;
    </Switch>
  );
};

export default PublicRoutes;
