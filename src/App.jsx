import React from 'react'
import {BrowserRouter as Router,Route,Routes, Navigate, useNavigate,} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import NoPage from './pages/nopage/Nopage'
import Login from './pages/registration/Login'
import SignUp from './pages/registration/SignUp'
import MyState from './context/data/myState';
import ProductInfo from './pages/productInfo/ProductInfo'
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import AddProduct from './pages/admin/pages/AddProduct';
import {toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproduct/Allproducts';
const App = () => {
  return (
    <MyState>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/order" element={
          <ProtectedRoute> <Order/> </ProtectedRoute>
        } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
          <ProtectedRoutesForAdmin> <Dashboard/> </ProtectedRoutesForAdmin>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/*" element={<NoPage/>} />
        <Route path="/addproduct" element={
          <ProtectedRoutesForAdmin> <AddProduct/> </ProtectedRoutesForAdmin>
        } />
        <Route path="/updateproduct" element={
          <ProtectedRoutesForAdmin> <UpdateProduct/> </ProtectedRoutesForAdmin>
        } />
      </Routes>
        <ToastContainer/> 
    </Router>
    </MyState>
  )
}

export default App

// user
export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
  if(user){
    return children
    }else{
      return <Navigate to="/login" />
}
}
// admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'mohitlavania2003@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}