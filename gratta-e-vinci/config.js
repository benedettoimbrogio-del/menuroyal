/* =============================================================================
   GRATTA E VINCI ROYAL — Configurazione
   Modifica questo file per personalizzare locale, colori, premi e probabilità.
   NB: il premio lo decide il SERVER (urna a scorte annuali, tabella public.prizes).
   (Testo storico) I pesi sono relativi: la probabilità di un premio è peso / somma dei pesi.
   Con i valori predefiniti: premi piccoli = 75%, jackpot = 25%.
   Per abilitare "Ritenta" (nessun premio), alza il suo peso sopra 0
   (ricorda che così i percentuali degli altri premi scendono in proporzione).
   ============================================================================= */

window.CONFIG = {
  localeName: "Royal Randazzo",
  tagline: "Ristorante · Pizzeria · Randazzo",
  title: "Gratta e Vinci",
  subtitle: "Un biglietto con ogni pizza",
  logoUrl: "assets/logo_royal.png",
  codePrefix: "RYL",

  /* Backend monouso (Supabase, progetto "gratta e vinci").
     La chiave anon è PUBBLICA per natura: le tabelle sono chiuse (RLS senza policy)
     e la pagina può solo chiamare le RPC check_code / claim_code. */
  supabaseUrl: "https://ykggczyzvmlpuecffqlb.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrZ2djenl6dm1scHVlY2ZmcWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1NTczNTEsImV4cCI6MjExMTEzMzM1MX0.3RuIbrtCcyClLzLpAz8fjD3xJx03m93GLLp9u2Lalfk",

  colors: {
    background: "#12070a",
    backgroundAlt: "#1c0b10",
    burgundy: "#6b1220",
    burgundyLight: "#8e1c2e",
    gold: "#d4af37",
    goldSoft: "#f0d78c",
    cream: "#f6e7c8",
    creamDim: "#cbb98a",
    card: "#18090d"
  },

  /* Soglia di raschiatura (0–1): oltre questo valore il resto si scopre da solo.
     Consigliato: 0.50–0.60 */
  scratchThreshold: 0.55,

  validityText: "Valido sul prossimo ordine entro 30 giorni.",
  redeemText: "Mostra questa schermata alla cassa, oppure fai uno screenshot.",

  /* Testo per iPhone / PlayStation (al posto di validityText). */
  jackpotText: "Per il ritiro del premio rivolgiti al locale mostrando questa schermata.",

  /* SOLO etichette, descrizioni e icone di riserva. NESSUN peso: il premio lo decide
     il SERVER (tabella public.prizes, estrazione a urna sulle scorte annuali). */
  prizes: [
    { id: "iphone",      label: "iPhone 18",        description: "Hai vinto un iPhone 18!",                isJackpot: true },
    { id: "playstation", label: "PlayStation",      description: "Hai vinto una PlayStation!",             isJackpot: true },
    { id: "pizza",       label: "Pizza gratis",     description: "Una pizza omaggio a scelta dal menù.",   isJackpot: false },
    { id: "buono10",     label: "Buono da 10 €",    description: "Un buono da 10 € sul prossimo ordine.",  isJackpot: false },
    { id: "bibita",      label: "Bibita omaggio",   description: "Una bibita omaggio sul prossimo ordine.", isJackpot: false },
    { id: "patatine",    label: "Patatine omaggio", description: "Patatine omaggio sul prossimo ordine.",  isJackpot: false },
    { id: "ritenta",     label: "Ritenta",          description: "Non hai vinto questa volta. Ritenta con la prossima pizza!", isJackpot: false, isLosing: true }
  ]
};
