import { ReactNode } from 'react';
import { useSelector } from '../../hooks/hooks';
import { Route, Redirect, RouteProps } from 'react-router-dom';

type TProps = RouteProps & { children: ReactNode };

function ProtectedRoute({ children, ...props }: TProps) {
  const userName = useSelector((state) => state.user.name);
  const hasToken = localStorage.getItem('refreshToken');

  return (
    <Route
      {...props}
      render={({ location }) => (userName || hasToken) ?
        (children)
        :
        (<Redirect
          to={{
            pathname: '/login',
            state: { from: location }
          }}
        />)
      }
    />
  )
}

export default ProtectedRoute;