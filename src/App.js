
import './App.css';

import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Products from './components/Products/Products';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div>      
          <AuthProvider>            
            <Router>              
              <Switch>
                <Route exact path='/'>
                  <Login></Login>
                </Route>               
                <PrivateRoute path='/products'>
                  <Products></Products>
                </PrivateRoute>
              </Switch>
            </Router>
          </AuthProvider>
    </div>
  );
}

export default App;
