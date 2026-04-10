

// "use client";

// import { useState, useEffect } from "react";
// import { Search, Bell, User, Menu, X } from "lucide-react";

// export default function Navbar({ onSearch }) {
//   const [query, setQuery] = useState("");
//   const [dark, setDark] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.add("dark");
//   }, []);

//   const toggleTheme = () => {
//     setDark(!dark);
//     document.documentElement.classList.toggle("dark");
//   };

//   const handleSearch = () => {
//     if (query.trim()) onSearch(query);
//   };

//   return (
//     <nav className="px-4 sm:px-6 py-4 
//     bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md 
//     border-b border-gray-200 dark:border-gray-800 shadow-sm relative">

//       {/* MOBILE LOGO */}
//       <div className="lg:hidden flex justify-center mb-3">
//         <h1 className="text-xl font-bold text-blue-600 cursor-pointer 
//         hover:scale-110 hover:text-blue-500 transition duration-300">
//           MarketMind
//         </h1>
//       </div>

//       {/* MAIN ROW */}
//       <div className="flex items-center justify-between gap-3">

//         {/* DESKTOP LOGO */}
//         <h1 className="hidden lg:block text-2xl font-bold text-blue-600 cursor-pointer 
//         hover:scale-110 hover:text-blue-500 transition duration-300">
//           MarketMind
//         </h1>

//         {/* SEARCH (FIXED WIDTH ON SMALL) */}
//         <div className="group relative flex items-center px-4 py-2 rounded-xl 
//         flex-1 max-w-[180px] sm:max-w-[250px] lg:w-[35%]
//         bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
//         transition-all duration-300

//         hover:scale-[1.02] hover:shadow-md hover:bg-gray-300 dark:hover:bg-gray-700

//         focus-within:scale-[1.02] focus-within:shadow-md 
//         focus-within:bg-gray-300 dark:focus-within:bg-gray-700
//         ">

//           <div className="absolute inset-0 rounded-xl pointer-events-none">
//             <div className="absolute inset-0 rounded-xl border-2 border-transparent 
//             bg-[linear-gradient(120deg,transparent,rgba(59,130,246,0.6),transparent)] 
//             bg-[length:200%_200%] animate-[shine_3s_linear_infinite] opacity-0 
//             group-hover:opacity-100 focus-within:opacity-100"></div>
//           </div>

//           <Search className="w-4 h-4 text-gray-500 mr-2 z-10" />

//           <input
//             type="text"
//             placeholder="Try AAPL, TSLA, TCS..."
//             className="bg-transparent outline-none flex-1 text-gray-800 dark:text-white 
//             placeholder-gray-500 dark:placeholder-gray-400
//             focus:placeholder-gray-300 z-10 text-sm"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//           />
//         </div>

//         {/* NAV LINKS */}
//         <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
//           {["Home", "Dashboard", "Watchlist", "Markets"].map((item) => (
//             <span
//               key={item}
//               className="cursor-pointer text-gray-700 dark:text-gray-300 
//               hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-2 sm:gap-4">

//           <Bell className="w-5 h-5 cursor-pointer text-gray-600 dark:text-gray-300 
//           hover:text-blue-500 dark:hover:text-blue-400 transition" />

//           <button
//             onClick={toggleTheme}
//             className="px-2 sm:px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 
//             hover:bg-gray-300 dark:hover:bg-gray-600 
//             hover:scale-105 transition cursor-pointer text-sm"
//           >
//             {dark ? "☀️" : "🌙"}
//           </button>

//           <button className="px-2 sm:px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 
//           hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer text-sm">
//             Login
//           </button>

//           <User className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer text-gray-600 dark:text-gray-300 
//           hover:text-blue-500 dark:hover:text-blue-400 transition" />

//           <button
//             className="block lg:hidden ml-1"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full mt-2 px-4 py-4 
//         bg-white dark:bg-[#020617] border-t border-gray-200 dark:border-gray-800 
//         flex flex-col gap-4 text-sm font-medium lg:hidden">

