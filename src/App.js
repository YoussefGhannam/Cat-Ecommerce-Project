import React from 'react';
import Home from './pages/Home'
import Products from './pages/Products'
import Carticon from './Components/Carticon'
import store from './store/store'
import {Provider} from 'react-redux'
import Product from './pages/Product'
import Cart from './pages/Cart'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a href="#*" className="navbar-brand" >Cats Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink  className="nav-link " to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link " to="/Products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link " to="/Cart">Cart</NavLink>
        </li>
      </ul>
    </div>
  </div>
  <Carticon />
</nav>
<Routes>
    <Route  path="/" exact element={<Home />}  />
    <Route path="/Products" element={<Products />}  />
    <Route path="/Products/:id" element={<Product />} />
    <Route path="/Cart"  element={<Cart />} />
  </Routes>
</Router>
</Provider>
    )
  }
}
export default App