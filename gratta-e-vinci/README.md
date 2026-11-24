# Gratta e Vinci Royal — prototipo

Pagina web semplice da dare con ogni pizza: il cliente apre un link o inquadra un QR, gratta lo schermo con il dito e scopre il premio.

Locale predefinito: **Royal Randazzo** (Ristorante · Pizzeria, Randazzo CT). Tutti i testi sono in italiano, nello stile nero / bordeaux / oro del Royal, ma tutto è personalizzabile.

Questo è un **prototipo dimostrativo**. Non è stato pubblicato e non va usato in sala così com’è: i codici nascono nel browser del cliente (vedi i limiti più sotto).

## File nella cartella

| File | A cosa serve |
|---|---|
| `index.html` | Pagina unica, con stile e logica incorporati. Si apre da sola. |
| `config.js` | Configurazione da modificare: nome del locale, logo, colori, premi e probabilità. |
| `assets/logo_royal.png` | Stemma Royal (sfondo trasparente). |
| `assets/qr_placeholder.png` | QR di **esempio**, con URL finto. Non è attivo. |
| `fonts/` | Caratteri Cinzel, Cinzel Decorative e EB Garamond, per far funzionare la pagina anche senza internet. |
| `screenshots/` | Anteprime della maschera, del premio, del jackpot e della simulazione. |
| `test_headless.mjs` | Script di prova automatica (non serve al cliente). |

Nel file `index.html` c’è anche una copia di riserva della configurazione (`CONFIG_DEFAULT`). Se `config.js` è presente, viene usata quella.

## Come aprirla e usarla

### Sul computer, senza internet

1. Apri la cartella `gratta_e_vinci`.
2. Fai doppio clic su `index.html`: si apre nel browser.
3. Gratta il riquadro argentato con il mouse (o con il dito, su un tablet).
4. Quando hai scoperto circa la metà della superficie, il resto si toglie da solo e compare il premio, con il codice e la data.

Se il browser limita qualche funzione sui file locali, apri un terminale nella cartella e avvia un piccolo server:

```bash
python3 -m http.server 8080
```

Poi vai all’indirizzo `http://localhost:8080/`.

### Sul telefono del cliente

La pagina è pensata per lo schermo del telefono. Il cliente:

1. inquadra il QR (o tocca il link);
2. gratta con il dito;
3. quando compare il premio, **mostra la schermata alla cassa** oppure fa uno screenshot.

Sotto ogni raschiata c’è un codice univoco nel formato `RYL-XXXX-XXXX` (l’ultima lettera è un carattere di controllo) e la data e l’ora dell’estrazione (fuso orario di Roma).

Se si ricarica la pagina sullo stesso telefono, compare **lo stesso biglietto già estratto**, non uno nuovo. È una protezione basilare di questo prototipo.

### Parametri nell’indirizzo (per prove e per i link delle pizze)

- `?reset=1` — cancella il biglietto salvato e ne estrae uno nuovo (solo per le prove; non va lasciato nei QR dei clienti).
- `?pizza=18` — il riferimento della pizza compare nel codice, ad esempio `RYL-AB3K-7N2P · PIZZA 18`. Ogni numero di pizza ha il suo biglietto memorizzato.
- `?t=abc123` — come sopra, con un gettone: `RYL-AB3K-7N2P · T-abc123`.
- `?demo=1` — pagina di prova: esegue 1000 estrazioni e mostra le percentuali reali rispetto a quelle attese.
- `?force=bibita` — (solo per le prove) forza un premio preciso, usando l’`id` del premio in `config.js`.

Esempi:

```
index.html?pizza=18
index.html?demo=1
index.html?reset=1
```

## Come fare il QR

Nella cartella c’è `assets/qr_placeholder.png`. Punta a un indirizzo finto:

`https://ESEMPIO-PLACEHOLDER.invalid/gratta-e-vinci/`

È scritto chiaramente sulla grafica che l’URL **non è attivo**. Non usarlo in sala.

Quando la pagina sarà pubblicata su un indirizzo vero (vedi sotto), si genera un QR nuovo che punta a quell’indirizzo, per esempio con un generatore QR qualsiasi, e si stampa o si attacca sulla confezione / sullo scontrino. Per un uso serio, ogni pizza dovrebbe avere un link (e quindi un QR) **diverso**, emesso dalla cassa: questo prototipo da solo non lo fa.

## Come pubblicarla (solo spiegazione: non è stata pubblicata)

Il menù Royal è già su GitHub Pages, nel repository `benedettoimbrogio-del/menuroyal`, pubblicato dal branch `cursor/publish-royal-pages-1014`.

Per mettere online anche questa pagina, in un secondo momento, si può:

1. copiare il contenuto di questa cartella nel repository (per esempio in una sottocartella `gratta-e-vinci/`);
2. inviare le modifiche su quel branch, oppure creare un repository nuovo e attivare GitHub Pages;
3. l’indirizzo sarebbe del tipo `https://benedettoimbrogio-del.github.io/menuroyal/gratta-e-vinci/` se la si mette in quella cartella sullo stesso sito del menù;
4. a quel punto si genera il QR vero, puntato a quell’URL.

