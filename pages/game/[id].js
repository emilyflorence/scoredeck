import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { getEventDetail } from '../../lib/api';
import { useEffect, useState } from 'react';

const AFFILIATE_BASE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_BASE_URL || 'https://your-affiliate-backend.com';

const AFFILIATE_LINKS = [
  { slug: 'espn-plus', label: 'Watch on ESPN+' },
  { slug: 'fubo', label: 'Watch on Fubo' },
  { slug: 'peacock', label: 'Watch on Peacock' },
];

export default function GameDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getEventDetail(id)
      .then(setEvent)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="text-blue-600 hover:underline text-sm">
          &larr; Back to schedule
        </Link>

        {loading && <p className="mt-6 text-gray-500">Loading game details...</p>}

        {!loading && event && (
          <div className="mt-6 bg-white rounded-xl shadow p-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {event.strHomeTeam} vs {event.strAwayTeam}
            </h1>
            <p className="text-gray-500 mt-1">
              {event.dateEvent} &middot; {event.strTime || 'TBD'}
            </p>
            <p className="text-gray-500 mt-1">{event.strLeague}</p>
            {event.strVenue && (
              <p className="text-gray-500 mt-1">Venue: {event.strVenue}</p>
            )}

            <div className="mt-6 border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Premium Access &mdash; Watch Live
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                ScoreDeck doesn't stream games directly. These links go to official,
                licensed streaming providers.
              </p>
              <div className="flex flex-col gap-3">
                {AFFILIATE_LINKS.map((link) => (
                  <a
                    key={link.slug}
                    href={`${AFFILIATE_BASE_URL}/r/${link.slug}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {!loading && !event && (
          <p className="mt-6 text-gray-500">Game not found.</p>
        )}
      </main>
    </div>
  );
}
