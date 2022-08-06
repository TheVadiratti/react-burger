import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import appStyles from './App.module.css';
import data from '../utils/data';

function App() {
  return (
  <div className={appStyles.app}>
    <AppHeader />
    <Main data={data} />
  </div>
  )
}

export default App;
