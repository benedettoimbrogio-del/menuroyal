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

  /* "icon" = id dell'icona (il server la manda già nel campo icon; questo è il ripiego).
     SOLO etichette, descrizioni e icone di riserva. NESSUN peso: il premio lo decide
     il SERVER (tabella public.prizes, estrazione a urna sulle scorte annuali). */
  prizes: [
    { id: "iphone",      label: "iPhone 18",        description: "Hai vinto un iPhone 18!",                isJackpot: true },
    /* 3 PlayStation 5 a rilascio scaglionato (gen/mag/set 2027): id diversi, stessa icona */
    { id: "playstation", label: "PlayStation 5", description: "Hai vinto una PlayStation 5! Mostra questa schermata al locale per il ritiro.", isJackpot: true, icon: "playstation" },
    { id: "ps5_mag",     label: "PlayStation 5", description: "Hai vinto una PlayStation 5! Mostra questa schermata al locale per il ritiro.", isJackpot: true, icon: "playstation" },
    { id: "ps5_set",     label: "PlayStation 5", description: "Hai vinto una PlayStation 5! Mostra questa schermata al locale per il ritiro.", isJackpot: true, icon: "playstation" },
    { id: "pizza",       label: "Pizza gratis",     description: "Una pizza omaggio a scelta dal menù.",   isJackpot: false },
    { id: "buono10",     label: "Buono da 10 €",    description: "Hai vinto un buono da 10 €! Valido dal lunedì al venerdì. Mostra questa schermata al locale.", isJackpot: false },
    { id: "buono5",      label: "Buono da 5 €",     description: "Hai vinto un buono da 5 € da usare al tuo prossimo ordine! Mostra questa schermata al locale.", isJackpot: false, icon: "buono5" },
    { id: "bibita",      label: "Bibita analcolica omaggio", description: "Una bibita analcolica omaggio sul prossimo ordine.", isJackpot: false },
    { id: "patatine",    label: "Patatine omaggio", description: "Patatine omaggio sul prossimo ordine.",  isJackpot: false },
    { id: "crocchette", label: "Crocchette di patate omaggio", description: "Crocchette di patate omaggio sul prossimo ordine.", isJackpot: false, icon: "crocchette" },
    { id: "bocconcini", label: "Bocconcini di pollo omaggio", description: "Bocconcini di pollo omaggio sul prossimo ordine.", isJackpot: false, icon: "bocconcini" },
    { id: "petali", label: "Petali di patate omaggio", description: "Petali di patate omaggio sul prossimo ordine.", isJackpot: false, icon: "petali" },
    { id: "spirale", label: "Spirali di patate omaggio", description: "Spirali di patate omaggio sul prossimo ordine.", isJackpot: false, icon: "spirale" },
    { id: "arancinetti", label: "Arancinetti omaggio", description: "Arancinetti omaggio sul prossimo ordine.", isJackpot: false, icon: "arancinetti" },
    { id: "ritenta",     label: "Ritenta",          description: "Non hai vinto questa volta. Ritenta con la prossima pizza!", isJackpot: false, isLosing: true }
  ]
};
