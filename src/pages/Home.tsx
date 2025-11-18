
import BookList from "../components/BookList"
import MainBooks from "../components/MainBooks"

interface HomeProps {
  search: string;
}

const Home: React.FC<HomeProps> = ({ search }) => {
  return (
    <>
      <main className="bg-[#f8f8f8] min-h-screen p-6">
        {search === "" && <MainBooks />}
        <BookList search={search}/>
      </main>
    </>
  )
}

export default Home