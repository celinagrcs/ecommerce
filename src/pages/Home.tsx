import BookList from "../components/BookList"
import Footer from "../components/Footer"
import MainBooks from "../components/MainBooks"


const Home: React.FC = () => {

  return (
    <>
      <main className="bg-[#F8F8F8] min-h-screen p-6">
        <MainBooks />
        <BookList />
      </main>
      <Footer />
    </>
  )
}

export default Home