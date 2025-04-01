---
title: O.Source_4
desc_long: Bei Ausnahmen im Programmablauf (Exceptions SOLL das Hintergrundsystem Zugriffe auf sensible Daten abbrechen und die Anwendung anweisen, diese im Speicher sicher zu löschen.
desc_short: Abbruch des Zugriffs auf sensible Daten bei Exceptions.
depth: examine
remarks: Der Evaluator prüft den Zugriff auf sensible Daten bei Ausnahmen im Programmablauf. Jeglicher identifizierte Zugriff muss in der Risikobewertung betrachtet werden.
---

## Meine Sprache hat keine manuelle Speicherveraltung. Wie soll das umgesetzt werden?

`Quelle: Gespräche mit TÜViT`

In diesem Fall ist die Anforderung automatisch ein `FAIL` allerdings mit einer guten Begründung. Ein `FAIL` ist nicht automatisch ein Scheitern beim BSI. Da es sich nur um ein `SOLL` Kriterium handelt kann dies in der Risikoanalyse behandelt werden.
