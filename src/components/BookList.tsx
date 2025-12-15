//import { useCart } from '../context/CartContext' 
import books from '../utils/books.json'
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types/cart';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

interface BookListProps {
  search: string;
}

const BOOKS_PER_PAGE = 12;

const BookList: React.FC<BookListProps> = ({ search }) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const filteredBooks = books.filter((book) => 
    book.title.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [search]);

  const indexOfLastBook = currentPage * BOOKS_PER_PAGE;
  const indexOfFirstBook = indexOfLastBook - BOOKS_PER_PAGE;

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleClick = (id: number) => {
    navigate(`/book/${id}`);
  }

  return (
    <>
    <section>
      <section className="container mx-auto p-10">
        <h2 className="font-extrabold text-2xl md:text-4xl py-7 font-title text-center text-[#2a2a2a] mt-5 mb-6">Libros Disponibles </h2>
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentBooks.map((book: Omit<CartItem, 'quantity'>) => (
          <article key={book.id} onClick={() => {handleClick(book.id)}} className="bg-white p-4 border border-[#eea36d] border-dashed rounded-lg shadow-lg hover:shadow-[#d1baab] transition-shadow duration-600 cursor-pointer">
            <div className="flex justify-center items-center mb-4">
              <img src={book.image} alt={book.title} className="object-contain h-48 w-48" loading="lazy" width="192" height="192" />
            </div>
            <h3 className="text-base font-bold mb-2 hover:text-[#ff8e3c] duration-300">
              <Link to={`/book/${book.id}`} onClick={(e) => e.stopPropagation()}>{book.title}</Link>
            </h3>
            <p className="text-gray-700">Autor: {book.author}</p>
            <p className="text-gray-900 font-bold">Precio: {book.price}</p>
          </article>
        ))}
    </section>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>  
    </>
  )
}

export default BookList

