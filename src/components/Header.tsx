
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";


  return (
    <header className={`${isHome ? '' : 'bg-[#fde8f0]'}`}>
      <Navbar />
      {isHome && (
        <section 
        className='w-full h-[80vh] bg-cover bg-center bg-fixed'
        style={{ backgroundImage: 'url("/assets/headers.jpg")' }}>
        </section>
      )}
    </header>
  )
}

export default Header;