CREATE TABLE public.digital_check_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  website TEXT,
  topics TEXT[] NOT NULL DEFAULT '{}',
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'digital-check',
  user_agent TEXT,
  ip_hash TEXT,
  notified_at TIMESTAMPTZ
);

GRANT ALL ON public.digital_check_submissions TO service_role;

ALTER TABLE public.digital_check_submissions ENABLE ROW LEVEL SECURITY;

-- No policies for anon/authenticated: writes go through a server function
-- using service_role, which bypasses RLS. Nobody else can read/write.
