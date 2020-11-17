import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import UpdateProduct from './views/UpdateProduct';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <Main path="/"/>
        <Details path="/products/:id"/>
        <UpdateProduct path="/products/update/:id"/>
      </Router>
    </div>
  );
}

export default App;
