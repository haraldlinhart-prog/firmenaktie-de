import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') || ''
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1')
  const limit = 50
  const offset = (page - 1) * limit

  let query = supabase.from('fa_registry').select('company_name, formed_at', { count: 'exact' })
  if (q.length === 1) query = query.ilike('company_name', `${q}%`)
  else if (q.length > 1) query = query.ilike('company_name', `%${q}%`)
  query = query.order('company_name').range(offset, offset + limit - 1)

  const { data, count } = await query
  return NextResponse.json({ data: data || [], count: count || 0 })
}
