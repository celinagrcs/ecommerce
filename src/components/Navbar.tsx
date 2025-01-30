import { FaBagShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaArrowLeft } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const showBackArrow = location.pathname.includes('/book/') || location.pathname === '/CartPage';

  return (
      <nav className="top-0 left-0 w-full z-40 p-4 flex justify-between ">
        <div className="flex items-center">
        {showBackArrow && (
          <button
            onClick={() => navigate(-1)}
            className="text-white mr-4"
            aria-label="Volver atrás"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
        )}
        </div>
        <button>
          <Link to="/CartPage">
            <FaBagShopping className="w-5 h-5 text-white" />
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