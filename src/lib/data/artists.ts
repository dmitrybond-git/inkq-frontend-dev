'use server'

import createClient from '@/lib/supabase/server'
import type { Database } from '@/lib/supabase/database.types'

export async function getArtistByUsername(username: string): Promise<Database['public']['Tables']['artists']['Row'] | null> {
  const supabase = await createClient() // ⬅️ добавили await!

  const { data, error } = await supabase
    .from('artists')
    .select('*')
    .eq('artist_username', username)
    .single()

  if (error) {
    console.error('Ошибка при загрузке художника:', error.message)
    return null
  }

  return data
}
