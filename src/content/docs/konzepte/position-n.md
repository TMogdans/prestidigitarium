---
title: Eine Karte an Position n bringen
sidebar:
  label: Position n
  order: 7
tags: [konzept, karten, control, positionskontrolle, acaan, faro, selbstarbeitend]
---

„Bring die Wahlkarte an die siebte Stelle von oben" oder „an die zwanzigste von unten" klingt nach einem eigenen Griff. In der Literatur gibt es den kaum. Profis zerlegen die Aufgabe in **drei Schritte**, und die Standardwerke gliedern sie auch so:

1. **Markieren** — wo liegt die Karte gerade? ([Break](/techniken/controls/break), Injog, [Crimp](/techniken/controls/crimp), [Key Card](/techniken/controls/key-card))
2. **Ankern** — die Karte nach oben oder unten bringen. Das sind die klassischen [Controls](/techniken/controls/).
3. **Verschieben** — von der Ankerposition um n weiterrücken, zählend oder rechnerisch.

Diese Seite behandelt Schritt 3 und die Frage, welche Methode wann die schnellste ist.

## Grundregeln, die alles tragen

Zwei Invarianten reichen, um fast jede Methode zu verstehen:

- **Einzeln abzählen kehrt um.** Wer n Karten einzeln auf den Tisch zählt, dreht ihre Reihenfolge. Die oberste wird die unterste des Haufens. Dasselbe tut ein *Run* im Overhand Shuffle.
- **Ein Block bleibt ein Block.** Ein [Double Undercut](/techniken/controls/double-undercut) oder ein abgeworfenes Paket verschiebt Karten, ohne ihre Reihenfolge zu ändern.

Daraus folgt die wichtigste Umrechnung: Bei einem Deck mit N Karten ist die n-te von unten die (N+1−n)-te von oben. Bei 52 Karten also 53−n.

## Schnelle Methoden

Ausgangslage jeweils: Die Wahlkarte liegt **oben**, weil das jeder Control liefert.

| Methode | Ergebnis | Aufwand | Mechanik |
|---|---|---|---|
| **Zähl-Umkehr** | n von oben | keine Fingerfertigkeit | n Karten einzeln auf den Tisch zählen, Haufen zurück aufs Deck. Die Wahlkarte war die erste, liegt also unten im Haufen und danach an Stelle n. Klassische Verpackung: der „missglückte" Zählversuch des Magiers, bevor der Zuschauer selbst zählt. Standard in vielen ACAAN-Konstruktionen. |
| **Break unter n Karten + Double Undercut** | n von unten | leicht | Break unter den obersten n Karten (Wahlkarte ist die erste davon), Block per Double Undercut nach unten. Die Wahlkarte liegt an der Oberkante des Blocks, also n-te von unten. Break per [Pinky Count](/techniken/controls/pinky-count), Daumen-Riffle an der Hinterkante oder durch offenes Spreizen der obersten Karten. Praktikabel bis etwa acht Karten. |
| **Einstecken am Break** | n von oben | leicht bis mittel | Vor der Rückgabe Break unter n−1 Karten nehmen. Die Wahlkarte wird scheinbar in die Mitte gesteckt, tatsächlich am Break, mit gekipptem Deck wie beim [Tilt](/techniken/controls/tilt). Kein weiterer Control nötig. Bis etwa fünf Karten überzeugend. |
| **Overhand Run mit Injog** | n von oben, beliebiges n | mittel | Untere Hälfte undercutten, n−1 Karten einzeln auf die Wahlkarte runnen, die nächste Karte injoggen, Rest abwerfen. Am Injog undercutten, Paket obenauf. Die Standardmethode aus dem Overhand-Kapitel der *Royal Road*, verwandt mit dem [Overhand Control](/techniken/controls/overhand-control). |
| **Riffle Stack** | n von oben, kleines n | schwer | Beim Riffle Shuffle genau n−1 Karten der anderen Hälfte als letzte auf die Wahlkarte fallen lassen. Das Handwerkszeug der Gambler zum Aufbauen von Pokerblättern. Ab drei bis vier Karten unzuverlässig. |

### Die Richtung wechseln

Liegt die Karte an n von oben und soll an n von unten, genügt ein Overhand Shuffle: **n Karten einzeln runnen, den Rest darauf werfen.** Der Run kehrt genau diese n Karten um, die Wahlkarte ist die letzte gerunnte und liegt mit n−1 Karten unter sich.

Die Gegenrichtung von unten nach oben ist ohne Zählen von unten nicht direkt möglich. Hier hilft entweder ein Bottom-Buckle für ein bis drei Karten oder die Spiegelung durch den [Chaotic Ireland Shuffle](/techniken/controls/chaotic-ireland-shuffle).

