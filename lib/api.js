const BASE = "https://www.thesportsdb.com/api/v1/json/3";

export async function getEventsByDay(date, sport = "Soccer") {
  const res = await fetch(`${BASE}/eventsday.php?d=${date}&s=${sport}`);
  const data = await res.json();
  return data.events || [];
}

export async function getEventDetail(eventId) {
  const res = await fetch(`${BASE}/lookupevent.php?id=${eventId}`);
  const data = await res.json();
  return data.events ? data.events[0] : null;
}

export const SPORTS = ["Soccer", "Basketball", "American Football", "Ice Hockey", "Baseball"];
