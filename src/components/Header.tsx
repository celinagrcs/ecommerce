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
    className="bg-cover bg-bookstore bg-center h-64 ">
      <Navbar />
      <h1 className='text-[#fff] font-extrabold text-center py-10 text-6xl'>
        {headerText}
      </h1>
    </header>
  )
}

export default Header;