import { useEffect, useState } from 'react';

const cities = [
  { name: 'New York', tz: 'America/New_York' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Istanbul', tz: 'Europe/Istanbul' },
  { name: 'New Delhi', tz: 'Asia/Kolkata' },
  { name: 'Singapore', tz: 'Asia/Singapore' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', tz: 'Australia/Sydney' },
];

function getTimeInZone(tz) {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: tz,
  });
}

export default function WorldClockBar() {
  const [times, setTimes] = useState(() => cities.map(city => getTimeInZone(city.tz)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes(cities.map(city => getTimeInZone(city.tz)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-cream border-b border-olive py-2 px-4 flex justify-center gap-12 text-sm font-sans text-forest" style={{ letterSpacing: '0.03em' }}>
      {cities.map((city, i) => (
        <div key={city.name} className="flex flex-col items-center">
          <span className="font-semibold">{city.name}</span>
          <span className="tabular-nums tracking-wide" style={{ fontVariantNumeric: 'tabular-nums' }}>{times[i]}</span>
        </div>
      ))}
    </div>
  );
} 