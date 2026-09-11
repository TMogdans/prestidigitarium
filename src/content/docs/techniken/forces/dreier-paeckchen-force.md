---
title: Dreierpäckchen-Force
sidebar:
  label: Dreierpäckchen-Force
  order: 6
tags: [karten, force, selbstwirkend, positionskontrolle, acaan]
typ: prinzip
schwierigkeit: leicht
---

Ein selbstwirkendes Positionsprinzip mit nur drei Karten: Der Zuschauer mischt, zieht eine Karte, sieht sie an und steckt sie „in die Mitte" des Päckchens zurück. Bei genau drei Karten gibt es nur eine Mitte — die gesehene Karte liegt danach zwingend auf **Position 2 von 3**, egal welche der drei Karten gezogen wurde und egal wie vorher gemischt wurde.

## Beschreibung

Der Zuschauer erhält drei Karten. Er mischt sie nach Belieben, zieht eine, sieht sie sich an und steckt sie zurück in die Mitte der beiden übrigen. Damit ist der Ablauf beendet — der Magier hat das Päckchen zu keinem Zeitpunkt berührt.

### Positions-Force statt Karten-Force

Eine klassische Force erzwingt eine **bestimmte Karte**, unabhängig davon, an welcher Position sie landet. Dieses Prinzip funktioniert umgekehrt: Es erzwingt eine **bestimmte Position**, bei einer völlig freien Karte.

Der Magier erfährt dabei **nicht**, welche Karte der Zuschauer gesehen hat — nur, dass sie auf Position 2 von 3 liegt. Für viele Effekte reicht genau das. Bei einem ACAAN etwa liefert die Identität der Karte am Ende der Zuschauer selbst (er nennt oder deckt sie auf); der Magier muss nur die Position steuern, an der sie sich befindet. Genau deshalb gehört dieses Prinzip in eine eigene Seite und nicht als Fußnote unter „Forces": Es löst ein anderes Problem als eine Karten-Force.

## Ausführung

1. Zuschauer erhält ein Päckchen aus **genau drei** Karten.
2. Er mischt es beliebig oft und beliebig gründlich.
3. Er zieht **eine** Karte, sieht sie sich an — der Magier sieht sie nicht.
4. Er steckt sie **in die Mitte** der beiden verbliebenen Karten zurück.
5. Ergebnis: Die gesehene Karte liegt auf **Position 2 von 3**, mit je einer Karte darüber und darunter.

