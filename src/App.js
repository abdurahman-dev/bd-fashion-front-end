import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCollection from './pages/AllCollection';
import SingleProduct from './pages/SingleProducts';
import ProductShowCase from './pages/ProductShowCase';
import ScrollToTop from './Components/ScrollTop';
import LogIn from './Components/Login';
// import Dashboard from './pages/Dashboard';
import DashboardLayout from './pages/Dashboard/DashboardLayout';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collections" component={AllCollection} />
        <Route path="/login" component={LogIn} />
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/category/:categoryId" component={ProductShowCase} />
      </Switch>
    </Router>
  );
}

export default App;
