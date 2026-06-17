DROP POLICY IF EXISTS "Public update page contents" ON public.page_contents;
DROP POLICY IF EXISTS "Authenticated insert page contents" ON public.page_contents;
DROP POLICY IF EXISTS "Authenticated delete page contents" ON public.page_contents;

CREATE POLICY "Admins insert page contents" ON public.page_contents
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update page contents" ON public.page_contents
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete page contents" ON public.page_contents
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));