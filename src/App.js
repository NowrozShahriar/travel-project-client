import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Main from './pages/home/Main/Main';
import MyOrders from './pages/MyOrders/MyOrders';
import AllOrders from './pages/AllOrders/AllOrders';
import NotFound from './pages/NotFound/NotFound';
import AddService from './pages/AddService/AddService';
import AuthProvider from './contexts/AuthProvider';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/Shared/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Main></Main>
            </Route>
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/all-orders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-service">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/place-order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
