import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import books from "../utils/books.json"
import { useState } from "react";
import { CartItem } from "../types/cart";

const BookPage: React.FC = () => {
const { id } = useParams<{id: string}>();
const book = books.find((book) => book.id === parseInt(id || "", 10)) as CartItem | undefined;
const [quantity, setQuantity] = useState<number>(1);
const { addToCart } = useCart();

if (!book) {
  return <p>Libro no encontrado</p>;
};

const handleAddToCart = () => {
  for (let i = 0; i < quantity; i++) {
    addToCart(book);
  }
};

const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setQuantity(parseInt(event.target.value, 10));
};

  return(
    <section className="flex flex-col md:flex-row items-center justify-center mt-10 p-6">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <img
          src={book.image}
          alt={book.title}
          className="w-72 h-auto object-cover rounded-lg"
        />
      </div>
      <div className="p-4 w-full max-w-md bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-700 mb-2">Autor: {book.author}</p>
        <p className="text-gray-900 font-bold mb-2">Precio: {book.price}</p>
        <div className="flex items-center gap-2">
          {/* <div className="flex items-center mb-4"> */}
            <label className="mr-2" htmlFor="quantity">
              Cantidad:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded-md p-2"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
              <button
              className="bg-[#527853] text-white py-2 px-4 rounded"
              onClick={handleAddToCart}
              >
              Agregar al carrito
            </button>
        </div>
        <div>
          <p className="text-gray-900 font-bold mb-2">Sinopsis: </p>
          <p className=""> {book.description}</p>
        </div>

      </div>
    </section>
  )
}

export default BookPage;