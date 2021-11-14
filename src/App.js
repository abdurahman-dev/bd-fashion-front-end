import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCollection from './pages/AllCollection';
import SingleProduct from './pages/SingleProducts';
import ProductShowCase from './pages/ProductShowCase';
import ScrollToTop from './Components/ScrollTop';
import LogIn from './Components/Login';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './Redux/Actions/product.action';
import ProductControl from './pages/Dashboard/AdminDashboard/ProductControl';
import OrderControl from './pages/Dashboard/AdminDashboard/OrderControl';
import UserControl from './pages/Dashboard/AdminDashboard/UserControl';
import UserDashboard from './pages/Dashboard/UserDashboard/UserDashboard';
import HomeAdmin from './pages/Dashboard/AdminDashboard/HomeAdmin';
import ProductOrder from './pages/Dashboard/UserDashboard/ProductOrder';
import UserProfile from './pages/Dashboard/UserDashboard/UserProfile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/collections" component={AllCollection} />
          <Route path="/login" component={LogIn} />
          <Route path="/dashboard" component={DashboardLayout} />
          {/** admin dashboard*/}
          <Route path="/adminDashboard" component={HomeAdmin} />
          <Route path="/manageProducts" component={ProductControl} />
          <Route path="/manageOrders" component={OrderControl} />
          <Route path="/manageUsers" component={UserControl} />
          {/** user dashboard */}
          <Route path="/userProductStatus" component={UserDashboard} />
          <Route path="/userProductOrderList" component={ProductOrder} />
          <Route path="/userProfile" component={UserProfile} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/category/:categoryId" component={ProductShowCase} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
