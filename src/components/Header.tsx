
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import SearchBar from './SearchBar';

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";


  return (
    <header className={`${isHome ? '' : 'bg-[#fde8f0]'}`}>
      <Navbar />
      {isHome && (
        <>
          <section
            className='w-full h-[80vh] bg-cover bg-center bg-fixed flex justify-center flex-col'
            style={{ backgroundImage: 'url("/assets/headers.webp")' }}>
          <SearchBar value={search} onChange={setSearch} />
          </section>
        </>
      )}
    </header>
  )
}

export default Header;