Der Magier greift zu keinem Zeitpunkt ein. Die einzige Aufgabe besteht darin, Schritt 4 zu beobachten (siehe [Schwachstelle](#die-schwachstelle)).

## Warum es funktioniert

Nach dem Ziehen verbleiben genau **zwei** Karten in der Hand des Zuschauers. Für das Zurückstecken gibt es dafür nur drei mögliche Einsteckplätze: **über** beiden Karten, **zwischen** beiden, **unter** beiden. „In die Mitte" bezeichnet unzweideutig den mittleren dieser drei Plätze — den einzigen, der weder oben noch unten ist.

Damit liegt zwangsläufig **eine** Karte über und **eine** Karte unter der zurückgesteckten Karte: Position 2 von 3. Das Argument zählt nur, wie viele Karten zu beiden Seiten liegen — nicht, welche Karten das sind und nicht, wie das Päckchen vorher gemischt wurde. Beides fällt aus der Rechnung komplett heraus. ∎

### Skalierung: Warum es nur bei drei Karten zuverlässig ist

Der Beweis oben hängt an einer einzigen Zahl: Nach dem Ziehen bleiben **r = n − 1** Karten übrig, und die stellen **r − 1** innere Lücken zwischen sich (zusätzlich zu den zwei äußeren Plätzen oben/unten, die nicht „die Mitte" sind).

| n (Päckchengröße) | r = n − 1 (bleibt übrig) | innere Lücken = r − 1 | Ergebnis |
|---|---|---|---|
| 3 | 2 | **1** | Genau eine innere Lücke — sie **ist** automatisch die Mitte, ganz ohne Präzision. Position 2 von 3, exakt. |
| 4 | 3 | 2 | Zwei innere Lücken, gleich weit vom Rand entfernt — **keine** von beiden ist geometrisch ausgezeichnet. Position streut zwischen 2 und 3 von 4. |
| 5 | 4 | 3 | Drei innere Lücken. Die mittlere ist zwar rein geometrisch exakt zentriert (Position 3 von 5) — aber der Zuschauer muss unter drei plausiblen „Mitte"-Kandidaten genau diese eine treffen, statt wie bei n=3 nur eine einzige Lücke überhaupt zur Auswahl zu haben. In der Praxis streut die Position auch hier. |

Der Unterschied zwischen n=3 und allem Größeren ist also nicht in erster Linie, ob rein geometrisch ein Zentrum existiert (das tut es bei ungeradem n durchaus, auch bei n=5, n=7, …). Der Unterschied ist, dass bei n=3 **nur eine einzige innere Lücke** zur Verfügung steht — die Anweisung „in die Mitte" kann also gar keine andere Position treffen. Ab n=4 wachsen die inneren Lücken mit n (allgemein: n − 2 Stück), und „die Mitte" wird von einer erzwungenen Tatsache zu einer Schätzung, die der Zuschauer treffen oder verfehlen kann.

**Damit ist n=3 die einzige Päckchengröße, bei der das Prinzip ohne jede Fein-Präzision des Zuschauers zuverlässig funktioniert.**

## Die Schwachstelle

Die Konstruktion hat keine Absicherung an der einzigen Stelle, an der sie scheitern kann: wenn der Zuschauer die Karte nicht mittig, sondern versehentlich ganz oben oder ganz unten einsteckt. Bei drei Karten ist das schwer zu verfehlen — aber „schwer" ist nicht „unmöglich". Wer dieses Prinzip einsetzt, muss das Zurückstecken **beobachten** und im Zweifel korrigierend eingreifen oder den Vorgang wiederholen lassen. Eine Garantie liefert das Prinzip an dieser Stelle nicht.

## Schwierigkeit

**Leicht** — kein Sleight, kein Gimmick, keine Duplikate, kein präpariertes Deck. Die einzige Aufgabe des Magiers ist Aufmerksamkeit beim Zurückstecken (siehe [Schwachstelle](#die-schwachstelle)). Die Wahl der Karte ist echt frei — eine aus drei — und das Päckchen übersteht eine Untersuchung, weil an ihm nichts präpariert ist.

## Verwendung in Tricks

- **Positionskontrolle für ACAAN-artige Effekte**: Wenn die Karten-Identität am Ende ohnehin vom Zuschauer selbst geliefert wird, reicht es, ihre Position zu kennen.
- [ACAAN Ritual](/tricks/karten/acaan-ritual) — Dani DaOrtiz nutzt dieses Prinzip in der duplikat-freien Fassung seines ACAAN-Rituals, vorgeführt bei *Penn & Teller: Fool Us*, Staffel 9, Episode 4 („Alyson's Smart Ass"), 4. November 2022. Die Zielkarte liegt dort nach dem Einsammeln auf einer bekannten Position und wird von dort weiterverarbeitet.

:::caution[Zuschreibung]
Der Titel „Dreierpäckchen-Force" ist ein **Arbeitstitel dieses Wikis**, keine überlieferte Bezeichnung. Eine Recherche in Conjuring Archive, Genii Forum, Magic Cafe und Ask Alexander hat für dieses Prinzip **keinen etablierten Fachbegriff und keine gesicherte Zuschreibung** ergeben.

Insbesondere ist der ursprünglich vermutete Begriff „3rd Number Force" dort **nicht** als benannte Technik für dieses Prinzip nachweisbar — er bezeichnet, soweit auffindbar, etwas anderes. Ob das hier beschriebene Dreierpäckchen-Prinzip in der Literatur einen eigenen Namen trägt, ist ungeklärt. Diese Seite erfindet daher bewusst **keinen** Erfinder, **kein** Werk und **keine** Jahreszahl dazu.
:::

→ Siehe auch: [Forces Übersicht](/techniken/forces/) · [Ten-Twenty Force](/techniken/forces/ten-twenty-force) · [Chaotic Ireland Shuffle](/techniken/controls/chaotic-ireland-shuffle)

## Quellen & Referenzen

- Der oben geführte Beweis (Position 2 von 3, sowie die Skalierungsrechnung für n=4/n=5) ist eigene Herleitung.
- Zur Zuschreibung des Prinzips siehe den Hinweiskasten oben — hierzu ließ sich keine belastbare Quelle finden.
- Anwendungsbeispiel: *Penn & Teller: Fool Us*, Staffel 9, Episode 4 („Alyson's Smart Ass"), 4. November 2022 — Dani DaOrtiz, ACAAN-Ritual.
