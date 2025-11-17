import { FaBagShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaArrowLeft } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const showBackArrow = location.pathname.includes('/book/') || location.pathname === '/CartPage';


  const headerTexts: { [key: string]: string } = {
    '/CartPage': 'Carrito de Compras',
    '/': 'Libreria'
  }

  const headerText = headerTexts[location.pathname] || 'Libreria';

  return (
      <nav className="top-0 left-0 w-full z-40 p-4 flex justify-between bg-white border border-b-black">
        <div className="flex items-center">
        {showBackArrow && (
          <button
            onClick={() => navigate(-1)}
            className="text-black mr-4"
            aria-label="Volver atrás"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
        )}
        </div>
        <section>
          <h1 className='text-[#000] font-title text-[2rem]'>
            {headerText}
          </h1>
        </section>
        <button>
          <Link to="/CartPage">
            <FaBagShopping className="w-6 h-6 text-black" />
            {cart.length > 0 && (
              <span className="absolute bg-[#ff8e3c] text-white rounded-full px-2 text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </button>
      </nav>
  )
}

export default Navbar