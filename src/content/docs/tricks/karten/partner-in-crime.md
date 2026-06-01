---
title: Die Partnerkarte (Stay-Stack-Vorhersage)
sidebar:
  label: Die Partnerkarte
tags: [karten, close-up, vorhersage, stack, selbstwirkend]
effekt: vorhersage
sparte: close-up
schwierigkeit: mittel
requisiten: [kartenspiel]
---

Ein Zuschauer zieht verdeckt eine Karte und merkt sie sich. Ohne sie je gesehen zu haben, findet der Magier durch ein scheinbar zufälliges Austeilen die **Partnerkarte** – die Karte mit demselben Wert und derselben Farbfamilie. Der Trick baut auf dem [Stay-Stack-Prinzip](/konzepte/stay-stack) auf.

:::note[Quelle]
Diese Methode wurde von **Matthias Berger** in einem Video gezeigt. Der Ablauf unten gibt seine Vorführung wieder; das zugrundeliegende mathematische Prinzip ist hier zusätzlich erklärt und nachgerechnet.
:::

## Effekt (was der Zuschauer sieht)

Der Zuschauer zieht eine Karte, merkt sie sich und legt sie verdeckt beiseite – niemand sieht sie. Der Magier schiebt Pik- und Kreuz-Ass offen ins Deck und teilt die Karten in einem scheinbar willkürlichen Links-rechts-Verfahren immer weiter aus. Am Ende bleiben nur die beiden Asse mit einer einzigen verdeckten Karte dazwischen. Sie wird umgedreht: die exakte Partnerkarte der gezogenen Karte.

## Vorbereitung

Das Deck ist als [paralleler Stay Stack](/konzepte/stay-stack) aufgebaut: Karte *n* und ihre Partnerkarte sind Zwillinge (gleicher Wert, gleiche Farbfamilie). **Pik Ass und Kreuz Ass liegen separat** bereit und dienen als sichtbare **Locator-Karten** – sie sind nicht Teil des gestackten Decks. (Da die beiden schwarzen Asse selbst ein Zwillingspaar bilden, bleibt der Stay Stack der übrigen Karten intakt, wenn sie fehlen.)

## Ablauf

1. **Ziehen:** Der Magier fächert die Karten mit beiden Händen auf. Der Zuschauer zieht verdeckt eine Karte, merkt sie sich und behält sie. Der Magier sieht sie nie.
2. **Heimlich abheben:** An der Lücke teilt sich das Deck ganz natürlich: Die Karten *über* der gezogenen Karte liegen bereits in der rechten Hand, die *darunter* in der linken. Der Magier setzt das Deck wieder zusammen – aber mit **vertauschtem Oben und Unten** (der untere Teil kommt nach oben). Weil der Zuschauer in diesem Moment seine Karte ansieht und die Bewegung beiläufig wirkt, fällt der Cut nicht auf. Er bringt die **Partnerkarte exakt in die Deckmitte** (siehe [Warum es funktioniert](#warum-es-funktioniert)).
3. **Asse einsetzen:** Pik Ass und Kreuz Ass werden *face up* ins Deck geschoben – das eine an die **10. Stelle von oben**, das andere an die **10. Stelle von unten**. Der Zuschauer darf diese genauen Positionen nicht kennen.
4. **Austeilen:** Die Karten werden von oben einzeln und abwechselnd links und rechts auf zwei Stapel abgelegt.
5. **Eliminieren:** Der Stapel, in dem die beiden Asse liegen, wird behalten; der andere wird weggelegt.
6. **Wiederholen:** Schritt 4–5 wird wiederholt, bis nur noch die beiden Asse mit einer verdeckten Karte dazwischen übrig sind.
7. **Aufdecken:** Diese verdeckte Karte ist die Partnerkarte der gewählten Karte.

## Warum es funktioniert

Zwei Prinzipien greifen ineinander:

**1. Der Cut bringt die Partnerkarte exakt in die Mitte.** Im parallelen Setup liegt die Partnerkarte stets 25 Positionen von der gezogenen Karte entfernt. Vertauscht man an der Lücke Ober- und Unterteil, landet die Partnerkarte – egal welche Karte gezogen wurde – immer auf derselben Position: der Mitte des verbleibenden Stapels.

**2. Symmetrischer Eliminierungs-Deal.** Werden anschließend die beiden Asse als 10. Karte von oben und unten eingesetzt, umfasst der Stapel 51 Karten. Die Asse liegen damit **spiegelsymmetrisch** um die Deckmitte (Position 26) – genau dort, wo bereits die Partnerkarte sitzt. Beim abwechselnden Austeilen bleibt diese Symmetrie in jeder Runde erhalten: Beide Asse landen stets im selben Teilstapel, und die mittige Karte bleibt zwischen ihnen. Nach vier Runden bleibt zwangsläufig `Ass – Partnerkarte – Ass` übrig.

:::tip[Vollständig nachgerechnet]
Eine Simulation des kompletten Ablaufs (paralleler 50-Karten-Stack → Ziehen → Cut → Asse einsetzen → Deal) bestätigt: Für **alle 50 möglichen Ziehpositionen** isoliert das Verfahren zuverlässig die korrekte Partnerkarte. Es ist also nicht „ungefähr", sondern mathematisch eindeutig.
:::

## Verwandte Prinzipien

- Das Eliminierungs-Austeilen ist mit dem **Down-Under-Deal** (*Australian Shuffle*) verwandt, nutzt aber zwei Stapel statt „eine ab, eine drunter".
- [Stay Stack / Mirror Stack](/konzepte/stay-stack) — das zugrundeliegende Deck-Setup
- [Force](/techniken/controls/) — verwandte Methoden, um Karten unbemerkt zu steuern

## Kartenzahl im Verlauf

Die Anzahl der Karten ändert sich im Ablauf – entscheidend dafür, dass der Deal am Ende symmetrisch aufgeht:

| Schritt | Karten | |
|---|---|---|
| Stay Stack herstellen | 52 | volles Deck |
| Pik- & Kreuz-Ass heraussuchen | 50 | Asse liegen separat bereit |
| Zuschauer zieht eine Karte | 49 | |
| Asse an 10. von oben/unten einsetzen | 51 | symmetrisch um die Mitte → Deal beginnt |

Diese Abfolge entspricht exakt der Vorführung von Matthias Berger und ist für jede Ziehposition durchgerechnet.
