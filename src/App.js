import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import Books from './components/Books';
import './components/App.css';

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
