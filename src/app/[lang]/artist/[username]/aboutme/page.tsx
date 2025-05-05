import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '@/lib/database.types'
import Link from 'next/link';

type Props = {
  params: {
    lang: 'ru' | 'en';
    username: string;
  };
};

export default async function AboutArtistPage({ params }: Props) {
  const { lang, username } = params;

  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: artist, error } = await supabase
    .from('artists')
    .select('*')
    .eq('artist_username', username)
    .maybeSingle();

  if (error) {
    console.error('Ошибка при загрузке артиста:', error);
    return <div>Ошибка загрузки</div>;
  }

  if (!artist) {
    return <div className="text-red-500">Художник не найден</div>;
  }

  const t = {
    ru: {
      about: 'О художнике',
      city: 'Город',
      instagram: 'Инстаграм',
      telegram: 'Телеграм',
      studio: 'Студия',
      tours: 'Ближайшие туры',
      search: 'Поиск',
      portfolio: 'Портфолио',
      book: 'Записаться на сеанс',
      healing: 'Инструкции по уходу',
    },
    en: {
      about: 'About the Artist',
      city: 'City',
      instagram: 'Instagram',
      telegram: 'Telegram',
      studio: 'Studio',
      tours: 'Upcoming Tours',
      search: 'Search',
      portfolio: 'Portfolio',
      book: 'Book a Session',
      healing: 'Healing Guide',
    },
  }[lang];

  return (
    <>
      <header className="w-full px-6 py-4 flex justify-between items-center shadow bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight">Inkq</h1>
        <nav className="flex gap-4 text-sm font-medium">
          {[ 
            { href: `/${lang}/search`, label: t.search },
            { href: `/${lang}/artist/${username}/aboutme`, label: t.about },
            { href: `/${lang}/artist/${username}/portfolio`, label: t.portfolio },
            { href: `/${lang}/artist/${username}/bookme`, label: t.book },
            { href: `/${lang}/artist/${username}/healing-guide`, label: t.healing },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="px-3 py-1 rounded-md hover:bg-gray-100 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="p-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6 text-base leading-relaxed tracking-normal">
          <div className="w-full h-48 bg-gray-100 border rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
            Banner placeholder
          </div>

          <h1 className="text-3xl font-bold tracking-tight">{artist.display_name}</h1>

          {artist.bio && (
            <section>
              <h2 className="text-xl font-semibold mb-1">{t.about}</h2>
              <p>{artist.bio}</p>
            </section>
          )}

          <div className="space-y-1">
            {artist.city && (
              <p>
                <strong>{t.city}:</strong> {artist.city}
              </p>
            )}
            {artist.instagram && (
              <p>
                <strong>{t.instagram}:</strong>{' '}
                <a
                  href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  @{artist.instagram.replace('@', '')}
                </a>
              </p>
            )}
            {artist.telegram_username && (
              <p>
                <strong>{t.telegram}:</strong>{' '}
                <a
                  href={`https://t.me/${artist.telegram_username.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  @{artist.telegram_username.replace('@', '')}
                </a>
              </p>
            )}
            <p>
              <strong>{t.studio}:</strong> {/* позже */}
            </p>
            <p>
              <strong>{t.tours}:</strong> {/* позже */}
            </p>
          </div>
        </div>

        <aside className="w-full md:w-64 flex flex-col gap-4">
          <Link
            href={`/${lang}/artist/${username}/portfolio`}
            className="block text-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            {t.portfolio}
          </Link>

          <Link
            href={`/${lang}/artist/${username}/bookme`}
            className="block text-center px-4 py-3 rounded-md bg-black text-white font-semibold hover:opacity-90 transition"
          >
            {t.book}
          </Link>
        </aside>
      </div>
    </>
  );
}
