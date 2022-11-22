import { ReactNode } from 'react';
import { useSelector } from '../../hooks/hooks';
import { Route, Redirect } from 'react-router-dom';

type TProps = {
  children: ReactNode;
  [key: string]: any;
};

function ProtectedRoute({ children, ...props }: TProps) {
  const userName = useSelector((state) => state.user.name);
  const hasToken = localStorage.getItem('refreshToken');

  return (
    <Route
      {...props}
      render={() => (userName || hasToken) ?
        (children)
        :
        (<Redirect
            to='/login'
          />)
      }
    />
  )
}

export default ProtectedRoute;