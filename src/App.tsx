import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import CartPage from './pages/CartPage'
import BookPage from './pages/BookPage'
import ChatSupport from './components/ChatSupport'
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <ChatSupport />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CartPage' element={<CartPage />} />
        <Route path='/book/:id' element={<BookPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
