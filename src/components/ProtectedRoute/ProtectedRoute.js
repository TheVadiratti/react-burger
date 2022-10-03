import { useSelector } from 'react-redux';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, redirectPath, ...props }) {
  const userName = useSelector((state) => state.user.name);
  console.log(userName);

  if (userName) {
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