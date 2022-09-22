import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from 'util/Requests';
 
type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};
 
const PrivateRoute = ({ children, path, roles = [] }: Props) => {
 
  return (
    <Route
      path={path}
      render={({location}) =>
        !isAuthenticated() 
        ? <Redirect to={{
            pathname: "/admin/auth/login",
            state: { from: location}
          }} />
        : 
          !hasAnyRoles(roles) ? 
          <Redirect to="/" />
          : <>{children}</>
      }
    />
  );
};
 
export default PrivateRoute;