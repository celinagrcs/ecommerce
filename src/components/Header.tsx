import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'

const Header: React.FC = () => {
  const location = useLocation();

  const headerTexts: { [key: string]: string } = {
    '/CartPage': 'Carrito de Compras',
    '/': 'Libreria'
  }

  const headerText = headerTexts[location.pathname] || 'Libreria';

  return (
    <header
    className="bg-cover bg-[#078080] spikes bg-center  ">
      <Navbar />
      <h1 className='text-[#fff] font-title font-extrabold text-center py-14 text-6xl'>
        {headerText}
      </h1>
    </header>
  )
}

export default Header;