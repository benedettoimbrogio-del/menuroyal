/* =============================================================================
   GRATTA E VINCI ROYAL — Configurazione
   Modifica questo file per personalizzare locale, colori, premi e probabilità.
   I pesi sono relativi: la probabilità di un premio è peso / somma dei pesi.
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

  prizes: [
    {
      id: "sconto",
      label: "Sconto 10%",
      description: "Sconto del 10% sul prossimo ordine.",
      weight: 12,
      isJackpot: false
    },
    {
      id: "bibita",
      label: "Bibita omaggio",
      description: "Una bibita omaggio sul prossimo ordine.",
      weight: 11,
      isJackpot: false
    },
    {
      id: "arancinetti",
      label: "Arancinetti omaggio",
      description: "Arancinetti omaggio sul prossimo ordine.",
      weight: 11,
      isJackpot: false
    },
    {
      id: "spirale",
      label: "Spirale di patate",
      description: "Spirale di patate omaggio sul prossimo ordine.",
      weight: 11,
      isJackpot: false
    },
    {
      id: "petali",
      label: "Petali di patate",
      description: "Petali di patate omaggio sul prossimo ordine.",
      weight: 10,
      isJackpot: false
    },
    {
      id: "crocchette",
      label: "Crocchette di patate",
      description: "Crocchette di patate omaggio sul prossimo ordine.",
      weight: 10,
      isJackpot: false
    },
    {
      id: "bocconcini",
      label: "Bocconcini di pollo",
      description: "Bocconcini di pollo omaggio sul prossimo ordine.",
      weight: 10,
      isJackpot: false
    },
    /* --- jackpot (totale 25) --- */
    {
      id: "pizza",
      label: "Pizza gratis",
      description: "Una pizza omaggio a scelta dal menù.",
      weight: 15,
      isJackpot: true
    },
    {
      id: "cena",
      label: "Cena per due",
      description: "Cena per due persone: due pizze e due bibite.",
      weight: 10,
      isJackpot: true
    },
    /* Abilitabile: alza il peso per introdurre biglietti non vincenti. */
    {
      id: "ritenta",
      label: "Ritenta",
      description: "Nessun premio questa volta. Ritenta con la prossima pizza!",
      weight: 0,
      isJackpot: false
    }
  ]
};
