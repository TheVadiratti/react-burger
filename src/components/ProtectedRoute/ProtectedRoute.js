import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, ...props }) {
  const userName = useSelector((state) => state.user.name);
  console.log(userName);

  return (
    <Route
      {...props}
      render={() => userName ?
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