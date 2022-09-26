import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import Login from '../../pages/Login/Login';

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
      </Switch>
    </Router>
  )
}

export default Main;
