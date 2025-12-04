import { FaBagShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const showBackArrow = location.pathname.includes('/book/') || location.pathname === '/CartPage' || location.pathname === '/orders';

  const handleMenu = () => {
    setMenuIsOpen(false)
  }

  return (
      <nav className="top-0 left-0 w-full z-40 p-4 flex justify-between bg-white border border-b-black">
      <div className="w-1/3 flex justify-start items-center">
        {showBackArrow && (
          <button
            onClick={() => navigate(-1)}
            className="text-black p-2 rounded-full hover:bg-gray-100"
            aria-label="Volver atrás"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
        )}
      </div>
      {/* Titulo de la pagina */}
      <section className="w-1/3 flex justify-center">
        <h1 className="text-center">
          <Link to='/' className='text-[#000] font-title text-[2rem]'>
            Libreria
          </Link>
        </h1>
      </section>
      {/*Iconos y menu */}
      <section className="flex justify-end items-center w-1/3">
        <div className="hidden md:flex items-center space-x-2">
          {/* Iconos desktop */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <Link to="/CartPage" aria-label="Ver carrito de compras">
              <FaBagShopping className="w-6 h-6 text-black" />
                {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ff8e3c] text-white rounded-full text-xs flex items-center justify-center w-5 h-5">
                  {cart.length}
                </span>
                )}
            </Link>
          </button>

          <button className="relative p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <Link to="/orders" aria-label="Ver historial de compras">
              <FaHistory className="w-6 h-6 text-black scale-110" />
            </Link>
          </button>
        </div>

        {/* Menu */}
        <button
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="p-2 rounded-full hover:bg-gray-100 md:hidden" 
          aria-label={menuIsOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {menuIsOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </section>

      <div 
        className={`absolute top-[70px] right-0 w-48 bg-white border border-t-0 shadow-lg transition-transform transform 
        ${menuIsOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-0 opacity-0 invisible'} md:hidden z-30`}> 
      <ul role="menu" className="py-2"> 
        <li role="none" className="px-4 py-2 hover:bg-gray-100">
          <Link
          to="/CartPage"
          onClick={handleMenu}
          className="flex items-center w-full text-left"
          role="menuitem"
          aria-label={`Carrito de Compras, ${cart.length} artículos`}
        >
          <FaBagShopping className="w-5 h-5 mr-3" />
            Carrito de Compras 
            {cart.length > 0 && (
              <span className="ml-2 bg-[#ff8e3c] text-white rounded-full text-xs px-2 py-0.5">
                {cart.length}
              </span>
            )}
        </Link>
        </li>

        <li role="none" className="px-4 py-2 hover:bg-gray-100 border-t border-gray-200">
          <Link
            to="/orders"
            onClick={handleMenu}
            className="flex items-center w-full text-left"
            role="menuitem" 
            aria-label="Historial de Compras"
            >
            <FaHistory className="w-5 h-5 mr-3 scale-110" />
              Historial de Compras
          </Link>
        </li>
      </ul>

    </div>

   {/*   <section className="flex justify-end items-center w-1/3">
        <button
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="p-2 rounded-full hover:bg-gray-100 md:hidden"
          aria-label={menuIsOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {menuIsOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </section>
    
      {/*Menu desplegable
      <div 
      className={`absolute top-[65px] right-0 w-48 bg-white border border-t-0 shadow-lg transition-transform transform 
      ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-30`}>
        <ul role="menu" className="py-2">
          <li role="none" className="px-4 py-2 hover:bg-gray-100">
            <Link
            to="/CartPage"
            onClick={handleMenu}
            className="flex items-center w-full text-left"
            role="menuitem"
            aria-label={`Carrito de Compras, ${cart.length} artículos`}
            >
              <FaBagShopping className="w-5 h-5 mr-3" />
                Carrito de Compras 
                {cart.length > 0 && (
                  <span className="ml-2 bg-[#ff8e3c] text-white rounded-full text-xs px-2 py-0.5">
                    {cart.length}
                  </span>
                )}
            </Link>
          </li>
          
          <li role="none" className="px-4 py-2 hover:bg-gray-100">
            <Link
            to="/orders"
            onClick={handleMenu}
            className="flex items-center w-full text-left"
            role="menuitem" 
            aria-label="Historial de Compras"
            >
            <FaHistory className="w-5 h-5 mr-3" />
            Historial de Compras
            </Link>
          </li>
        </ul>

      </div>

    <section className="flex justify-end items-center space-x-2 w-1/3 hidden md:flex">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Link to="/CartPage" aria-label="Ver carrito de compras">
            <FaBagShopping className="w-6 h-6 text-black" />
            {cart.length > 0 && (
              <span className="absolute bg-[#ff8e3c] text-white rounded-full px-2 text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </button>
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Link to="/orders" aria-label="Ver historial de compras">
            <FaHistory className="w-6 h-6 text-black" />
          </Link>
        </button>
      </section> */}
      </nav>
  )
}

export default Navbar