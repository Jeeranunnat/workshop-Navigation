import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/page/Home';
import Member from './components/page/Member';
import Product from './components/page/Product';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/member" component={Member} />
        <Route path="/product" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
