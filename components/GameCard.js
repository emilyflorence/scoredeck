import Link from "next/link";

export default function GameCard({ event }) {
  return (
    <Link href={`/game/${event.idEvent}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 border border-slate-100 cursor-pointer">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
          {event.strLeague}
        </p>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          {event.strEvent}
        </h3>
        <div className="flex justify-between text-sm text-slate-500">
          <span>{event.dateEvent}</span>
          <span>{event.strTime?.slice(0, 5)}</span>
        </div>
      </div>
    </Link>
  );
}
