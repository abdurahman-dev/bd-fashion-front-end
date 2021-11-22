import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCollection from './pages/AllCollection';
import SingleProduct from './pages/SingleProducts';
import ProductShowCase from './pages/ProductShowCase';
import LogIn from './Components/Login';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './Redux/Actions/product.action';
import ProductControl from './pages/Dashboard/AdminDashboard/product/ProductControl';
import OrderControl from './pages/Dashboard/AdminDashboard/OrderControl';
import UserControl from './pages/Dashboard/AdminDashboard/UserControl';
import UserDashboard from './pages/Dashboard/UserDashboard/UserDashboard';
import HomeAdmin from './pages/Dashboard/AdminDashboard/HomeAdmin';
import ProductOrder from './pages/Dashboard/UserDashboard/ProductOrder';
import UserProfile from './pages/Dashboard/UserDashboard/UserProfile';
import PrivateRoute from './untils/PrivateRoute/PrivateRoute';
import { isLoggedIn } from './Redux/Actions/auth.action';
import CategoryControl from './pages/Dashboard/AdminDashboard/Category/CategoryControl'
import ScrollToTop from './untils/ScrollTop';
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(getProducts());
    if(!auth?.isAuthenticated){
      dispatch(isLoggedIn());
    }
  }, [dispatch,auth?.isAuthenticated]);
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/collections" component={AllCollection} />
          <Route path="/login" component={LogIn} />
          <Route path="/dashboard" component={DashboardLayout} />
          
          {/** admin dashboard*/}
          <PrivateRoute path="/adminDashboard">
            <HomeAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/categoryControl">
            <CategoryControl/>
          </PrivateRoute>
          <PrivateRoute path="/manageProducts">
            <ProductControl/>
          </PrivateRoute>
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
