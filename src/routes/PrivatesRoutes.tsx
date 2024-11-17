import AuthContext from "@/context/AuthContext";
import { Layout } from "@/layout/Layout";
import { Citas } from "@/pages/Citas";
import { Home } from "@/pages/Home";
import { useContext } from "react";
import { Redirect, Route, Switch } from "wouter";

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/citas" component={Citas} />
        <Route>No se encuentra la ruta</Route>
      </Switch>
    </Layout>
  );
};

export default PrivateRoutes;
