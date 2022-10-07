import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, ...props }) {
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