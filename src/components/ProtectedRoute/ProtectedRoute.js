import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, redirectPath, ...props }) {
  const userName = useSelector((state) => state.user.name);
  const hasToken = localStorage.getItem('refreshToken');
  console.log(userName);

  if (userName || hasToken) {
    return (
      <Route {...props}>
        {children}
      </Route>
    )
  }
  else {
    return (
      <Redirect
        to={{
          pathname: redirectPath
        }}
      />
    )
  }
}

export default ProtectedRoute;