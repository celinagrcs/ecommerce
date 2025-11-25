import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import CartPage from './pages/CartPage'
import BookPage from './pages/BookPage'
import ChatSupport from './components/ChatSupport'
import Footer from "./components/Footer"
import ScrollToTop from './utils/ScrollToTop'
import { useState } from 'react'
import OrderHistoryPage from './pages/OrderHistoryPage'

function App() {
    const [search, setSearch] = useState("");
  return (
    <>
      <ScrollToTop />
      <Header search={search} setSearch={setSearch} />
      <ChatSupport /> 
      <Routes>
        <Route path='/' element={<Home search={search} />} />
        <Route path='/CartPage' element={<CartPage />} />
        <Route path='/book/:id' element={<BookPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
