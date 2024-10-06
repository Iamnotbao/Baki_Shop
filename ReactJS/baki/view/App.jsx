import { useState } from 'react'
import Register from './Register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Users from './Users.jsx'
import Roles from './Roles.jsx'
import Admin from './Admin.jsx'
import ProductDetails from '../components/ProductDetails.jsx'
import { CartProvider } from '../src/reducer/cartReducer.jsx'
import Cart from '../components/Cart.jsx'
import Order from '../components/Order.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Notification from '../components/Notification.jsx'
import { useAuthentication } from '../src/authorization/AuthProvider.jsx'
import { Navigate } from 'react-router-dom'
import ProductList from '../components/ProductList.jsx'


function App() {
  const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuthentication(); // Get authentication status from context

    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <PrivateRoute>
            <>
              <Header />
              <Home />
              <Footer />
            </>
          </PrivateRoute>


        } />
        <Route path="/admin" element={<PrivateRoute>
          <Admin />
        </PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute>
          <Users />
        </PrivateRoute>} />
        <Route path="/roles" element={<PrivateRoute><Roles /></PrivateRoute>} />
        <Route path="/product/:name" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
        <Route path="/cartManage" element={<PrivateRoute>
          <>
            <Header />
            <Cart />
            <Footer />
          </>
        </PrivateRoute>
        } />
        <Route path="/order" element={<PrivateRoute>
          <Order />
        </PrivateRoute>} />
        <Route path="/productList"
          element={<PrivateRoute>
            <>
              <Header />
              <ProductList />
              <Footer />
            </>
          </PrivateRoute>}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