//           {["Home", "Dashboard", "Watchlist", "Markets"].map((item) => (
//             <span
//               key={item}
//               className="cursor-pointer text-gray-700 dark:text-gray-300 
//               hover:text-blue-500 dark:hover:text-blue-400 transition"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { Search, Bell, User, Menu, X } from "lucide-react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <nav className="px-4 sm:px-6 py-4 
    bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md 
    border-b border-gray-200 dark:border-gray-800 shadow-sm relative">

      {/* 🔥 MOBILE LOGO */}
      <div className="lg:hidden flex justify-center mb-3">
        <h1 className="text-xl font-bold text-blue-600 cursor-pointer 
        hover:scale-110 hover:text-blue-500 transition duration-300">
          MarketMind
        </h1>
      </div>

      {/* 🔥 MAIN ROW */}
      <div className="flex items-center justify-between gap-2">

        {/* DESKTOP LOGO */}
        <h1 className="hidden lg:block text-2xl font-bold text-blue-600 cursor-pointer 
        hover:scale-110 hover:text-blue-500 transition duration-300">
          MarketMind
        </h1>

        {/* 🔥 SEARCH (ORIGINAL STYLE + FIXED SIZE) */}
        <div className="group relative flex items-center px-4 py-2 rounded-xl 
        flex-1 max-w-[140px] sm:max-w-[220px] lg:w-[35%]
        bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
        transition-all duration-300

        hover:scale-[1.02] hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700

        focus-within:scale-[1.02] focus-within:shadow-md 
        focus-within:bg-gray-200 dark:focus-within:bg-gray-700
        ">

          {/* 🔥 SHINE EFFECT BACK */}
          <div className="absolute inset-0 rounded-xl pointer-events-none">
            <div className="absolute inset-0 rounded-xl border-2 border-transparent 
            bg-[linear-gradient(120deg,transparent,rgba(59,130,246,0.6),transparent)] 
            bg-[length:200%_200%] animate-[shine_3s_linear_infinite] opacity-0 
            group-hover:opacity-100 focus-within:opacity-100"></div>
          </div>

          <Search className="w-4 h-4 text-gray-500 mr-2 z-10" />

          <input
            type="text"
            placeholder="Try AAPL, TSLA, TCS..."
            className="bg-transparent outline-none flex-1 text-gray-800 dark:text-white 
            placeholder-gray-500 dark:placeholder-gray-400
            focus:placeholder-gray-300 z-10 text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* 🔥 NAV LINKS (SAME LINE DESKTOP) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {["Home", "Dashboard", "Watchlist", "Markets"].map((item) => (
            <span
              key={item}
              className="cursor-pointer text-gray-700 dark:text-gray-300 
              hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 🔥 RIGHT */}
        <div className="flex items-center gap-2 sm:gap-4">

          <Bell className="w-5 h-5 cursor-pointer text-gray-600 dark:text-gray-300 
          hover:text-blue-500 dark:hover:text-blue-400 transition" />

          <button
            onClick={toggleTheme}
            className="px-2 sm:px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 
            hover:bg-gray-300 dark:hover:bg-gray-600 
            hover:scale-105 transition cursor-pointer text-sm"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* hide on small */}
          <button className="hidden sm:block px-2 sm:px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 
          hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer text-sm">
            Login
          </button>

          <User className="hidden sm:block w-5 sm:w-6 h-5 sm:h-6 cursor-pointer text-gray-600 dark:text-gray-300 
          hover:text-blue-500 dark:hover:text-blue-400 transition" />

          {/* hamburger */}
          <button
            className="block lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 px-4 py-4 
        bg-white dark:bg-[#020617] border-t border-gray-200 dark:border-gray-800 
        flex flex-col gap-4 text-sm font-medium lg:hidden">

          {["Home", "Dashboard", "Watchlist", "Markets"].map((item) => (
            <span
              key={item}
              className="cursor-pointer text-gray-700 dark:text-gray-300 
              hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {item}
            </span>
          ))}

          <button>Login</button>
          <button>Profile</button>
        </div>
      )}
    </nav>
  );
}