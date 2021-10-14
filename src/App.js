import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllCollection from './pages/AllCollection';
import ProductShowCase from './pages/ProductShowCase';
import SingleProduct from './pages/ProductDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/singleProduct' component={SingleProduct}/>
        <Route  path='/Collections' component={AllCollection}/>
        <Route  path='/product/:categoryId' component={ProductShowCase}/>
      </Switch>
    </Router>
  );
}

export default App;
