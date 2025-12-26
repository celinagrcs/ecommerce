import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import ChatSupport from './components/ChatSupport'
import Footer from "./components/Footer"
import ScrollToTop from './utils/ScrollToTop'
import React, { Suspense, useState } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

const Home = React.lazy(() => import('./pages/Home'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const BookPage = React.lazy(() => import('./pages/BookPage'));
const OrderHistoryPage = React.lazy(() => import('./pages/OrderHistoryPage'));

function App() {
    const [search, setSearch] = useState("");
  return (
    <>
      <ScrollToTop />
      <Header search={search} setSearch={setSearch} />
      <ChatSupport /> 
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<Home search={search} />} />
          <Route path='/CartPage' element={<CartPage />} />
          <Route path='/book/:id' element={<BookPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
