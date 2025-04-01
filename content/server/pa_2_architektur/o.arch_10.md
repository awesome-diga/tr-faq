---
title: O.Arch_10
desc_long: Dienste, die das Hintergrundsystem zur Verfügung stellt, SOLLEN nur mit den notwendigen Rechten ausgeführt werden. Dienste, die von außen erreichbar sind, DÜRFEN NICHT mit Administrator-, System- bzw. Root-Rechten laufen
desc_short: Dienste mit minimalen Rechten.
depth: check
remarks: Der Evaluator prüft die von dem Hersteller bereitgestellte Liste aller in den Hintergrundsystemen laufenden Dienste, die Beschreibung des Zwecks des entsprechenden Dienstes und welche Rechte für diesen Zweck notwendig sind. Anschließend verifiziert der Evaluator auf den Hintergrundsystemen, ob tatsächlich nur die notwenigen Rechte erteilt werden.
---

## Darf ich mit erhöhten Rechten starten und diese dann droppen?

`Quelle: Gespräche mit TÜViT`

Die Anwendung darf nicht mit erhöhten Rechten betrieben werden.
Ein Starten mit erhöhten Rechten und einem entsprechenden Permission-Drop war mit einem `PASS` vereinbar.

## Was bedeutet von außen erreichbar?

`Quelle: Gespräche mit TÜViT`

Jedes System, das direkt oder indirekt Anfragen erhält, die ihren Ursprung nicht in eigenen Systemen haben.

Also kurz, alles, wo irgendwo im Pfad der Aufrufenden mal ein externes System drinnen war.
