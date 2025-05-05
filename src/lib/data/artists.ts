import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '@/lib/database.types'

export async function getArtistByUsername(
  username: string
): Promise<Database['public']['Tables']['artists']['Row'] | null> {
    const supabase = createServerComponentClient<Database>({ cookies })

  const result = await supabase
    .from('artists')
    .select('*')
    .eq('artist_username', username)
    .maybeSingle()

  if (result.error || !result.data) {
    console.error('Ошибка при загрузке художника:', result.error?.message)
    return null
  }

  return result.data
}
