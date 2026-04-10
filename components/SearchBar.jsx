// "use client";
// import { useState } from "react";   
// export default function SearchBar() {
//    const[query, setQuery] = useState("");
//    const[data, setData] = useState(null);
//    const handleSearch = async () => {
//     const res = await fetch(`http://localhost:5000/api/stocks/${query}`);
//     const result = await res.json();
//     setData(result);
//    };
//    return(
//     <div className="mt-5">
//       <input
//         type="text"
//         placeholder="Search stock (e.g. TCS)"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="border p-2 mr-2"
//       />
//        <button
//         onClick={handleSearch}
//         className="bg-blue-500 text-white px-4 py-2"
//       >
//         Search
//       </button>
//        {data && data["Global Quote"] && data["Global Quote"]["05. price"] ? (
//   <div className="mt-4">
//     <p>Price: {data["Global Quote"]["05. price"]}</p>
//   </div>
// ) : (
//   <p className="mt-4 text-red-500">No data found / API limit hit</p>
// )}
//     </div>
//    )
// }
"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/stocks/${query}`);
      const data = await res.json();

      console.log(data);

      setPrice(data.price); // 👈 backend se jo aa raha
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Search stock (e.g. AAPL)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Search
      </button>

      <p className="mt-3">Price: {price}</p>
    </div>
  );
}
