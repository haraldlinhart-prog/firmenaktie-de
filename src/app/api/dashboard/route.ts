import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get('uid')
  if (!uid) return NextResponse.json({ companies: [] })
  const { data } = await supabase.from('fa_companies').select('*').eq('user_id', uid).order('created_at', { ascending: false })
  return NextResponse.json({ companies: data || [] })
}
