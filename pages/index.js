import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import { getEventsByDay, SPORTS } from "../lib/api";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [sport, setSport] = useState("Soccer");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getEventsByDay(date, sport).then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, [date, sport]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <header className="bg-slate-900 text-white py-10 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Every Game. One Schedule.
        </h1>
        <p className="text-slate-300">
          Find today's matchups and where to watch them legally.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          >
            {SPORTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className="text-slate-500">Loading schedule...</p>
        ) : events.length === 0 ? (
          <p className="text-slate-500">No games found for this date/sport.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((ev) => (
              <GameCard key={ev.idEvent} event={ev} />
            ))}
          </div>
        )}
      </main>

      <footer className="text-center text-slate-400 text-xs py-8">
        Schedule data via TheSportsDB. ScoreDeck does not host or stream any video content.
      </footer>
    </div>
  );
}
