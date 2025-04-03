---
title: O.Arch_6
desc_long: Nutzt das Hintergrundsystem Drittanbieter-Software (etwa für Datenbanken, Authentifizierung oder Logging), MUSS der Hersteller sicherstellen4, dass nur solche Drittanbieter-Software zum Einsatz kommt, deren zu nutzende Funktionen sicher genutzt werden können und dem Nutzer Informationen über den Nutzungsumfang und die eingesetzten Sicherheitsmechanismen klar darstellt. Das Hintergrundsystem MUSS diese Funktionen sicher nutzen. Der Hersteller MUSS darüber hinaus sicherstellen4, dass ungenutzte Funktionen durch Dritte nicht aktiviert werden können.
desc_short: Sichere Nutzung der Funktionen von Drittanbieter-Software.
depth: examine
remarks: Der Evaluator prüft, durch Quelltextanalyse und praktische Tests, dass Funktionalitäten sicher verwendet werden und ungenutzte Funktionalitäten nicht zugänglich sind. Darüber hinaus prüft er, ob der Nutzer ausreichend über die Verwendung von Drittanbieter-Software informiert wird.
---

## Das sind mindestens 3 sehr schwammige Punkte. Was bedeutet das?

`Quelle: Gespräche mit TÜViT`

Es wird eine Quelltextanalyse durchgeführt. Im Rahmen dessen wird geprüft, ob Sicherheitsfunktionen wie Authentifizierung, Logging und Authorisierung implementiert sind. Es wird betrachtet, ob Standardlösungen oder eigene Umsetzungen angewendet werden und ob deren Anwendung den aktuellen Empfehlungen entspricht.

Als Antragstellender sollte aufgelistet werden, welche Libraries verwendet werden, und wie die Authentisierung zwischen den Backendkomponenten umgesetzt ist.
