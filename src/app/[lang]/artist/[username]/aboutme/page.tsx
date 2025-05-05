import { getArtistByUsername } from '@/lib/data/artists'

type Props = {
  params: {
    lang: 'ru' | 'en'
    username: string
  }
}

export default async function AboutArtistPage({ params }: Props) {
  const { lang, username } = params
  const artist = await getArtistByUsername(username)

  if (!artist) {
    return <div className="text-red-500">Artist not found</div>
  }

  const labels = {
    ru: {
      about: 'О художнике',
      city: 'Город',
      instagram: 'Инстаграм',
    },
    en: {
      about: 'About the Artist',
      city: 'City',
      instagram: 'Instagram',
    },
  }

  const t = labels[lang] ?? labels.en

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{artist.display_name}</h1>

      {artist.bio && (
        <div>
          <h2 className="text-xl font-semibold">{t.about}</h2>
          <p className="text-gray-700">{artist.bio}</p>
        </div>
      )}

      {artist.city && (
        <p>
          <strong>{t.city}:</strong> {artist.city}
        </p>
      )}

      {artist.instagram && (
        <p>
          <strong>{t.instagram}:</strong>{' '}
          <a
            className="text-blue-600 underline"
            href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{artist.instagram.replace('@', '')}
          </a>
        </p>
      )}
    </div>
  )
}
