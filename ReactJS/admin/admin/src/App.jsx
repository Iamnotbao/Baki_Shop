import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPages from "./pages/LoginPages"
import HomePages from './pages/HomePages'
import ErrorPage from './pages/ErrorPage'
import Ecommerce_Products_List from './components/Ecommerce_Products_List'
import Ecommerce_Products_Add from './components/Ecommerce_Products_Add'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<LoginPages />} />
          <Route path="/home" element={<HomePages />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="home/productList" element={<Ecommerce_Products_List />} />
          <Route path="home/productList/add" element={<Ecommerce_Products_Add />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