### Große n: bekannte Startposition plus Differenz

Ab etwa zehn Karten wird jedes verdeckte Zählen langsam oder unsicher. Dann gilt das Prinzip, mit dem [ACAAN Ritual](/tricks/karten/acaan-ritual) arbeitet: Die Karte liegt an einer **bekannten** Position, und nach Nennung der Zahl wird nur die **Differenz** umgelegt. Karten von oben nach unten, wenn n größer ist als die Startposition, von unten nach oben, wenn n kleiner ist. Eine Startposition in der Mitte des erwarteten Zahlenbereichs halbiert den maximalen Aufwand.

Die feste Startposition erreicht man ohne Zeitdruck, etwa mit dem Overhand Run auf eine bequeme Zahl wie zehn, anschließend dem Richtungswechsel auf zehn von unten.

## Rechnerische Verfahren ohne Griff

Diese Methoden brauchen keine Fingerfertigkeit, dafür ein Verfahren, das der Zuschauer sieht. Sie lohnen sich, wenn der Zuschauer die Zahl nennt und das Deck dabei sichtbar in Bewegung sein soll.

### Faro

Ein perfekter Faro teilt 52 Karten exakt 26/26 und verzahnt sie Karte für Karte. Zwei Varianten:

| | Oberste Karte | Karte an Position p (obere Hälfte) | Wiederherstellung |
|---|---|---|---|
| **Out-Faro** | bleibt oben | landet auf 2p−1 | 8 Out-Faros |
| **In-Faro** | wandert auf Platz 2 | landet auf 2p | 52 In-Faros, nach 26 ist das Deck umgekehrt |

### Elmsley Binary Placement

Alex Elmsleys Verfahren, mit dem eine Karte von oben an jede beliebige Position gelangt. Man schreibt die gewünschte **Anzahl Karten über der Wahlkarte** binär und liest von links nach rechts: **1 = In-Faro, 0 = Out-Faro.**

| Karten darüber | Endposition | binär | Faro-Folge |
|---|---|---|---|
| 1 | 2 | 1 | In |
| 2 | 3 | 10 | In, Out |
| 3 | 4 | 11 | In, In |
| 9 | 10 | 1001 | In, Out, Out, In |
| 20 | 21 | 10100 | In, Out, In, Out, Out |
| 25 | 26 | 11001 | In, In, Out, Out, In |
| 51 | 52 | 110011 | In, In, Out, Out, In, In |

Warum es geht: Jeder Faro verdoppelt die Anzahl der Karten über der Wahlkarte, ein In-Faro addiert eins. Das ist genau der Aufbau einer Binärzahl von der höchsten Stelle her. Für die **unterste** Karte gilt dieselbe Folge spiegelbildlich, gezählt von unten. Höchstens sechs Faros sind nötig. Ein Fehler beim Teilen um eine Karte verschiebt das Ergebnis, deshalb ist das Verfahren für Anfänger ein Fernziel.

### Under-Down und Down-Under Deal

Karten abwechselnd unter das Paket legen und auf den Tisch geben, bis eine übrig bleibt. Welche das ist, folgt dem Josephus-Problem. Sei k die größte Zweierpotenz, die nicht größer als die Kartenzahl n ist:

- **Under-Down** (erste Karte unter das Paket): Überlebende ist die Karte an Position 2(n−k)+1. Bei 52 Karten die 41.
- **Down-Under** (erste Karte auf den Tisch): Position 2(n−k). Bei 52 Karten die 40. Ist n eine Zweierpotenz, überlebt die unterste Karte.

### Gergonne, 27 Karten

Das einzige Verfahren, bei dem der Zuschauer die Zielposition **frei nennen** darf. Der bekannte 21-Karten-Trick ist ein Sonderfall.

Ablauf: 27 Karten offen in drei Haufen austeilen, immer der Reihe nach, neun pro Haufen. Der Zuschauer sagt, in welchem Haufen seine Karte liegt. Jeder Haufen wird als Einheit verdeckt umgedreht und die drei aufeinandergelegt. Dabei kommt der genannte Haufen nach oben, in die Mitte oder nach unten. Dreimal.

Regel: Zielposition P minus eins in Basis 3 schreiben, drei Ziffern. Die **niedrigste** Ziffer steuert Runde 1, die mittlere Runde 2, die höchste Runde 3. Ziffer 0: genannter Haufen oben. 1: Mitte. 2: unten.

| Ziel P | P−1 in Basis 3 | Runde 1 | Runde 2 | Runde 3 |
|---|---|---|---|---|
| 1 | 000 | oben | oben | oben |
| 11 | 101 | Mitte | oben | Mitte |
| 14 | 111 | Mitte | Mitte | Mitte |
| 20 | 201 | Mitte | oben | unten |
| 27 | 222 | unten | unten | unten |

