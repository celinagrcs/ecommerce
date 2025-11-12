import books from "../utils/books.json"
import { Link, useNavigate } from "react-router-dom";

const MainBooks: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/book/${id}`);
  }

  const featuredBooks = books.filter((book) => book.featured);

  return (
    <section className="container px-4">
      <h2 className="font-extrabold text-2xl md:text-4xl py-10 text-center font-title text-[#2a2a2a]">
        Destacados
      </h2>
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6">
        {featuredBooks.map((book) => (
          <article key={book.id} onClick={() => {handleClick(book.id)}} className="min-w-[300px] bg-white p-4 border border-dashed border-[#eea36d] rounded-lg shadow-lg hover:shadow-[#d1baab] transition-shadow duration-600 flex-shrink-0 cursor-pointer">
            <div className="flex justify-center items-center mb-4">  
              <img 
              src={book.image} alt={book.title} 
              className="object-contain h-48 w-48"
              />
            </div>
            <h3 className="text-base font-bold mb-2 hover:text-[#eea36d] duration-300">
              <Link to={`/book/${book.id}`} onClick={(e) => e.stopPropagation()}>{book.title}</Link>
            </h3>
            <p className="text-gray-700">Autor: {book.author}</p>
            <p className="text-gray-900 font-bold">Precio: {book.price}</p>
          </article>
        ))}
      </section>
    </section>
  )
}

export default MainBooks;