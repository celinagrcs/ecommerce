import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import CartPage from './pages/CartPage'
import BookPage from './pages/BookPage'
import ChatSupport from './components/ChatSupport'
import Footer from "./components/Footer"
import ScrollToTop from './utils/ScrollToTop'
import { useState } from 'react'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
