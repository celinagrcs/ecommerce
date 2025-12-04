
import { Helmet } from "react-helmet-async";
import BookList from "../components/BookList"
import MainBooks from "../components/MainBooks"

interface HomeProps {
  search: string;
}

const Home: React.FC<HomeProps> = ({ search }) => {
  return (
    <>
      <Helmet>
        <title>Librería Online: Novedades y Best Sellers</title>
        <meta name="description" content="Explora nuestra gran selección de libros. ¡Ofertas especiales y envío rápido a todo el país!" />
      </Helmet>
      <main className="bg-[#f8f8f8] min-h-screen p-6">
        {search === "" && <MainBooks />}
        <BookList search={search}/>
      </main>
    </>
  )
}

export default Home