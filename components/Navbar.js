export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-emerald-400">Score</span>
        <span className="text-2xl font-bold">Deck</span>
      </div>
      <div className="hidden md:flex gap-6 text-sm text-slate-300">
        <a href="/" className="hover:text-emerald-400">Schedule</a>
        <a href="/favorites" className="hover:text-emerald-400">Favorites</a>
        <a href="/about" className="hover:text-emerald-400">About</a>
      </div>
    </nav>
  );
}
