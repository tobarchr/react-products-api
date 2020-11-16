import './App.css';
import ProductForm from './components/ProductForm';
import NewProduct from './views/NewProduct';
import {Router, Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <h1>Product Form</h1>
      <Router>
        <NewProduct path="/"/>
      </Router>
    </div>
  );
}

export default App;
