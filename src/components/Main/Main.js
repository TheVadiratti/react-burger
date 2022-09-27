import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default Main;
