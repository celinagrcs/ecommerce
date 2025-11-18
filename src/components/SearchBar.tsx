import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import books from "../utils/books.json";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onEnter }) => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  const filtered = books.filter((book) => 
    book.title.toLowerCase().includes(value.toLowerCase())
  ).slice(0, 6);
  
  return (
    <div className="w-full flex justify-center mt-4 px-4">
      <div className="relative w-full max-w-xl">
        <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={(e) => {
          if(e.key === "Enter" && onEnter) onEnter();
        }}
        placeholder="Buscar libros..."
        aria-label="Buscar libros"
        className="
          w-full
          max-w-xl
          pr-12
          p-4
          sm:p-4
          border border-gray-300 
          rounded-full
          shadow-sm
          text-sm sm:text-base
          focus:outline-none
          focus:ring-2
          focus:ring-[#ff8e3c]
          transition
          "
        />
      </div>

      {value && showSuggestions && filtered.length > 0 && (
        <ul className="absolute bottom-24 w-full max-w-xl bg-white border rounded-lg shadow-lg z-50">
          {filtered.map((book) => (
            <li 
            key={book.id}
            onClick={() => {
              onChange(book.title);
              setShowSuggestions(false);
            }}
            className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              {book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar;