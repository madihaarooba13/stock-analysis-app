export default function Navbar() {
    return (
        <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">MarketMind</h1>
      <div>
        <button className="mr-4">Login</button>
        <button>Signup</button>
      </div>
    </div>
    );
}
