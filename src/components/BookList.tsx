//import { useCart } from '../context/CartContext' 
import books from '../utils/books.json'
import { Link } from 'react-router-dom';
import { CartItem } from '../types/cart';


const BookList: React.FC = () => {
 /* const { addToCart } = useCart(); */


/*  const handleAddToCart = (book: CartItem) => {
    addToCart(book)
  } */

  return (
    <>
    <section>
      <section className="container mx-auto p-10">
        <h2 className="font-extrabold text-2xl md:text-4xl py-7 font-title text-center text-[#2a2a2a] mt-5 mb-6">Libros Disponibles </h2>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book: CartItem) => (
          <div key={book.id}  className="bg-white p-4 border border-[#ABD1C6] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500">
            <div className="flex justify-center items-center mb-4">
              <img src={book.image} alt={book.title} className="object-contain h-48 w-48" />
            </div>
            <h3 className="text-base font-bold mb-2 hover:text-gray-800">
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </h3>
            <p className="text-gray-700">Autor: {book.author}</p>
            <p className="text-gray-900 font-bold">Precio: {book.price}</p>
          
          </div>
        ))}
    </section>

      </section>  
    </>
  )
}

export default BookList

/*   <button 
            className="w-full bg-[#527853] text-[#ffff] font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            onClick={() => handleAddToCart(book)}>
              Agregar al carrito
            </button> */