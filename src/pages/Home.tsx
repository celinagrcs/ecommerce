import BookList from "../components/BookList"
import Carousel from "../components/Carousel"


const Home: React.FC = () => {

  return (
    <>
      <main className="bg-[#f2f7f5] min-h-screen p-6">
        <Carousel />
        <BookList />
      </main>
    </>
  )
}

export default Home