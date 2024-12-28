import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Navbar: React.FC = () => {
  const { cart } = useCart();

  return (
      <nav className="top-0 left-0 w-full z-40 p-4 flex justify-between ">
        <Link to='/'>
          <h1 className="font-bold text-white">

          </h1>
        </Link>
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