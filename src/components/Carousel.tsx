// import { useRef } from "react";
import { useCart } from "../context/CartContext";
import books from "../utils/books.json"
import { CartItem } from "../types/cart";
import { Link } from "react-router-dom";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";

const Carousel: React.FC = () => {
  const { addToCart } = useCart();
  // const carouselRef = useRef<HTMLDivElement>(null);

  const featuredBooks = books.filter((book) => book.featured);


  const handleAddToCart = (book: CartItem) => {
    addToCart(book);
  }

  return (
    <section className="container">
      <h2 className="font-extrabold text-2xl md:text-4xl py-5 text-center font-title text-[#2a2a2a] mb-6">
        Destacados
      </h2>
      <section 
          className="flex gap-6 p-4">
        {featuredBooks.map((book) => (
          <article key={book.id}  className="min-w-[300px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
            <div className="flex justify-center items-center mb-4">  
              <img 
              src={book.image} alt={book.title} 
              className="object-contain h-48 w-48"
              />
            </div>
            <h3 className="text-base font-bold mb-2 hover:text-gray-800">
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </h3>
            <p className="text-gray-700">Autor: {book.author}</p>
            <p className="text-gray-900 font-bold">Precio: {book.price}</p>
            <button
            className="w-full bg-[#527853] text-[#ffff] font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            onClick={() => handleAddToCart(book)}
            >
              Agregar al carrito
            </button>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Carousel;