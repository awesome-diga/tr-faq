---
title: O.Data_1
desc_long: Sensible Daten MÜSSEN verschlüsselt gespeichert werden. Das Hintergrundsystem SOLL sensible Daten, verschlüsselt speichern, so dass sie nur von dem Nutzer selber wieder entschlüsselt werden können.
desc_short: Verschlüsselung aller sensiblen Daten.
depth: examine
remarks: Der Evaluator validiert, dass sensible Daten (s. Anhang A) im Hintergrundsystem nur verschlüsselt gespeichert werden. Der Evaluator prüft das Verschlüsselungskonzept des Herstellers und berücksichtigt die Abwägungen des Herstellers in der Risikobetrachtung.
---

## Wie ist der `SOLL` Teil der Anforderung auszulegen? Wie kann ich das erfüllen?

`Quelle: Gespräch direkt mit BSI auf der DMEA`

Grundsätzlich sieht das BSI 3 Möglichkeiten den `SOLL` Teil der Anforderung zu erfüllen.

1. **Verarbeitung und Speicherung der Daten passiert nur im Frontend.** In diesem Fall ist Teil 3 der TR nicht anwendbar.
2. **Verarbeitung im Frontend und Speicherung im Backend.** In diesem Fall ist das `SOLL` Kriterium zu erfüllen.
3. **Verarbeitung und Speicherung im Backend.** In diesem Fall kann das `SOLL` Kriterium in machen Fällen aufgrund technicher Limitationen, derzeit als nicht anwendbar gewertet werden.

### Anmerkung zu Fall 2

Hier ist zum Beispiel eine Umsetzung denkbar, in der Schlüsselmaterial nur am Endgerät des Kunden verfügbar ist, und Daten nur in am Endpunkt verschlüsselter Form ans Backendsystem übermittelt werden.
Die Daten liegen dann im Hintergrundsystem nur verschlüsselt vor und können ohne den Schlüssel den nur der Kunde auf seinem Endgerät hat auch nicht mehr entschlüsselt werden.

### Anmerkung zu Fall 3

Welche Fälle hier konkret gemeint sind ist zum jetzigen Zeitpunkt nicht geklärt. Was der Author dieses Kommentars (nicht vom BSI bestätigt) sich jedoch vorstellen kann, ist das
hier eine Argumentationslinie notwendig ist die zeigt, dass eine Verarbeitung im Hintergrundsystem zur Erfüllung des Zweckes der Anwendung erforderlich ist,
und das daher die Daten im Backend in unverschlüsselter Weise vorliegen müssen.
Eine Verschlüsselung unter _betreiber Ausschluß_ ist in diesem Fall derzeit im Allgemeinen technisch nicht möglich.
Daher ist der Punkt nicht anwendbar im Sinne der Definition von `SOLL` Kriterien.
