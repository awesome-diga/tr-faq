---
title: O.Ntwk_7
desc_long: Das Hintergrundsystem MUSS für alle aufgebauten Verbindungen sowie Verbindungsversuche Log-Dateien vorhalten.
desc_short: Vorhaltung von vollständigen Log-Dateien für alle aufgebauten Verbindungen.
depth: check
remarks: Der Evaluator überprüft die von dem Anbieter bereitgestellten Log-Dateien und validiert, dass die HTTP-Header vollständig miterfasst sind. Wenn kein Logging sicherheitsrelevanter Ereignisse auf dem Hintergrundsystem stattfindet, muss dieser Aspekt in der Risikobewertung berücksichtigt werden.
---

## Dürfen wir sensible Werte in Headern maskieren ohne ein FAIL zu riskieren?

`Quelle: Gespräche mit TÜViT`

Ja.

## Müssen auch interne Netzwerkverbindungen protokolliert werden?

`Quelle: Gespräche mit TÜViT`

Ja. Dies sollte sich in der Regel durch applikationsspezifische Logs abdecken lassen.
