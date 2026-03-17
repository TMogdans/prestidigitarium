# Magic Knowledge Base — Design

## Überblick

Eine Knowledge Base über die Kunstform Magie (Zauberkunst), aufgebaut als statische Website mit Astro Starlight. Ziel ist es, Wissen über Zaubertricks, Techniken, Requisiten und Effekte zu sammeln und zu vernetzen.

## Technologie

- **Framework:** Astro Starlight
- **Content:** Markdown-Dateien mit Frontmatter
- **Suche:** Pagefind (eingebaut)
- **Sprache:** Deutsch, Fachbegriffe in Originalsprache (Englisch, Französisch)
- **Hosting:** Lokal (später optional GitHub Pages / Netlify / Vercel)

## Struktur

```
src/content/docs/
├── index.md                      # Startseite
├── sparten/
│   ├── close-up.md
│   ├── buehnenmagie.md
│   ├── mentalmagie.md
│   ├── strassenmagie.md
│   └── salonmagie.md
├── techniken/
│   ├── misdirection.md
│   ├── palmieren.md
│   ├── falschmischen.md
│   ├── controls/
│   │   ├── index.md
│   │   ├── pass.md
│   │   ├── break.md
│   │   └── crimp.md
│   └── forces/
│       ├── index.md
│       ├── classic-force.md
│       └── riffle-force.md
├── effekte/
│   ├── verschwinden.md
│   ├── verwandlung.md
│   ├── schweben.md
│   └── vorhersage.md
├── requisiten/
│   ├── karten/
│   │   ├── index.md
│   │   ├── svengali-deck.md
│   │   └── stripper-deck.md
│   ├── baelle/
│   │   ├── index.md
│   │   └── chop-cup.md
│   ├── tuecher/
│   │   └── index.md
│   ├── ringe/
│   │   └── index.md
│   ├── muenzen/
│   │   └── index.md
│   └── gimmicks/
│       ├── thumb-tip.md
│       └── invisible-thread.md
└── ressourcen/
    ├── buecher.md
    └── kanaele.md
```

## Fünf Hauptbereiche

### 1. Sparten
Einstiegspunkt in die verschiedenen Disziplinen der Magie: Close-up, Bühne, Mental, Straße, Salon. Jede Sparte beschreibt Charakteristiken, typische Effekte und relevante Techniken.

### 2. Techniken
Prinzipien und Methoden, die spartenübergreifend eingesetzt werden. Große Kategorien (Controls, Forces) bekommen Unterordner mit Übersichtsseite und Einzelseiten. Einfachere Techniken bleiben als einzelne Datei.

### 3. Effekte
Kategorisierung nach dem, was der Zuschauer sieht: Verschwinden, Verwandlung, Schweben, Vorhersage, etc.

### 4. Requisiten
Material und Gimmicks: Karten, Bälle, Tücher, Ringe, Münzen, spezielle Gimmicks. Beschreibung, Varianten, Kaufhinweise, und welche Tricks/Techniken sie nutzen.

### 5. Ressourcen
Zentrale Übersicht aller Quellen: Bücher, YouTube-Kanäle, Websites.

## Aufbau eines Trick-Eintrags

```markdown
---
title: Ambitious Card
sidebar:
  label: Ambitious Card
tags: [close-up, karten, sleight-of-hand]
effekt: verwandlung
schwierigkeit: mittel
requisiten: [kartenspiel]
---

## Effekt
Was der Zuschauer sieht.

## Technik / Prinzip
Wie es funktioniert. Querverweise auf Technik-Einträge.

## Requisiten
Was man braucht. Querverweise auf Requisiten-Einträge.

## Geschichte
Herkunft und Entwicklung des Tricks.

## Medien
Bilder, YouTube-Videos, Mermaid-Diagramme.

## Quellen & Referenzen
Bücher (mit Kapitel/Seite), YouTube-Links, Websites.
Querverweise auf den Ressourcen-Bereich.
```

## Aufbau eines Technik-Eintrags

```markdown
---
title: Double Lift
sidebar:
  label: Double Lift
tags: [close-up, karten, sleight-of-hand]
---

## Beschreibung
Was die Technik ist und wofür sie eingesetzt wird.

## Ausführung
Detaillierte Erklärung der Technik.

## Varianten
Verschiedene Methoden/Griffe.

## Verwendung in Tricks
Querverweise auf Tricks, die diese Technik nutzen.

## Medien
Bilder, Videos, Diagramme.

## Quellen & Referenzen
Bücher, YouTube-Links, Websites.
```

## Aufbau eines Requisiten-Eintrags

```markdown
---
title: Svengali Deck
sidebar:
  label: Svengali Deck
tags: [karten, gimmick]
typ: gimmick
---

## Beschreibung
Was es ist (normales Objekt vs. Gimmick).

## Funktionsweise
Wie das Gimmick funktioniert.

## Verwendung in Tricks
Querverweise auf Tricks, die dieses Requisit nutzen.

## Kaufhinweise
Worauf man achten sollte, Varianten.

## Medien
Bilder, Videos.

## Quellen & Referenzen
Bücher, YouTube-Links, Websites.
```

## Querverweise

Alle Bereiche sind untereinander vernetzt:
- Tricks → verlinken auf Techniken und Requisiten
- Techniken → verlinken auf Tricks, die sie nutzen
- Requisiten → verlinken auf Tricks und Techniken
- Quellen → erscheinen direkt im Eintrag UND zentral im Ressourcen-Bereich

## Bekannte Ressourcen

### Bücher
- *Das große Buch vom Zaubern* — Bruce Smith (E-Book, Deutsch, Einstieg)

### YouTube-Kanäle
- Matthias Berger (Deutsch)
- Miles Pitwell (Englisch)