Warum es geht: Nach jedem Austeilen steht die Karte in ihrem Haufen an einer Zeile 0 bis 8, die sich aus der alten Position geteilt durch 3 ergibt. Legt man den Haufen an Stelle d, wird die neue Position 9d plus Zeile. Nach drei Runden ist die Zeileninformation aufgebraucht, übrig bleibt 9·d₃ + 3·d₂ + d₁.

:::caution[Offen austeilen]
Die Regel gilt nur beim **offenen** Austeilen mit Haufen, die als Einheit umgedreht werden. Verdecktes Austeilen kehrt jeden Haufen um, und die mittlere Ziffer springt auf ihr Gegenteil. Offen ist ohnehin das natürliche Handling, weil der Zuschauer seine Karte sehen muss.
:::

Basis 3 im Kopf: P−1 durch 3 teilen, der Rest ist die erste Ziffer. Den Quotienten wieder durch 3, der Rest ist die zweite Ziffer, der verbleibende Quotient die dritte.

## Einstieg in den Chaotic Ireland Shuffle

Der [Chaotic Ireland Shuffle](/techniken/controls/chaotic-ireland-shuffle) spiegelt eine Position: n-te von unten wird n-te von oben. Für den Einstieg braucht man die Karte also **von unten** gezählt. Zwei Dinge sind dabei leicht zu übersehen:

- **Die Richtung.** Der Overhand Run mit Injog liefert n von oben. Nach dem Ireland läge die Karte an n von unten, und der Zuschauer müsste vom Gesicht des Decks zählen. Für den Ireland-Einstieg braucht es Break plus Double Undercut oder den Richtungswechsel per Run.
- **Der Puffer.** In seiner ersten Phase hebt der Zuschauer Pakete ab. Liegt die Karte bei kleinem n oben, frisst schon das erste Paket sie, und die Spiegelung bricht. Von unten gibt es Reserve. Das ist der eigentliche Grund, warum die Ritual-Konstruktion unten arbeitet.

Rezept: Bei kleinem n Break unter n Karten und Double Undercut. Bei großem n die Karte vorab an eine feste Position von unten bringen und nach Nennung der Zahl die Differenz umlegen.

Der Ireland ist dabei kein Verstärker der Positionierung. Sein Gewinn liegt darin, dass das Deck aus den Händen des Magiers ist, bevor jemand nach Karte und Zahl fragt. Wer darauf verzichten kann, kommt mit dem Overhand Run direkt an n von oben und lässt zählen.

## Was nicht dazugehört

- **Zyklische Stacks** wie Si Stebbins verschieben beim Abheben alle Karten gleich. Sie sagen, *welche* Karte an Position n liegt, bringen aber keine gewählte Karte dorthin.
- **Gilbreath-Prinzip** erhält Struktur nach einem Riffle, keine Einzelposition.
- **[Stay Stack](/konzepte/stay-stack)** erhält eine Spiegelbeziehung, das Ireland-Prinzip erzeugt eine Spiegelung. Verwandt, aber andere Aufgabe.

## Quellen & Referenzen

- Jean Hugard, Frederick Braue: *The Royal Road to Card Magic* (1948), Kapitel zum Overhand Shuffle Control. Run, Injog und Undercut als Positionierungswerkzeuge
- S. W. Erdnase: *The Expert at the Card Table* (1902), Blind Shuffles und Stock Shuffle
- Roberto Giobbi: *Card College* Band 3 (Break-, Jog- und Step-Finessen, Faro) und Band 4 (Culling und Stacking)
- Alex Elmsley: *Ibidem* Nr. 11 (1957), binäres Faro-Placement. Ausführlich in Persi Diaconis, Ron Graham: *Magical Mathematics* (2012), Kapitel zu perfekten Shuffles
- Joseph Diez Gergonne: *Annales de Mathématiques* (1813). Martin Gardner: *Mathematics, Magic and Mystery* (1956), Kapitel zu Gergonnes Haufenproblem
- [Conjuring Credits: Spread Cull](https://www.conjuringcredits.com/doku.php?id=cards%3Aspread_cull), [Buckle](https://www.conjuringcredits.com/doku.php?id=cards:buckle), [Depth Illusion / Tilt](https://www.conjuringcredits.com/doku.php?id=cards:depth_illusion_or_tilt)
- Die Tabellen zu Elmsley und Gergonne sowie die Josephus-Positionen wurden per Simulation für alle Zielpositionen geprüft. Die Regel „offen austeilen" bei Gergonne stammt aus dieser Prüfung, nicht aus der Literatur.
