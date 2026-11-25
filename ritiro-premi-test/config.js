/* Ritiro premi (staff) — Gratta e Vinci Royal Randazzo.
   La chiave anon è PUBBLICA per natura: le tabelle sono chiuse e ogni RPC staff
   verifica il PIN lato server (nel database c'è solo l'hash). Il PIN NON va qui. */
window.RITIRO_CONFIG = {
  supabaseUrl: "https://ykggczyzvmlpuecffqlb.supabase.co",
  /* QR del biglietto mostrato nella scheda: stesso URL dei foglietti stampati */
  gameUrl: "https://benedettoimbrogio-del.github.io/menuroyal/gratta-e-vinci/",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrZ2djenl6dm1scHVlY2ZmcWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1NTczNTEsImV4cCI6MjExMTEzMzM1MX0.3RuIbrtCcyClLzLpAz8fjD3xJx03m93GLLp9u2Lalfk"
};
