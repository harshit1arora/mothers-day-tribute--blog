'use client';

import {useRouter} from 'next/navigation';

const WhereToNext = () => {
  const router = useRouter();
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold mb-2">Where To Next</h3>
      <ul className="list-none pl-0">
        <li className="mb-1">
          <a
            href="/"
            className="text-sm hover:underline"
            onClick={e => {
              e.preventDefault();
              router.push('/');
            }}
          >
            Stories
          </a>
        </li>
        <li className="mb-1">
          <a
            href="/"
            className="text-sm hover:underline"
            onClick={e => {
              e.preventDefault();
              router.push('/');
            }}
          >
            Health
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-sm hover:underline"
            onClick={e => {
              e.preventDefault();
              router.push('/');
            }}
          >
            Inspiration
          </a>
        </li>
                <li>
          <a
            href="/contact"
            className="text-sm hover:underline"
            onClick={e => {
              e.preventDefault();
              router.push('/contact');
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WhereToNext;

