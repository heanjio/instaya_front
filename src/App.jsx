import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Registro from './Components/Registro'
import OrderList from './Components/OrderList'
import Order from './Components/Order'
import OrderEdit from './Components/OrderEdit'
import OrderNew from './Components/OrderNew'

function App() {

  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/orderlist/:id" element={<Order />} />
          <Route path="/orderlist/:id/edit" element={<OrderEdit />} />
          <Route path="/orderlist/new" element={<OrderNew />} />
          
        </Routes>
    </Router>


  )
}

export default App
