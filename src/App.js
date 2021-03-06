import { Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import Books from './components/Books';
import './styles/App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
