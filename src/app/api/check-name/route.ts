import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name')?.trim()
  if (!name) return NextResponse.json({ available: false })
  const { data } = await supabase
    .from('fa_registry')
    .select('id')
    .ilike('company_name', name)
    .maybeSingle()
  return NextResponse.json({ available: !data })
}
