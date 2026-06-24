import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

// Aktienpreis berechnen
export function calcSharePrice(capitalUsd: number): number {
  if (capitalUsd <= 100_000) return 99
  if (capitalUsd <= 1_000_000) {
    const extra = Math.ceil((capitalUsd - 100_000) / 100_000)
    return 99 + extra * 29
  }
  // >= 1 Mio: EUR 329 + auf Anfrage (329 als Basis, Rest Anfrage)
  return 329
}