**Non è stata pubblicata.** Questo file spiega solo come si farebbe.

Funziona su qualunque hosting statico (GitHub Pages, Netlify, una cartella sul sito del locale): non serve un database per il prototipo.

## Come personalizzare

Apri `config.js` e modifica i campi. Non serve saper programmare oltre a cambiare i testi e i numeri.

### Nome, logo, titolo

- `localeName` — nome del locale (compare in alto e a piè di pagina).
- `tagline` — riga sotto il nome, es. `Ristorante · Pizzeria · Randazzo`.
- `title` — titolo della pagina, predefinito `Gratta e Vinci`.
- `subtitle` — frase sotto il titolo.
- `logoUrl` — percorso o indirizzo dell’immagine del logo. Per cambiarlo, metti il file in `assets/` e aggiorna il percorso, ad esempio `assets/mio_logo.png`.
- `codePrefix` — le tre lettere iniziali del codice (`RYL` per Royal).

### Colori

Nella sezione `colors` puoi cambiare lo sfondo, il bordeaux, l’oro, il crema e il colore del biglietto. Usa valori tipo `#12070a`. Lo stile predefinito è quello Royal (nero, bordeaux, oro).

### Premi e probabilità

Ogni premio ha:

- `id` — nome interno, senza spazi (serve anche per `?force=`).
- `label` — titolo che vede il cliente.
- `description` — spiegazione sotto il titolo.
- `weight` — peso relativo. La probabilità è `peso / somma di tutti i pesi`.
- `isJackpot` — `true` per i premi grandi (scritta “Jackpot” e coriandoli).

Con i valori predefiniti i pesi sommano 100, così il peso è già la percentuale:

| Premio | Peso | Tipo |
|---|---:|---|
| Sconto 10% sul prossimo ordine | 12 | piccolo |
| Bibita omaggio | 11 | piccolo |
| Arancinetti omaggio | 11 | piccolo |
| Spirale di patate omaggio | 11 | piccolo |
| Petali di patate omaggio | 10 | piccolo |
| Crocchette di patate omaggio | 10 | piccolo |
| Bocconcini di pollo omaggio | 10 | piccolo |
| **Totale premi piccoli** | **75** | |
| Pizza gratis | 15 | jackpot |
| Cena per due | 10 | jackpot |
| **Totale jackpot** | **25** | |
| Ritenta (nessun premio) | 0 | disattivato |

I premi piccoli sono quelli che il locale offre davvero come omaggio sul prossimo ordine, più lo sconto e la bibita.

Per cambiare le percentuali basta toccare i `weight`. Esempio: se vuoi i jackpot più rari, scendi i pesi di `pizza` e `cena` e alza quelli dei premi piccoli, tenendo d’occhio la somma.

Per introdurre anche biglietti non vincenti, alza il peso di `ritenta` sopra 0 (così i percentuali degli altri premi scendono in proporzione). Oggi è a 0, quindi non esce mai.

### Testo di validità e riscossione

- `validityText` — predefinito: «Valido sul prossimo ordine entro 30 giorni.»
- `redeemText` — predefinito: «Mostra questa schermata alla cassa, oppure fai uno screenshot.»
- `scratchThreshold` — quanto bisogna grattare prima che si scopra tutto da solo (consigliato fra 0.50 e 0.60; predefinito 0.55).

Per controllare che i conti tornino, apri `index.html?demo=1`: parte da sola una simulazione di 1000 estrazioni e mostra atteso contro ottenuto.

## Limite importante di questo prototipo

I premi e i codici vengono estratti **nel browser del cliente**. Una persona determinata può:

- cancellare i dati del sito (o usare `?reset=1`) e ritentare finché non esce un jackpot;
- aprire il link da più telefoni o da una finestra anonima e ricevere un biglietto nuovo ogni volta;
- eventualmente modificare la pagina e inventarsi un codice.

Il salvataggio in `localStorage` evita solo che, sullo stesso telefono, un semplice aggiornamento della pagina estragga un altro premio. Non è una protezione vera.

**Per usarlo in sala serve un server** che emetta un biglietto monouso per ogni pizza e che la cassa possa convalidare. In sintesi:

1. Alla vendita (o in comanda) la cassa chiede al server un biglietto nuovo, legato a quella pizza.
2. Il server estrae il premio, lo registra (codice, premio, pizza, stato «non usato», scadenza) e restituisce un indirizzo unico.
3. Su quello scontrino o su quella confezione si stampa (o si mostra) il QR di *quel* link, non di una pagina uguale per tutti.
4. Il cliente apre il suo link e gratta: la pagina mostra il premio già deciso dal server, non ne inventa un altro.
5. In cassa si legge o si digita il codice: il server lo accetta una sola volta e lo segna come «riscosso».
6. Un secondo tentativo, un altro telefono o la cancellazione della memoria del telefono non fanno uscire un premio nuovo: il link è sempre lo stesso, e il codice si usa una volta sola.

Senza questo passaggio, il gratta e vinci va bene per vedere come funziona e per decidere premi e grafiche, non per darlo davvero ai clienti.
