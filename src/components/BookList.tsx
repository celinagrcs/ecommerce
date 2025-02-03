//import { useCart } from '../context/CartContext' 
import books from '../utils/books.json'
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types/cart';


const BookList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/book/${id}`);
  }

  return (
    <>
    <section>
      <section className="container mx-auto p-10">
        <h2 className="font-extrabold text-2xl md:text-4xl py-7 font-title text-center text-[#2a2a2a] mt-5 mb-6">Libros Disponibles </h2>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book: Omit<CartItem, 'quantity'>) => (
          <article key={book.id} onClick={() => {handleClick(book.id)}} className="bg-white p-4 border border-[#ABD1C6] rounded-lg shadow-lg hover:shadow-[#ABD1C6] transition-shadow duration-600 cursor-pointer">
            <div className="flex justify-center items-center mb-4">
              <img src={book.image} alt={book.title} className="object-contain h-48 w-48" />
            </div>
            <h3 className="text-base font-bold mb-2 hover:text-[#078080] duration-300">
              <Link to={`/book/${book.id}`} onClick={(e) => e.stopPropagation()}>{book.title}</Link>
            </h3>
            <p className="text-gray-700">Autor: {book.author}</p>
            <p className="text-gray-900 font-bold">Precio: {book.price}</p>
          </article>
        ))}
    </section>

      </section>  
    </>
  )
}

export default BookList

