import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../Providers/Auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard" || '/groups'} />
        );
      }}
    />
  );
};

export default Route;
