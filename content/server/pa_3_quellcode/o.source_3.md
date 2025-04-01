---
title: O.Source_3
desc_long: Potenzielle Ausnahmen im Programmablauf (Exceptions) MÜSSEN abgefangen, kontrolliert behandelt und dokumentiert werden. Technische Fehlerbeschreibungen (z.B. Stack Traces) DÜRFEN dem Nutzer NICHT angezeigt werden.
desc_short: Kontrollierte Behandlung und Dokumentation von Ausnahmen („Exceptions“).
depth: examine
remarks: Der Evaluator prüft durch Quelltextanalyse und praktische Tests die kontrollierte Behandlung und Dokumentation von Exceptions.
---

## Bedeutet 'dokumentiert' hier 'geloggt'?

`Quelle: Gespräche mit TÜViT`

`Log and Rethrow` soll hier definitiv nicht verlangt oder gefördert werden. In der Quellcodeanalyse muss sichtbar sein, dass Exceptions behandelt und nicht einfach ignoriert werden. Wenn es dann dazu auch noch interne Guidelines gibt, sollte einem `PASS` nichts im Wege stehen.
