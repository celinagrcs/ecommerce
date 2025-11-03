import BookList from "../components/BookList"
import MainBooks from "../components/MainBooks"


const Home: React.FC = () => {

  return (
    <>
      <main className="bg-[#f8f8f8] min-h-screen p-6">
        <MainBooks />
        <BookList />
      </main>
    </>
  )
}

export default Home