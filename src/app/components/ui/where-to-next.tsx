'use client';

import {useRouter} from 'next/navigation';

const destinations = [
  {
    label: 'Stories',
    href: '/',
  },
  {
    label: 'Health',
    href: '/',
  },
  {
    label: 'Inspiration',
    href: '/',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];

const WhereToNext = () => {
  const router = useRouter();
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold mb-2">Where To Next</h3>
      <ul className="list-none pl-0">
        {destinations.map(destination => (
          <li className="mb-1" key={destination.label}>
            <a
              href={destination.href}
              className="text-sm hover:underline"
              onClick={e => {
                e.preventDefault();
                router.push(destination.href);
              }}
            >
              {destination.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhereToNext;
