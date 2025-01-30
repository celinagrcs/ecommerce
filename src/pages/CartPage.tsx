import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  
  return (
    <article className="max-w-3xl mx-auto p-10">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-center py-10 text-gray-500 mb-2">No hay productos en el carrito </p>
          <Link to="/" className="bg-[#ff8e3c] text-white px-4 py-2 rounded hover:bg-[#d37533]">Ir a la tienda</Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            {cart.map((book, index) => (
              <li key={index} className="flex flex-col md:flex-row items-center justify-between p-4 border-b last:border-none">
                <div className="flex items-center">
                  <img src={book.image} alt={book.title} className="w-16 h-24 object-cover rounded-md mr-4" />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                    <p className="text-gray-600">{book.author}</p>
                    <p className="text-[#4d9750] font-bold">{book.price}</p>
                    <p className="text-gray-600">Cantidad: {book.quantity}</p> 
                  </div>
                </div>
                <button 
                  className="mt-2 md:mt-0 bg-[#E16162] text-white px-2 py-1 rounded" 
                  onClick={() => removeFromCart(book.id)}
                  >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total:</span>
            {/* <span className="text-[#4d9750]">${totalPrice.toFixed(2)}</span> */}
          </div>
          <div className="flex justify-end mt-4">
            <button 
              className="bg-[#ff8e3c] hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </article>
  )
}

export default CartPage;