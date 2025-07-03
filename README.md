# 👨‍💻 Portfolio Personale – Aniello Casolla

Questo progetto è il mio portfolio personale sviluppato con **React**, pensato per presentare le mie esperienze, competenze tecniche e progetti, il tutto con una UI moderna, responsive e multilingua.

L’obiettivo è quello di offrire una panoramica professionale del mio profilo, includendo un sistema dinamico di navigazione, animazioni introduttive, sezione contatti con invio email e dettagli su esperienze passate, utilizzando le più comuni best practice frontend.

---

## 🎯 Obiettivi del progetto

- Presentare esperienze lavorative e progetti personali in modo ordinato, elegante e responsive.
- Offrire un’interfaccia dinamica con navigazione fluida tra le sezioni.
- Implementare **dark/light mode** gestita tramite `MUI` e contesto globale.
- Permettere il **download diretto del CV** e la sua visualizzazione in un’altra scheda.
- Includere un **form di contatto** collegato a **EmailJS** per l’invio diretto di email.
- Integrare un **tour interattivo** tramite `Driver.js` per guidare l’utente tra le funzionalità.
- Gestire più lingue (IT/EN) grazie a `i18next`.

---

## ✅ Funzionalità implementate

- Navbar responsive con **menu drawer mobile**.
- Animazioni introduttive e **testo colorato dinamico**.
- Sezione esperienze strutturata come `Accordion` stile LinkedIn.
- Presentazione progetti tecnici tramite descrizioni sintetiche e dettagliate.
- **Switch dark/light mode** integrato nel tema MUI.
- Download e apertura del CV `.pdf`.
- Form contatto funzionante via EmailJS con gestione dello stato (`loading`, `success`, `error`).
- Integrazione del **tour guidato** all’apertura del sito.
- Struttura multilingua tramite `react-i18next`.

---

## 🛠️ Tecnologie utilizzate

- **React** (18.x)
- **Material UI (MUI)** per componenti e theming
- **Driver.js** per il tour interattivo
- **EmailJS** per invio email frontend
- **i18next / react-i18next** per localizzazione
- **React Context** per gestione tema e stati globali
- **Responsive design** via MUI + media queries

---

## 📁 Struttura del progetto

/src
├── /assets # immagini, avatar, PDF CV
├── /components # componenti riutilizzabili (Navbar, Footer, etc.)
├── /context # ThemeContext, DriverContext, AppContext
├── /customhooks # Per gestire la logica dei rendering component
├── /languages # Gestione multilingua con i118
├── App.jsx
└── index.js

---

## 🌐 Responsività

Il progetto è ottimizzato per:

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

Utilizza `MUI` e media queries per garantire un layout fluido su ogni dispositivo.

---

## 🔧 Come eseguire il progetto

1. Clona il repository:

```bash
git clone https://github.com/aniellocasolla/portfolio.git
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il progetto:
```bash
npm install
```

4. Apri http://localhost:3000 nel browser.


## 📄 Come modificare il contenuto
Le esperienze e progetti sono definite in /languages/it.json.

Il CV PDF va posizionato in /public/ per permettere sia il download che la visualizzazione diretta.

# 👨‍💻 Autore
**Aniello Casolla**
📧 nellocasolla446@gmail.com
📆 Ultimo aggiornamento: Luglio 2025

## 📌 Note
Progetto sviluppato per dimostrare capacità di:

Strutturazione architettura frontend in React

Gestione UI moderna e responsive

Integrazione API e automazioni

Multilingua, accessibilità, tema e buone pratiche

