-- Firmenaktie.de Supabase Schema
-- Nutzt dieselbe Supabase-Instanz wie einfach-llc.de (einfach-llc Tabellen bleiben unberührt)

-- Nutzerkonten (Magic Link Auth via Supabase Auth)
-- fa_ Prefix um Kollisionen zu vermeiden

-- Series LLC Gründungen
CREATE TABLE IF NOT EXISTS fa_companies (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         uuid REFERENCES auth.users(id),
  company_name    text NOT NULL UNIQUE,
  formed_at       timestamptz DEFAULT now(),
  status          text DEFAULT 'pending', -- pending | active | cancelled
  stripe_session  text,
  paid_at         timestamptz,
  renewal_due     timestamptz,
  -- Zielgesellschaft (GmbH/UG deren Anteile erworben werden sollen)
  target_company  text,   -- Name der deutschen GmbH/UG
  target_share    numeric, -- Anteil in % der erworben wird
  created_at      timestamptz DEFAULT now()
);

-- Aktienausgaben
CREATE TABLE IF NOT EXISTS fa_shares (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id      uuid REFERENCES fa_companies(id),
  user_id         uuid REFERENCES auth.users(id),
  share_type      text NOT NULL, -- 'bearer' (Inhaberaktien) | 'registered' (Namensaktien)
  capital_usd     numeric NOT NULL,  -- Aktienkapital in USD
  price_eur       numeric NOT NULL,  -- berechneter Preis
  stripe_session  text,
  paid_at         timestamptz,
  status          text DEFAULT 'pending', -- pending | issued | cancelled
  issued_at       timestamptz,
  created_at      timestamptz DEFAULT now()
);

-- Öffentliches Register (wie einfach-llc.de, gleiche Struktur)
CREATE TABLE IF NOT EXISTS fa_registry (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name    text NOT NULL UNIQUE,
  formed_at       timestamptz DEFAULT now()
);

-- RLS
ALTER TABLE fa_companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE fa_shares    ENABLE ROW LEVEL SECURITY;
ALTER TABLE fa_registry  ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_all" ON fa_companies FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON fa_shares    FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON fa_registry  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "public_read_registry" ON fa_registry FOR SELECT TO anon USING (true);
