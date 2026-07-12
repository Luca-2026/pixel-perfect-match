CREATE POLICY "Deny all direct access to submissions"
  ON public.digital_check_submissions
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);
