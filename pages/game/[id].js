import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getEventDetail } from "../../lib/api";

const AFFILIATE_LINKS = [
  { name: "ESPN+", slug: "espnplus", color: "bg-red-600" },
  { name: "Fubo", slug: "fubo", color: "bg-indigo-600" },
  { name: "Peacock", slug: "peacock", color: "bg-slate-800" },
];

export default function GamePage() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) getEventDetail(id).then(setEvent);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <p className="text-center py-20 text-slate-500">Loading game details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-emerald-600 font-semibold uppercase text-sm mb-1">
          {event.strLeague}
        </p>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          {event.strEvent}
        </h1>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <p className="text-slate-600 mb-1">
            <strong>Date:</strong> {event.dateEvent}
          </p>
          <p className="text-slate-600 mb-1">
            <strong>Time:</strong> {event.strTime}
          </p>
          {event.strVenue && (
            <p className="text-slate-600">
              <strong>Venue:</strong> {event.strVenue}
            </p>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-3 text-slate-800">
          Where to Watch
        </h2>
        <div className="flex flex-wrap gap-3">
          {AFFILIATE_LINKS.map((link) => (
            <a
              key={link.slug}
              href={`https://your-affiliate-backend.com/r/${link.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white px-5 py-3 rounded-lg font-medium hover:opacity-90 transition`}
            >
              Watch on {link.name}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4">
          Links go to official licensed streaming providers. ScoreDeck may earn a commission.
        </p>
      </main>
    </div>
  );
}
