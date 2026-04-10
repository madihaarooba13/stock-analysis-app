import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <h1 className="text-2xl">Welcome to MarketMind</h1>
         <SearchBar />
      </div>
    </div>
  );
}
